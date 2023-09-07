/*

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

*/

const currencyValues = {
  "ONE HUNDRED": 10000,
  "TWENTY": 2000,
  "TEN": 1000,
  "FIVE": 500,
  "ONE": 100,
  "QUARTER": 25,
  "DIME": 10,
  "NICKEL": 5,
  "PENNY": 1 
}

function checkCashRegister(price, payment, cid) {
  const cashInDrawerInCents = convertCashInDrawerToCents(cid);
  const changeDueInCents = (payment - price)*100;
  let change = getChangeDue(changeDueInCents, cashInDrawerInCents);
  const status = getStatus(change, cashInDrawerInCents)
  if (status === "OPEN") { 
    change = change.filter(item => item[1] > 0).reverse()
  }
  return {status, change};
}

function getStatus(change, cashInDrawerInCents) {
  let status = "";
  if (change.length > 0) {
    let changeInCents = convertCashInDrawerToCents(change);
    let exactChangeInDrawer = []
    for (let item of cashInDrawerInCents) {
      let index = cashInDrawerInCents.indexOf(item);
      const amount = item[1];
      if (amount === changeInCents[index][1]) {
        exactChangeInDrawer.push(true);
      } else {
        exactChangeInDrawer.push(false)
      }
    }
    status = exactChangeInDrawer.every(item => item) ? "CLOSED" : "OPEN"
  } else {
    return "INSUFFICIENT_FUNDS"
  }
  return status;
}

function getCashInDrawer(cid) {
  return cid.reduce((prev, curr) => prev + curr[1], 0).toFixed(2) * 100;
}
function convertCashInDrawerToCents(cid) {
  return cid.map(item => [item[0], Math.round(item[1] * 100)]).reverse();
}
function getChangeDue(changeDueInCents, cashInDrawerInCents) {
  if (changeDueInCents > cashInDrawerInCents) { return [] }
  let change = cashInDrawerInCents
    .map(item => {
      let change = 0;
      let [currency, amount] = item
      const value = currencyValues[currency]
      if (value >= changeDueInCents) { 
        return [ currency, 0 ] 
      }
      while (changeDueInCents >= value && amount > 0) {
        change += value
        changeDueInCents -= value
        amount -= value
      }
      return [currency, change / 100]
    }).reverse()
  return changeDueInCents > 0 ? [] : change;
}