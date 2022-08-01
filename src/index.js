import { capitalize, convertNumToWord, splitNum } from "./utils.js"

const formatWord = (num) => {
    if (!num) return
    const sNum = splitNum(num)
    const word = convertNumToWord(sNum)
    const splitAndJoinAndTrim = word.split('-').join(' ').trim(' ')
    const finalWord = splitAndJoinAndTrim
    return capitalize(finalWord)
}
