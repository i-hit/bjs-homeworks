"use strict";

//  task 1

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, func, id) {
    if (!id) {
      throw new Error("id не указан");
    }

    if (this.alarmCollection.find(alarm => alarm.id === id)) {
      console.log("будильник уже существует");
      return;
    }

    this.alarmCollection.push(
      {
        id: id,
        callback: func,
        time: time,
      }
    )
  }

  removeClock(id) {
    if (this.alarmCollection.find(alarm => alarm.id === id)) {
      let i = this.alarmCollection.findIndex(alarm => alarm.id === id);
      return this.alarmCollection.splice(i, 1) || false;
    }
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString([], {timeStyle: "short"});
  }

  start() {
    function checkClock(alarm) {
      if (this.getCurrentFormattedTime() === alarm.time) {
        alarm.callback();
      }
    }

    if (!this.timerId) {
      this.timerId = setInterval( () => {this.alarmCollection.forEach(checkClock())}, 60000);
    }
  }

  stop() {
    if (this.timerId) {
      this.timerId = null;
    }
  }

  printAlarms() {
    this.alarmCollection.forEach( e => console.log(e.id, e.time));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }

}

// task 2

