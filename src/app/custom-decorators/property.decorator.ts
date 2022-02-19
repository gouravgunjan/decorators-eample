export function logProperty() {
    return function<T>(target: Object, propertyKey: string) {
        let value: T;
        const getter = function () {
            console.log('Getting our decorated value');
            return value;
        }
        const setter = function(newVal: T) {
            console.log('Setting our custom decorated property');
            value = newVal;
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}