class Counter {
  constructor(rootSelector, initialValue) {
    this.currentValue = initialValue;
    this.refs = this.getRefs(rootSelector);
    this.bindEvents();
    this.updateValue();
  }

  getRefs(rootSelector) {
    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.incrementBtn = refs.container.querySelector(
      '[data-action="increment"]'
    );
    refs.decrementBtn = refs.container.querySelector(
      '[data-action="decrement"]'
    );
    refs.valueScreen = refs.container.querySelector("#value");
    return refs;
  }

  bindEvents() {
    this.refs.incrementBtn.addEventListener("click", () =>
      this.increaseValue()
    );
    this.refs.decrementBtn.addEventListener("click", () =>
      this.decreaseValue()
    );
  }

  increaseValue() {
    this.currentValue += 1;
    this.updateValue();
  }

  decreaseValue() {
    this.currentValue -= 1;
    this.updateValue();
  }

  updateValue() {
    this.refs.valueScreen.textContent = this.currentValue;
  }
}

const counter1 = new Counter("#counter", 0);
