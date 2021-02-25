const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://dutchie.com/dispensaries/spiritleaf-stittsville/menu';

axios.get(url).then((res) => {
    const $ = cheerio.load(res.data);

    console.log($(".product-information__Brand-sc-65h5ke-6.ftehWE").text());
    
});

