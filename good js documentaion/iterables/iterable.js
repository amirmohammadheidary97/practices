const iterableObjects = `
 آبجکت های ایتریل(تکرار شونده ) تعمیمی از آرایه ها هستند .
 آبجکت ها اتریبل قابل استفاده در سینتکس 
 for of
 هستند .


 تکرار پذیر بودن  یک مفهوم است 
 آبجکت های زیادی در جاوااسکریپت تکرار پذیر هستند 
 مثل رشته ها یا آرایه ها

 میتوان یک آبجکتی که تکرار پذیر نیست را تکراپذیر کرد 
`;
///////// Way1 :
const mySympleIterableObject0 = {
    from: 0,
    to: 10,
    [Symbol.iterator]: function () {
        return {
            current: this.from,
            last: this.to,
            next() {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ }
                }
                else return { done: true, value: this.to }
            }
        }
    }
}
///////// Way2 :
const mySympleIterableObject1 = {
    from: 0,
    to: 10,
    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },
    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ }
        }
        else return { done: true }
    }
}
///////// Way3 :
const mySympleIterableObject2 = {
    from: 0,
    to: 10,
}
mySympleIterableObject2[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ }
            }
            else return { done: true }
        }
    }
}


//////////////