import { Type } from "@angular/core";
import { getObjectFromToken } from "src/app/utils";

export function DependencyParam(token: Type<any>) {
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