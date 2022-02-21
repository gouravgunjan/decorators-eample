import { Type } from "@angular/core";
import { setMap } from "src/app/utils"

export function DependencyModule(singletonClasses: Type<any>[]) {
    setMap(singletonClasses);
    return function(constructor: any) {}
}
