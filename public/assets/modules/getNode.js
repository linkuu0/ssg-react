export const getNodeList = (selector, context = document) => {
    return context.querySelectorAll(selector);
};

export const getNode = (...args) => getNodeList(...args)[0];