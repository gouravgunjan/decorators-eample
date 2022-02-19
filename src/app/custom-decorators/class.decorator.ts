export function logClass(prefix?: string) {
    console.log('-- decorator factory invoked ---');
    return function(constructor: Function) {
        console.log('--- decorator invoked ----' + prefix);
        constructor.prototype.prefix = prefix;
    }
}
