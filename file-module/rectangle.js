module.exports.perimeter = function (x, y) {
    return 2 * (x + y);
}

module.exports.area = function (x, y) {
    return x * y;
}


/*
1. exports and module are global in node js module.
2. exports is reference of module.exports
3. require return module.exports, not exports
4. exports = is another assignment and not visible to reference modules.
5. exports.xxx is to add property to the object as well as module.exports
6. default value for module.exports is {}
7. if the module is a class, please use module.exports = , then use new method
*/