import { getObjectFromToken } from "src/app/utils";

export function DependencyParam(token: string) {
    return function<T>(target: Object, propertyKey: string) {
        let value: T;
        const getter = function () {
            return getObjectFromToken(token);
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: undefined
        });
    }
}