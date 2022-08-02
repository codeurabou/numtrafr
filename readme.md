# numtrafr

- Une libraire qui permet de traduire les chiffres en lettres 
- Respecte la grammaire française et les accors
- Prise en charge des chiffres logn comme 999.999.999.999 (bilions)
- Open source et accessible a tous

## Installation

`npm install numtrafr`

### Exemple d'utilisation

```js
    const formatWord = require("numtrafr")
    // pass num 
    console.log(formatWord(1900000)) // Un milions neufs cents milles
```