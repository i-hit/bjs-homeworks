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
      if (new Date().toLocaleTimeString([], {timeStyle: "short"}) === alarm.time) {
        alarm.callback();
      }
    }

    if (!this.timerId) {
      this.timerId = setInterval( () => {this.alarmCollection.forEach( e => checkClock(e))}, 1000);
    }
  }

  stop() {
    if (this.timerId) {
      this.timerId = null;
    }
  }

  printAlarms() {
    console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
    this.alarmCollection.forEach( e => console.log(`Будильник №${e.id} заведен на ${e.time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }

}

// task 2

let clock;

function testCase() {
  clock = new AlarmClock();

const date = new Date().toLocaleTimeString([], {timeStyle: "short"});

function date1() {
  let i = new Date().toLocaleTimeString([], {timeStyle: "short"}).split(":");
  i[1] = Number(i[1]) + 1;
  return i.join(":");
}

function date2() {
  let i = new Date().toLocaleTimeString([], {timeStyle: "short"}).split(":");
  i[1] = Number(i[1]) + 2;
  return i.join(":");
}


clock.addClock(date, () => console.log("test"), 1);

clock.addClock(date1(), () => {
  console.log("test again");
  clock.removeClock(2);
 }, 2);

clock.addClock(date2(), () => {
  console.log("some test text...");
  clock.clearAlarms();
  clock.printAlarms();
 }, 3);

 clock.printAlarms();

 clock.start();

}

testCase();