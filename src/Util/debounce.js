const debounce = (func, delay) => {
    let timeout = -1;

    return (...args) => {
        if (timeout !== -1) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(func, delay, ...args);
    };
};

export default debounce;