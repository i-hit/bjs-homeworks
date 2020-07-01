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

    if (this.alarmCollection.find((alarm) => alarm.id === id)) {
      console.log("будильник уже существует");
      return;
    }

    this.alarmCollection.push({
      id: id,
      callback: func,
      time: time,
    });
  }

  removeClock(id) {
    if (this.alarmCollection.find((alarm) => alarm.id === id)) {
      let i = this.alarmCollection.findIndex((alarm) => alarm.id === id);
      return this.alarmCollection.splice(i, 1) || false;
    }
  }

  getCurrentFormattedTime() {
    let time = new Date().toLocaleTimeString([], { timeStyle: "short" });
    return time;
  }

  start() {
    function checkClock(clock, time) {
      if (time === clock.time) {
        clock.callback();
      }
    }

    if (!this.timerId) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach((e) =>
          checkClock(e, this.getCurrentFormattedTime())
        );
      }, 1000);
    }
  }

  stop() {
    if (this.timerId) {
      this.timerId = null;
    }
  }

  printAlarms() {
    console.log(
      `Печать всех будильников в количестве: ${this.alarmCollection.length}`
    );
    this.alarmCollection.forEach((e) =>
      console.log(`Будильник №${e.id} заведен на ${e.time}`)
    );
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

  const date = new Date().toLocaleTimeString([], { timeStyle: "short" });

  function datePlus(minutes) {
    let i = date.split(":");
    i[1] = Number(i[1]) + minutes;

    if (i[1] > 59) {
      i[0] = Number(i[0]) + 1;
      i[1] = Number(i[1]) - 60;
    }

    if (i[0] === 24) {
      i[0] = "00";
    }

    if (i[1] < 10) {
      i[1] = "0" + i[1];
    }

    return i.join(":");
  }

  clock.addClock(date, () => console.log("test"), 1);

  clock.addClock(
    datePlus(1),
    () => {
      console.log("test again");
      clock.removeClock(2);
    },
    2
  );

  clock.addClock(
    datePlus(2),
    () => {
      console.log("some test text...");
      clock.clearAlarms();
      clock.printAlarms();
    },
    3
  );

  clock.printAlarms();

  clock.start();
}

testCase();
