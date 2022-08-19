class Counter {
  constructor(rootSelector, initialValue) {
    this.currentValue = initialValue;
    this.refs = this.getRefs(rootSelector);
    this.updateValue();
    this.bindEvents();
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
    this.refs.incrementBtn.addEventListener(
      "click",
      this.incrementBtnClickHandler.bind(this)
    );
    this.refs.decrementBtn.addEventListener(
      "click",
      this.decrementBtnClickHandler.bind(this)
    );
  }

  incrementBtnClickHandler() {
    this.increaseValue();
    this.updateValue();
  }

  decrementBtnClickHandler() {
    this.decreaseValue();
    this.updateValue();
  }

  increaseValue() {
    this.currentValue += 1;
  }

  decreaseValue() {
    this.currentValue -= 1;
  }

  updateValue() {
    this.refs.valueScreen.textContent = this.currentValue;
  }
}

const counter1 = new Counter("#counter", 0);
