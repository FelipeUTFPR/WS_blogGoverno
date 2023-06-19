/**
 * Objetivos
 * titulo: Divulgada lista de 28 montadoras que já aderiram ao programa de veículos mais baratos
 * linkimg: https://www.gov.br/pt-br/noticias/financas-impostos-e-gestao-publica/2023/06/divulgada-lista-de-28-montadoras-que-ja-aderiram-ao-programa-de-veiculos-mais-baratos/carros-patio-montadora-sao_bernargo_sp1-marcelo_camargo32.jpg/@@images/8ac6c560-cfce-49be-844a-e8de08393308.jpeg
 * datapublicacao: 14/06/2023 21h11
 * texto: O Governo Federal anunciou que nove montadoras de carros de passeio já aderiram ao programa de carro mais barato.
 */

const axios = require('axios');
const cheerio = require('cheerio');

const urlfilho = 'https://www.gov.br/pt-br/noticias/financas-impostos-e-gestao-publica/2023/06/plataforma-brasil-participativo-bate-recorde-de-engajamento-com-200-mil-usuarios';

axios.get(urlfilho)
    .then(response => {
        const dadoshtml = response.data;
        const $ = cheerio.load(dadoshtml);
        const titulo = $('h1[class="documentFirstHeading"]').text();
        const linkimg = $('img').attr('src');
        datapublicacao = $('span[class="value"]').text().slice(0,16);
        texto = $('div[property="rnews:articleBody"]').text().trim();

        const dados = {titulo, linkimg, datapublicacao, texto}
        console.log(dados);
    })