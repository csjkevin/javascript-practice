class EventEmitter {
  constructor() {
    this.subs = {};
  }

  on(eventName, callback) {
    if (this.subs.hasOwnProperty(eventName)) {
      this.subs[type].push(callback);
    } else {
      this.subs[type] = [callback];
    }
  }

  emit(eventName, ...args) {
    if (this.subs.hasOwnProperty(eventName)) {
      if (this.subs.length > 0) {
        this.subs[eventName].forEach((el) => {
          el(...args);
        });
      }
    }
  }

  off(eventName, callback) {
    let targetIndex = this.subs[eventName].indexOf(callback);
    if (targetIndex !== -1) {
      this.subs[eventName].splice(targetIndex, 1);
    }
    if (this.subs[eventName].length === 0) {
      delete this.subs[eventName];
    }
  }

  offAll(eventName) {
    if (this.subs.hasOwnProperty(eventName)) {
      delete this.subs[eventName];
    }
  }
}
