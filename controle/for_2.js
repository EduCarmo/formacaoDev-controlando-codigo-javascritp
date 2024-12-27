// [1-1] [1-2] [1-3]
// [2-1] [2-2] [2-3]
// [3-1] [3-2] [3-3]

let conteudo = ''

for (let li = 1; li <= 3; li++) {
    for (let col = 1; col <= 3; col++) {
        conteudo += `[${li}-${col}]`
    }
    conteudo += `\n`
}

console.log(conteudo)