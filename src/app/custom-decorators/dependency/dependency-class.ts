import { setMap } from "src/app/utils"

export function DependencyModule(registry: any) {
    setMap(registry);
    return function(constructor: Function) {
    }
}
