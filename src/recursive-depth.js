module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let count = 1;
        arr.forEach(item => {
            if (Array.isArray(item)) {
                count = Math.max(count, 1 + this.calculateDepth(item));
            }
        });
        return count;
        // remove line with error and write your code here
    }
};