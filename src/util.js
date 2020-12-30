export default {
    formatCurrency: function (num) {
        return Number(num.toFixed(2)).toLocaleString() + ' ' + '$';
    }
}