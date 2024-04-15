class RocketHander {
  static index = 1;
  static getRocketAssets() {
    if (this.index > 10) this.index = 1;
    let src = `src/assets/rocket${this.index}.png`;
    this.index++;
    return src;
  }
}
