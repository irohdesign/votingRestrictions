const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.ncsl.org/research/elections-and-campaigns/voter-id.aspx#Laws%20in%20Effect', {waitUntil: 'networkidle2'});

  let table = await page.evaluate(() => 
  Array.from(document
    .querySelectorAll('.table-condensed'))
    .map(partner => partner.innerHTML)
    );

    table = table[0];
    let newTable = table.split('</tr>');

    let obj = {},
        item;
    let objArr = [];
    let stateSelected;
    
    newTable.forEach(function (state) {
        state.split('</td>');
        if (state.includes('id="')) {
            // item = item[0].split('</p>');
            // obj['state'] = item;
            console.log(state);
        }
        objArr.push(state);
    });

    // console.log(objArr);

    // table = table[0];
    // let newTable = table.split('</div>');

    // let states = [];

    // newTable.forEach(function (item) {
    //     if (item.length > 4) {
    //         states.push(item);
    //     }
    // });

    // let stateFormat = [];    

    // states.forEach(function (state) {
    //     state.splice(4, 0);
    //     stateFormat.push(states);
    // });

    // console.log(stateFormat);


  await browser.close();
})();