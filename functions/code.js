const firstFunction = (a, b) => {
    let j = 0;
    return (c) => {
        console.log(a * c);
    }
}

firstFunction(1,2)(3);