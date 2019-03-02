export as namespace jsminiExtend;

export function assign (target: object, ...sourceList: Array<object>): object;
export function extend (target: object, ...sourceList: Array<object>): object;
export function extendDeep (target: object | Array<any>, ...sourceList: Array<object | Array<any>>): object | Array<any>;

