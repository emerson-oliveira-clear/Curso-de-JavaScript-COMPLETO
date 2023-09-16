
//DATES
const data = new Date();

console.log(data);
console.log('dia', data.getDate());
console.log('mes', data.getMonth() + 1); // Mês começa no 0
console.log('ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('minutos', data.getMinutes());
console.log('segundos', data.getSeconds());
console.log('milisegundos', data.getMilliseconds());
console.log('dia da semana', data.getDay()); // 0 inicia no domingo

console.log('-----------------------------------------------------');

const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

const semana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado'];

function zeroEsquerda(num){
    return num >= 10? num :`0${num}`
}


function formatDate(data) {

    const dia = zeroEsquerda(data.getDate())
    let mes = zeroEsquerda(data.getMonth() + 1); // Mês começa no 0
    const ano = zeroEsquerda(data.getFullYear());
    const horas = zeroEsquerda(data.getHours());
    const minutos = zeroEsquerda(data.getMinutes());
    const segundos = zeroEsquerda(data.getSeconds());
    //const milisegundos = data.getMilliseconds();
    let diaDaSemana = zeroEsquerda(data.getDay());

    if (mes == 0) {
        mes = meses[0];
    } else if (mes == 1) {
        mes = meses[1];
    } else if (mes == 2) {
        mes = meses[2];
    } else if (mes == 3) {
        mes = meses[3];
    } else if (mes == 4) {
        mes = meses[4];
    } else if (mes == 5) {
        mes = meses[5];
    } else if (mes == 6) {
        mes = meses[6];
    } else if (mes == 7) {
        mes = meses[7];
    } else if (mes == 8) {
        mes = meses[8];
    } else if (mes == 9) {
        mes = meses[9];
    } else if (mes == 10) {
        mes = meses[10];
    } else if (mes == 11) {
        mes = meses[11];
    }

    if (diaDaSemana == 0) {
        diaDaSemana = semana[0];
    } else if (diaDaSemana == 1) {
        diaDaSemana = semana[1];
    } else if (diaDaSemana == 2) {
        diaDaSemana = semana[2];
    } else if (diaDaSemana == 3) {
        diaDaSemana = semana[3];
    } else if (diaDaSemana == 4) {
        diaDaSemana = semana[4];
    } else if (diaDaSemana == 5) {
        diaDaSemana = semana[5];
    } else if (diaDaSemana == 6) {
        diaDaSemana = semana[6];
    }

    console.log(`${diaDaSemana}, ${dia} de  ${mes} de ${ano} ${horas}:${minutos}:${segundos}`)
}

formatDate(data);