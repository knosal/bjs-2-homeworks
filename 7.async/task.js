"use strict"

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }
// добавляет новый звонок в коллекцию существующих.
   addClock(time, callback, id) {
      if (isNaN(id)) {
          throw new Error('error text');
      } else if (this.alarmCollection.find(item => item.id === id) !== undefined) {
          return console.error(`звонок ${id} уже существует`);
      } else if (time.length !== 5) {
          return console.warn("Неверный формат ввода");
      } else { 
          return this.alarmCollection.push({id, time, callback});
      }
    }
// удаляет определённый звонок.
    removeClock(id) {
        let startLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
        return (startLength > this.alarmCollection.length);
    }
//возвращает текущее время в строковом формате
    getCurrentFormattedTime() { 
        let recordTime = (number) => {
            if (number < 10) {
                return '0' + number;
            }
            return number;
        }
        let nowTime = new Date();
        return recordTime(nowTime.getHours()) + ':' + recordTime(nowTime.getMinutes());
    }
//запуск звонков
    start() {
        let checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                return alarm.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(alarm => checkClock(alarm));
            }, 60);
        }
        return;
    }
//останавливает выполнение всех звонков
    stop() { 
        if(this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    } 
//печатает все звонки
    printAlarms() {
        this.alarmCollection.forEach(item => console.log(item.id + ':' + item.time));
    }
//удаляет все звонки
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }  

}

function testCase() {
    let testAlarm = new AlarmClock;
    testAlarm.start();
    testAlarm.addClock('14:22', () => console.log ('Пора домой!'), 1);
    testAlarm.addClock('14:23', () => console.log ('Еще пару минут'), 2);
    testAlarm.addClock('14:24', () => console.log ('Еще немного'), 3);
    testAlarm.addClock('14:25', () => console.log ('Теперь пора!'), 4);
    testAlarm.addClock('14:25', () => console.log ('Теперь пора!'), 4);
    testAlarm.addClock('4:24', () => console.log ('Еще немного'), 5);
    testAlarm.printAlarms();
    testAlarm.removeClock(4);
    testAlarm.addClock('14:26', () => {
        testAlarm.stop();
        console.log ('Рановатооо');
        }, 5);
    testAlarm.printAlarms();  
}
testCase();