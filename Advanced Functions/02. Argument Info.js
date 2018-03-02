function argumentsInfo() {
    let counter = new Map();
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ': ' + obj)
        if(counter.get(type)){
            counter.set(type, counter.get(type) + 1);
        }else{
            counter.set(type, 1);

        }
    }
    [...counter]
        .sort((a,b) => b[1] - a[1])
        .forEach(c =>{
            console.log(`${c[0]} = ${c[1]}`)
        });
}

argumentsInfo({ name: 'bob'}, 3.333, 9.999)