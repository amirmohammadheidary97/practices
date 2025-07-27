const s = `

EVENT LOOP :
ایونت لوپ یک حلقه بی نهایت هست که توسط موتور پردازنده جاوااسکریپت ایجاد 
میشه . در این پروسه موتور منتظر اومدن تسک ها هست و وقتی تسکی بیاد اون رو
انجام میده.

وقتی که موتور مشغول پردازش و اجرای یک تسک هست اگر تسک دیگه ای وارد بشه موتور اون رو میفرسته داخل یک صف
و وقتی تسک فعلی به اتمام برسه میره سراغ قدیمی ترین تسکی که وارد صف شده.

MACROTASK QUEUE :
به این صف "صف ماکروتسک" گفته میشه 

نکته :
زمانی که مرورگر در حال انجام یک تسک باشد تسک دیگری نمیپذیرد
مثلا اگر یک حلقه بسازیم که از صفر تا 1 میلیارد بشماره ، موتور جاوااسکریپت
تا زمانی که این حلقه به پایان نرسه ابدا حتی اگه روی چیزی کلیک یا هاور کنیم انجامش نمیده و اون تسک رو میفرسته به صف.
همه این بدبختی ها بخاطر سینگل ترد بودن هست .

MACROTASK:
setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering

MICROTASK:
process.nextTick, Promises, queueMicrotask, MutationObserver

* After a macrotask has finished, all available microtasks will be processed.
موتور جاوااسکریپت در لحظه میتونه فقط یک تسک رو انجام بده
وقتی که یک ماکرو تسک به اتمام برسه اول تمام میکروتسک ها انجام میشن 
و بعدش ماکروتسک بعدی شروع میشه .

اگر ماکروتسک های سنگین (مثل شمردن از صفر تا 1 میلیارد) به ماکرو تسک های کوچیکتر تقسیم بشن
که زمان و هزینه‌ی کمتری نسبت به ماکروتسک بزرگ مصرف کنن اینجوری 
موتور جی‌اس بین مریض اگه میکروتسکی هم بیاد قبول میکنه و انجام میده .

مثله صف نانوایی

ممکنه یک نانوایی 50 تا مشتری داشته باشه که در مجموع 200 تا نون بخوان

دو حالت میتونه نون رو به مشتریا برسونه :

1 : این 50 نفر صبر کنن که 200 تا نون پخته بشه و بعد یکجا بین همشون پخش بشه و بگیرن و برن .

2 : یک صف مرتب درست کنن و به هرکسی که زودتر وارد صف شده تعداد نون هایی که میخواد رو بهش بدن تا معطل نشه که 
همه‌ی 200 تا نون پخته بشه و بعدش بره .

تبصره ماده ! :
 کسایی که بیشتر از 5 تا نون میخوان میشن ماکرو تسک
کسایی که یه دونه نون میخوان میشن میکرو تسک
 میکروتسک ها چون فقط یه نون میخوان میتونن خارج از صف اگر یک ماکرو تسک نونشو گرفتهو تازه داره نوبت ماکروتسک بعدی 
 میشه میتونه بیاد نونش رو بگیره و بره تا خیلی معطل نشه
 اینکه بین دو تا ماکرو تسک چندتا میکرو تسک میتونن نون بگیرن بستگی به رییس نونوایی داره











 JS has three "stacks":

 1 - standard stack for all synchronous calls (one function calls another, etc)
 2 - microtask queue (or job queue or microtask stack) for all async operations with higher priority (process.nextTick, Promises, Object.observe, MutationObserver)
 3 - macrotask queue (or event queue, task queue, macrotask queue) for all async operations with lower priority (setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering)
 |=======|
 | macro |
 | [...] |
 |       |
 |=======|
 | micro |
 | [...] |
 |       |
 |=======|
 | stack |
 | [...] |
 |       |
 |=======|
 And event loop works this way:
 
 - execute everything from bottom to top from the stack, and ONLY when the stack is empty, check what is going on in queues above
 - check micro stack and execute everything there (if required) with help of stack, one micro-task after another until the microtask queue is empty or don't require any execution and ONLY then check the macro stack
 - check macro stack and execute everything there (if required) with help of the stack
 
 Micro stack won't be touched if the stack isn't empty. The macro stack won't be touched if the micro stack isn't empty OR does not require any execution.
 
 To sum up: 
 microtask queue is almost the same as macrotask queue but those tasks (process.nextTick, Promises, Object.observe, MutationObserver) have higher priority than macrotasks.
 
 Micro is like macro but with higher priority.
 
 Here you have "ultimate" code for understanding everything.














EXAMPLE :
===================================

let i = 0;

let start = Date.now();

function count() {

  // do a piece of the heavy job (*)
  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    alert("Done in " + (Date.now() - start) + 'ms');
  } else {
    setTimeout(count); // schedule the new call (**)
  }

}

count();

====================================

BEHIND THE SCENCE :

macrotask queue = [
  1:  1000_000 - 2000_000,
  1:  onClick()
  2:  2000_000 - 3000_000,
  .
  .
  .
  1000: 999_000_000 - 1_000_000_000
]


======================================
EXAMPLE2 :

let i = 0;

let start = Date.now();

function count() {

  // move the scheduling to the beginning
  // اول میفرسته توی صف ماکروتسک
  if (i < 1e9 - 1e6) {
    setTimeout(count); // schedule the new call
  }

  // کار های زیر تموم شد میره سراغ 
  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    alert("Done in " + (Date.now() - start) + 'ms');
  }
}

count();



BEHIND THE SCENCE :


macrotaskQueue=[
  count(),

]
=================================
EXAMPLE3:

<div id="progress"></div>

<script>
  let i = 0;

  function count() {

    // do a piece of the heavy job (*)
    do {
      i++;
      progress.innerHTML = i;
    } while (i % 1e3 != 0);

    if (i < 1e7) {
      setTimeout(count);
    }

  }

  count();
</script>
======================================




`;
