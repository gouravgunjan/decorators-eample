export function logMethod(shouldLogTime?: boolean) {
    return function(target: any, methodName: string, descriptor: any) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.log('Starting method ' + methodName, descriptor);
            const startTime = new Date();
            const result = originalMethod.apply(this, args); // actual method is executed here
            if (shouldLogTime) {
                const endTime = new Date();
                console.log(`${methodName} took ${endTime.valueOf() - startTime.valueOf()}ms to complete`);
            }
            return result;
        }
        return descriptor;
    }
}