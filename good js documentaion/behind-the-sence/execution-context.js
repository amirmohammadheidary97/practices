/*

وقتی که مرورگر در حال خواندن اچ‌تی‌ام‌ال است هر تگ اسکریپتی که دریافت کند
آن را با موتور جاوااسکریپت میدهد و
  موتور جاوااسکریپت  کد های جی‌اس را دریافت میکند و
یک محیطی را ایجاد میکند که به آن 
execution context
گفته میشود.

این کانتکست شامل کد های درحال اجرا میباشد


اتفاقی که در زمان ران تایم کاتکست میافتد به ترتیب زیر است :
1 - کد ها توسط پارسر پارس میشوند
2 - متغیر ها و توابع در مموری ذخیره میشوند .
3 - بایت کدها یا کد هایی که به زبان ماشین هستند ساخته میشوند
4 - بایت کد ها اجرا میشوند



دو مدل کانتکست وجود دارد :
1 - Global Execution Context (GEC)
2 - Function Execution Context (FEX)

GEX :
 کانتکستی است که به واسطه یک تگ اسکریپت ساخته میشود و تمام کدهای درون آن به 
 غیر از توابع اجرا میشوند (* چون توابع زمانی اجرا میشوند که فراخوانی شوند)
  پس به ازای هر فایل جاوااسکریپت یک کانتکست گلوبال وجود دارد .

FEC : 
کانتکستی که به واسطه فراخوانی یک تابع بوجود میاید و کد های آن تابع وارد آن میشوند .
پس به ازای هر تابع یک کانتکست ساخته میشود .




فاز های ساخت کانتکست :

1 - فاز ساخت 
2 - فاز اجرا

Creation Phase :
در فاز ساخت سه مرحله طی میشود :

1 - if (Global Execution Context) {
  Creation of the Variable Object (VO) :

    for each variable declared with the var keyword, a property is added to VO that points to that variable and is set to 'undefined'.

    for every function declaration, a property is added to the VO, pointing to that function, and that property is stored in memory. This means that all the function declarations will be stored and made accessible inside the VO, even before the code starts running.

}
else if(Function Execution Context){
  Generation an array-like object called the 'argument' object:

    The FEC, on the other hand, does not construct a VO. Rather,
    it generates an array-like object called the 'argument' object,
    which includes all of the arguments supplied to the function.
}

* Hoisting : 
از اونجایی که در فاز ساخت 
VO
متغیر هایی که با 
var
تعریف شدند و
function deceleration 
ها به 
vo
میچسبند در فاز اجرای کد ها میتوان از آن ها  قبل از رسیدن به خطی که تعریف شده اند استفاده کرد .





*/
