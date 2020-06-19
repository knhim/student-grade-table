class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }

  updateAverage(newAverage) {
    const badgeEle = this.headerElement.querySelector('span');
    badgeEle.textContent = newAverage;
  }
}
