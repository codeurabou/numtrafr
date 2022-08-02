const { centaine, capitalize, absolute, numStr, unites, base, ten } = require("./convertion")


const splitNum = (num) => {
    const absVal = absolute(num)
    const strVal = numStr(absVal)
    const len = strVal.length
    const out = []
    for (let i = 0; i < len; i += 3) {
        const pos = (len - 1) - i
        const piece = `${strVal[pos - 2] || ''}${strVal[pos - 1] || ''}${strVal[pos] || ''}`
        out.push(piece)
    }
    return out.reverse()
}
const convertNumToWord = (numTab) => {
    if (!numTab) return
    const tab = numTab
    const lot = numTab.length
    let res = '';
    let dep = 2
    if (lot === 1) {
        const conv = centaine(tab[0])
        res = conv
    }
    else if (lot === 2) {
        for (let i = 0; i < lot; i++) {
            dep++
            const conv = centaine(tab[i], unites[dep])
            res += `${conv} `
        }
    }
    else if (lot === 3) {
        dep = 1;
        for (let i = 0; i < lot; i++) {
            dep++
            const conv = centaine(tab[i], unites[dep])
            res += `${conv} `
        }
    }
    else if (lot === 4) {
        dep = 0
        for (let i = 0; i < lot; i++) {
            dep++
            const conv = centaine(tab[i], unites[dep])
            res += `${conv} `
        }
    }
    else if (lot === 5) {
        dep = -1
        for (let i = 0; i < lot; i++) {
            dep++
            const conv = centaine(tab[i], unites[dep])
            res += `${conv} `
        }
    }
    else throw new Error("trillons depasser")
    return res
}

module.exports = { splitNum, convertNumToWord }