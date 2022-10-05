export const loop = (callback, repectCount = 10) => {
    Array(repectCount).fill(null).forEach(callback);
};