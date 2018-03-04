function extensibleObj() {
    let obj = {
        extend: function (template) {
            for (let key in template) {
                if (template.hasOwnProperty(key)) {
                    const element = template[key];
                    if (typeof (element) === 'function') {
                        obj.__proto__[key] = element;
                    } else {
                        obj[key] = element;
                    }
                }
            }
        }
    };
    return obj;
}

let myObject = extensibleObj();
let template = {
    extensionMethod: function () {
        console.log('Ivan');
    },
    extensionProperty: 'someString'
};

myObject.extend(template);

console.log(myObject.__proto__);
console.log(myObject);