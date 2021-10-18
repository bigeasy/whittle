module.exports = function (comparator, ...vargs) {
    const reversal = typeof vargs[vargs.length - 1] == 'boolean' ? vargs.pop() : false
    const whittleLeft = vargs.shift()
    const whittleRight = vargs.shift() || whittleLeft
    if (reversal) {
        return function (left, right, reversal) {
            return comparator(whittleLeft(left), whittleRight(right), reversal)
        }
    }
    return function (left, right) {
        return comparator(whittleLeft(left), whittleRight(right), reversal)
    }
}
