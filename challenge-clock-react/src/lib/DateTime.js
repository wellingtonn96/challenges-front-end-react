export default class DateTime {

    constructor(date) {
      
      this.date = date ? date : new Date();
      
       this.monthNames = [
        'January', 'February', 'March',
        'April', 'May', 'June',
        'July', 'August', 'September',
        'October', 'November', 'December'
      ];
  
      this.dayNames = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'
      ]
    }
  
    hours() {
      return this.formatUnitOfTime(this.date.getHours())
    }
  
    minutes() {
      return this.formatUnitOfTime(this.date.getMinutes())
    }
  
    secondes() {
      return this.formatUnitOfTime(this.date.getSeconds())
    }
  
    formatUnitOfTime = unitOfTime => {
      return unitOfTime < 10 ? `0${unitOfTime}` : `${unitOfTime}`;
    }
  
    day() {
      return this.dayNames[this.date.getDay()].substring(0, 3)
    }
  
    dateWeek() {
      return this.date.getDate()
    }
  
    month() {
      return this.monthNames[this.date.getMonth()]
    }
  
    year() {
      return this.date.getFullYear()
    }
  
    static toTimeString(date) {
      const dateTime = new DateTime(date)
      return `${dateTime.hours()}:${dateTime.minutes()}:${dateTime.secondes()}`
    }
  
    static toDateString(date) {
      const dateTime = new DateTime(date);
  
      return `${dateTime.day()} ${dateTime.dateWeek()} ${dateTime.month()} ${dateTime.year()}`
    }
}