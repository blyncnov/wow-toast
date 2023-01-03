"use-strict";

export default class Wow {
  constructor(options) {
    Object.entries(options).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  get position() {
    console.log(this.position);
  }

  set position(value) {
    this.position = value;
  }
}

Wow.prototype.getPosition = function (position) {
  console.log(position);
};
