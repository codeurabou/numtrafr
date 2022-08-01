import { absolute, base, numStr, ten, unites } from "./utils.js"

const unite = (num) => {
    const absVal = absolute(num)
    const len = numStr(num).length
    if (len == 1) return base[absVal]
    else throw new Error("unite invalide")
}
const dizaine = (num) => {
    const absVal = absolute(num)
    const len = numStr(absVal).length
    const strVal = numStr(absVal)
    if (len == 2) {
        if (ten[absVal]) return ten[absVal] // pile exepmle 11 , 12 
        else { // avec unite exemple 21,21
            const objectArray = Object.entries(ten)
            const find = objectArray.filter(d => d[0].startsWith(strVal[0]))[0]
            const letter = find[1]
            const notContainsDix = !letter.endsWith("-dix")
            if (notContainsDix) return `${letter} ${unite(strVal.split('')[1])}`
            else { // avec unite dix inclut
                const find = objectArray.filter(d => d[0].endsWith(strVal[1]))[0]
                return `${letter.split('-dix')[0]} ${find[1]}`
            }
        }
    }
    else throw new Error("dizaine invalide")
}
const centaine = (num, letter = '') => {
    const strVal = numStr(num)
    const len = strVal.length
    let result;
    if (letter && !unites.includes(letter)) throw new Error("unite invalide")
    const r1 = /[1-9]/
    const r2 = /[0-9]/
    if (len === 1 || (strVal[0] === '0' && strVal[1] === '0' && len === 3)) {
        const conv = unite(strVal)
        if (conv === "un" && ["milles", "cents"].includes(letter))
            result = `${letter.substr(0, letter.length - 1)}`
        else result = conv !== 'zero' ? `${conv} ${letter}` : ''
    }
    else if (len === 2) {
        const conv = dizaine(strVal)
        result = `${conv} ${letter}`
    }
    else if (len == 3) {
        const sValue = strVal && strVal.split('')
        // Avec regles du francais
        // isoler quelque logiques
        if (sValue[1] === '0' && sValue[2] === '0') {
            const lNum = sValue[0]
            const conv = unite(lNum)
            if (conv === "un") result = `cents ${letter.substr(0, letter.length - 1)}`
            else result = `${conv} cents ${letter}`
        }
        else if (sValue[1] == '0' && r1.test(sValue[2])) {
            const lNum = sValue[0]
            const rNum = sValue[2]
            const c1 = unite(lNum)
            const c2 = unite(rNum)
            if (c1 === "un") result = `cents ${c2} ${letter}`
            else result = `${c1} cents ${c2} ${letter}`
        }
        // 1-9 et 0-9
        else if (r1.test(sValue[1]) && r2.test(sValue[2])) {
            const lNum = sValue[0]
            const rNum = `${sValue[1]}${sValue[2]}`
            const c1 = unite(lNum)
            const c2 = dizaine(rNum)
            if (c1 === "un") result = `cents ${c2} ${letter}`
            else result = `${c1} cents ${c2} ${letter}`
        }
        else throw new Error("Erreur de traduction")
    }
    else throw new Error("centaine invalide")
    return result
}

export { centaine }