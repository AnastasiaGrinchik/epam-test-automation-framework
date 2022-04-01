class Prices {
  get currentPrice() {
    return $('//ul[@class="list-inline price"]/li/h2');
  }

  get priceBeforeDiscount() {
    return $('//ul[@class="list-inline price"]/li/span');
  }

  get exTax() {
    return $('//li[contains(text(),"Ex Tax")]');
  }

  get priceTenOrMore() {
    return $('//li[contains(text(),"10 or more")]');
  }

  get priceTwentyOrMore() {
    return $('//li[contains(text(),"20 or more")]');
  }

  get priceThirtyOrMore() {
    return $('//li[contains(text(),"30 or more")]');
  }
}

module.exports = Prices;
