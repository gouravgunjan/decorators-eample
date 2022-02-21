import { Type } from "@angular/core";

let typeInstanceMap = new Map<Type<any>, any>();

export const getObjectFromToken = (token: Type<any>) => {
    return typeInstanceMap.get(token);
}

export const setMap = (singletonClasses: Type<any>[]) => {
    singletonClasses.forEach(item => {
        typeInstanceMap.set(item, new item())
    });
}