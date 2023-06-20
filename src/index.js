const axios = require('axios');
const cheerio = require('cheerio');

const urlpai = 'https://www.gov.br/pt-br/noticias/financas-impostos-e-gestao-publica';

function extraidados(link){
    axios.get(link)
    .then(response => {
        const dadoshtml = response.data;
        const $ = cheerio.load(dadoshtml);
        const titulo = $('h1[class="documentFirstHeading"]').text();
        const linkimg = $('img').attr('src');
        datapublicacao = $('span[class="value"]').text().slice(0,16);
        texto = $('div[property="rnews:articleBody"]').text().trim();

        const dados = {titulo, linkimg, datapublicacao, texto}
        console.log(dados);
    });
};


const links = axios.get(urlpai)
.then(response => {
    const dadoshtml = response.data;
    const $ = cheerio.load(dadoshtml);
    const dados = [];
    $('a[class="summary url"]').each((i,e) => {
        const link = $(e).attr('href');
        dados.push(link);
    });
    //console.log(dados);
    return dados;

});

//unindo as duas funções e sincronizando elas.
async function main(){
    const lnks = await links;
    lnks.map((i,e) => {
        extraidados(i);

    })
};

main();