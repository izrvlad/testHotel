export function orderByState(state, array) {
    array = [...array]
    if (state.price === 'ask') {
        return array.sort((a, b) => a.price - b.price)
    }
    if (state.price === 'desc') {
        return array.sort((a, b) => b.price - a.price)
    }
    if (state.stars === 'ask') {
        return array.sort((a, b) => a.stars - b.stars)
    }
    if (state.stars === 'desc') {
        return array.sort((a, b) => b.stars - a.stars)
    }
    return array

}