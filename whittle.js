module.exports = function (comparator, ...vargs) {
    const whittleLeft = vargs.shift()
    const whittleRight = vargs.shift() || whittleLeft
    return function (left, right) {
        return comparator(whittleLeft(left), whittleRight(right))
    }
}
