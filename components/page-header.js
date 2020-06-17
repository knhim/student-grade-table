class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }

  updateAverage(newAverage) {
    var badgeEle = this.headerElement.querySelector('span');
    badgeEle.textContent = newAverage;
  }
}
