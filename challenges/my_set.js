class mySet {
  constructor() {
    this.values = [];
  }

  add(val) {
    if (!this.values.includes(val)) {
      this.values.push(val);
    } else {
      return null;
    }
  }

  remove(val) {
    if (this.values.includes(val)) {
      let idx = this.values.indexOf(val);
      this.values.splice(idx, 1);
      return val;
    } else {
      return null;
    }
  }

  clear() {
    this.values = [];
  }

  has(val) {
    return this.values.includes(val);
  }

  size() {
    return this.values.length;
  }
}
