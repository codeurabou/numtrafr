import { centaine } from "./convertion.js"

const base = {
    1: "un", 2: "deux", 3: "trois", 4: "quatres", 5: "cinq",
    6: "six", 7: "sept", 8: "huit", 9: "neufs", 0: "zero"
}
const ten = {
    10: "dix", 11: "onze", 12: "douze", 13: "treize", 14: "quatorze", 15: "quinze", 16: "sinze",
    17: "dix-sept", 18: "dix-huit", 19: "dix-neufs", 20: "vingt", 30: "trente", 40: "quarante",
    50: "cinquante", 60: "soixante", 70: "soixante-dix", 80: "quatre-vingt", 90: "quatre-vingt-dix"
}
const unites = ["bilions", "miliards", "milions", "milles"]

const capitalize = (word) => word && word[0].toLocaleUpperCase() + word.substr(1, word.length)
const absolute = (num) => Math.abs(parseInt(num, 10))
const numStr = (num) => new String(absolute(num))
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

export { numStr, absolute, splitNum, capitalize, convertNumToWord, unites, base, ten }