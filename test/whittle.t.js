require('proof')(1, okay => {
    const whittle = require('..')
    function comparator (left, right) {
        return left - right
    }

    const whittled = whittle(comparator, object => object[0])

    okay(whittled([ 1 ], [ 1 ]), 0, 'whittled')
})
