import jsonAnagramas from './dados.json' with {type: "json"}

var palavras = jsonAnagramas.map(function (item) {
    return item.str;
})

let palavrasOrdenadas = []


palavras.forEach(palavra => palavrasOrdenadas.push(palavra.split('').sort().join('')))

let indexDosParesIguais = []

for (var i = 0; i < palavrasOrdenadas.length; i++) {
    for (var j = i + 1; j < palavrasOrdenadas.length; j++) {
        if (palavrasOrdenadas[i] === palavrasOrdenadas[j]) {
            indexDosParesIguais.push([i, j])
        }
    }
}

let paresAnagramas = []

indexDosParesIguais.forEach(par => paresAnagramas.push(
    { "anagramas": [palavras[par[0]], palavras[par[1]]] }
))

//conversao de ARRAY para JSON:

let json = JSON.stringify(paresAnagramas)
console.log("SAÍDA: ", json)