let result = (() => {
    let id = 0;
    class Extensible {
        constructor() {
            this.id = id++;
        }

        extend(template) {
            for (let prop in template) {
                if (template.hasOwnProperty(prop)) {
                    let element = template[prop];
                    if (typeof  element === 'function') {
                        Extensible.prototype[prop] = element;
                    } else {
                        this[prop] = element;
                    }
                }
            }
        }
    }

    return Extensible;

})();