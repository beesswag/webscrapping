const puppeteer = require('puppeteer')
const fs = require('fs')

async function scrape (url) {
const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto(url)
 
    var data = await page.evaluate(() => {
        var producerList = document.querySelectorAll('.ftehWE');
        var nameList = document.querySelectorAll('.eBIyJW');
        var typeList = document.querySelectorAll('.eWkod');
        var methodList = document.querySelectorAll('.bLUxuH');
        var potList = document.querySelectorAll('.gUReQf');
        var gramsList = document.querySelectorAll('.lgNAhS > .ijMTWw');
        var priceList = document.querySelectorAll('.lgNAhS > .ZtHqz');
        var arr = [];
        
        for (var i = 0; i < producerList.length; i++) {
          arr[i] = {
            producer: producerList[i].innerText,
            name: nameList[i].innerText,
            type: typeList[i].innerText,
            method: methodList[i].innerText,
            potency: potList[i].innerText,
            grams: gramsList[i].innerText,
            price: priceList[i].innerText,
          };
        }
        return arr;
      })
      fs.writeFile("./weed.json", JSON.stringify(data, null, 3),  (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("Okay");
    });
   
browser.close()

}
scrape("https://dutchie.com/dispensaries/spiritleaf-stittsville/menu")