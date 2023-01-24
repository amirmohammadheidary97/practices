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
تا زمانی که این حلقه به پایان نرسه ابدا حتی اگه روی چیزیکلیک سا هاور کنیم انجامش نمیده و اون تسک رو میفرسته به صف.
همه این بدبختی ها بخاطر سینگل ترد بون هست .


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
