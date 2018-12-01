import { isObject, isArray, isFunction } from '@jsmini/is';

// Object.create(null) 的对象，没有hasOwnProperty方法
function hasOwnProp(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}

export const assign = isFunction(Object.assign) ? Object.assign : function assign(target, ...sourceList) {
    if (!isObject(target)) {
        throw new TypeError('assign first param must is object');
    }

    for (let i = 0; i < sourceList.length; i++) {
        const source = sourceList[i];

        if (isObject(source)) {
            for(let key in source) {
                if (hasOwnProp(source, key)) {
                    target[key] = source[key];
                }
            }
        }
    }

    return target;
};

export function extend(...args) {
    return assign(...args);
}

export function extendDeep(target, ...sourceList) {
    // 深拷贝
    if (!isObject(target) && !isArray(target)) {
        throw new TypeError('extend target param must is object');
    }

    for (let i = 0; i < sourceList.length; i++) {
        const source = sourceList[i];
        for (let name in source) {
            const src = target[name];
            const copy = source[name];
            
            //避免无限循环
            if (target === copy) {
                continue;
            }

            // 非可枚举属性
            if (!hasOwnProp(source, name)) {
                continue;
            }
            
            let copyIsArr;
            if (copy && (isObject(copy) || (copyIsArr = isArray(copy)))) {
                let clone;
                if (copyIsArr) {
                    clone = src && isArray(src) ? src : [];
                } else {
                    clone = src && isObject(src) ? src : {};
                }
                target[name] = extendDeep(clone, copy);
            } else if (typeof copy !== 'undefined'){
                target[name] = copy;
            }
        }
    }

    return target;
}
