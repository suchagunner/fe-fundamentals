class Store {
  #state = {
    count: 0
  }

  #handlers = new Set();

  get count() {
    return this.#state.count;
  }

  set count(val) {
    this.#state.count = val;
    this.#onSetState();
  }

  setHandler(handler) {
    this.#handlers.add(handler)
  }

  removeHandler(handler) {
    this.#handlers.add(handler)
  }

  #onSetState() {
    Array.from(this.#handlers).map(o => o?.apply(o))
  }
}

