export function logParameter() {
    return function(target: any, methodName: string, parameterIndex: number) {
        console.log('Custom log for ' + methodName + ' at ' + parameterIndex);
    }
}