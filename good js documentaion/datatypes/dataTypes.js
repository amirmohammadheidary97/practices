
const dataTypes = {
    primitive: {
        numbers: {
            usedFor: "decimals and integers",
            "so-called": "Floating point numbers. ",
            facts: [
                { fact0: "The number type represents both integer and floating point numbers." },
                {
                    fact1: `JavaScript Numbers are Always 64-bit Floating Point
                    Unlike many other programming languages, JavaScript does not define
                    different types of numbers, like integers, short, long, floating-point etc.
                    JavaScript numbers are always stored as double precision floating point numbers,
                    following the international IEEE 754 standard.`
                },
            ]
        },
        string: {
            usedFor: "text",
            description: "sequence of charachters ."
        },
        boolean: {
            usedFor: "decesion making",
            description: "it is a logical type that can only be true or false"
        },
        undefined: {
            description: "value taken by a variable that is not defined yet ('empty value')"
        },
        null: {
            description: "empty value"
        },
        symbol: {
            description: "unique and unchangable value"
        },
        bigInt:{
            description:"larger integers than the Number Type can hold "
        }
    },
    ['non-primitive']: {
        facts: [
            { fact0: "non primitives are objects" },
            { fact1: "." },
        ]
    }
}
 
const fact0 = `
مجبور نیستیم موقع تعریف متغیر نوع داده را مشخص کنیم و
 نوع داده به صورت اتوماتیک و طبق مقدار داخل متغیر مشخص میشود 
`;
const fact1 = `
    در جاوااسکریپت داده نوع میگیرد نه متغیر .
    it's the value that has a type , not the variable .
`;


console.log("2"-'2');
console.log("2"-2);
console.log("2"**2);