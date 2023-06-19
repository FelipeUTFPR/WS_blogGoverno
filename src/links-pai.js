const axios = require('axios');
const cheerio = require('cheerio');

const urlpai = 'https://www.gov.br/pt-br/noticias/financas-impostos-e-gestao-publica';

axios.get(urlpai)
    .then(response => {
        const dadoshtml = response.data;
        const $ = cheerio.load(dadoshtml);
        const dados = [];
        $('a[class="summary url"]').each((i,e) => {
            const link = $(e).attr('href');
            dados.push(link);
        })
        console.log(dados);


    })