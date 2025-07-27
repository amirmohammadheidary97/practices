const explantion = `
    in javascript a function is an special kind of value.
    در جاوا اسکریپت فانکشن ها نوع خاصی از مقدار هستند.
    no matter how the function is created, a function is a value.
    مهم نیست که چجوری ساخته میشن ، اونا مقدار هستن 
    A function is a value representing an “action”
    یک فانکشن یک مقداری هست که یک اکشن رو ارائه میده .
    regualr values like string or number represent the "data";
    اما بقیه مقداره مثل رشته و عدد به ما دیتا میدن .
`;

const functionTypes={
    functionDeclaration : `
    STRUCTURE : function myFunc(){}
    it can be used before declaration
    `,
    functionExpression:`
    STRUCTURE : const myFunc = function(){}
    it can not be used before declaration.
    اگر از این نوع فانکشن در یک آبجکت استفاده کنیم میتوانیم به 
    this
    که به آبجکت اشاره میکنه دسترسی داشته باشیم
    `,
    arrowFunction:`
    STRUCTURE : const myFunc = ()=>{}
    اگر از این نوع فانکشن در یک آبجکت استفاده کنیم نمیتوانیم به 
    this
    که به آبجکت اشاره میکنه دسترسی داشته باشیم
    `
}

