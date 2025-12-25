const logger = (store) => (next) => (action) => {
    console.log('Действие:', action);

    return next(action);
};