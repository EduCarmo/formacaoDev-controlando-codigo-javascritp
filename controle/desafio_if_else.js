const SEGUNDA_FEIRA = 'segunda'
const TERÇA_FEIRA = 'terça'
const QUARTA_FEIRA = 'quarta'
const QUINTA_FEIRA = 'quinta'
const SEXTA_FEIRA = 'sexta'
const SABADO = 'sábado'
const DOMINGO = 'domingo'

const diaDaSemana = SABADO
let cargaHoraria

const eDiaUtil = diaDaSemana === SEGUNDA_FEIRA
    || diaDaSemana === TERÇA_FEIRA
    || diaDaSemana === QUARTA_FEIRA
    || diaDaSemana === QUINTA_FEIRA
    || diaDaSemana === SEXTA_FEIRA

if (eDiaUtil) {
    cargaHoraria = 8
} else if (diaDaSemana === SABADO) {
    cargaHoraria = 4
} else {
    cargaHoraria = 0
}

console.log(`Carga horária e: ${cargaHoraria}h`)

