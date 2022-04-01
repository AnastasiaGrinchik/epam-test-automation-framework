const HomePage = require('./home.page');

class SearchResultsPage extends HomePage {
  get backToHomePageButton() {
    return $('//*[@id="product-search"]//a');
  }

  get listViewButton() {
    return $('//*[@id="list-view"]');
  }

  get gridViewButton() {
    return $('//*[@id="grid-view"]');
  }

  get productCompareButton() {
    return $('//*[@id="compare-total"]');
  }

  get sortButton() {
    return $('//*[@id="input-sort"]');
  }

  get sortByDefaultOption() {
    return $('//*[@id="input-sort"]/option[contains(text(), "Default")]');
  }

  get sortByNameAtoZOption() {
    return $('//*[@id="input-sort"]/option[contains(text(), "Name (A - Z)")]');
  }

  get sortByNameZtoAOption() {
    return $('//*[@id="input-sort"]/option[contains(text(), "Name (Z - A)")]');
  }

  get sortByPriceLowToHighOption() {
    return $('//*[@id="input-sort"]/option[contains(text(), "Price (Low > High)")]');
  }

  get sortByPriceHighToLowOption() {
    return $('//*[@id="input-sort"]/option[contains(text(), "Price (High > Low)")]');
  }

  get sortByRatingHighestOption() {
    return $('//*[@id="input-sort"]/option[contains(text(), "Rating (Highest)")]');
  }

  get sortByRatingLowestOption() {
    return $('//*[@id="input-sort"]/option[contains(text(), "Rating (Lowest)")]');
  }

  get sortByModelAtoZOption() {
    return $('//*[@id="input-sort"]/option[contains(text(), "Model (A - Z)")]');
  }

  get sortByModelZtoAOption() {
    return $('//*[@id="input-sort"]/option[contains(text(), "Model (Z - A)")]');
  }

  get showItemsButton() {
    return $('//*[@id="input-limit"]');
  }

  get showItems15Option() {
    return $('//*[@id="input-limit"]/option[contains(text(), "15")]');
  }

  get showItems25Option() {
    return $('//*[@id="input-limit"]/option[contains(text(), "25")]');
  }

  get showItems50Option() {
    return $('//*[@id="input-limit"]/option[contains(text(), "50")]');
  }

  get showItems75Option() {
    return $('//*[@id="input-limit"]/option[contains(text(), "75")]');
  }

  get showItems100Option() {
    return $('//*[@id="input-limit"]/option[contains(text(), "100")]');
  }

  get itemSearchName() {
    return $('//div[@class="caption"]//a[contains(@href, "product/product&product_id")]');
  }

  get noResultsText() {
    return $('//div[@id="content"]/p');
  }
}

module.exports = SearchResultsPage;
