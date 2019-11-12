function customCloneDeep(obj) {

    if (['number', 'string', 'boolean'].indexOf(typeof obj) !== -1) {
        return obj;
    }
    if (obj instanceof Date) {
        return new Date().setTime(obj.getTime());
    }
    if (obj instanceof Object && !(obj instanceof Array) && !(obj instanceof Function) ) {
        const copy = new obj.constructor() || {};
        for (const attribute in obj) {
            if (obj.hasOwnProperty(attribute)) {
                copy[attribute] = obj[attribute] ? customCloneDeep(obj[attribute]) : obj[attribute];
            }
        }
        return copy;
    }
    if (obj instanceof Array) {
        const copy = [];
        obj.forEach(item => {
            copy.push(customCloneDeep(item));
        });
        return copy;
    }
    if (obj instanceof Function) {
        return obj;
    }
    
} 


module.exports = customCloneDeep
