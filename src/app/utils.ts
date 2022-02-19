let tokenObjectMap: any = {};

export const getObjectFromToken = (token: string) => {
    return tokenObjectMap[token];
}

export const setMap = (map: Map<string, any>) => {
    tokenObjectMap = map;
}