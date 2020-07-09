export default class Time {
  
  convertValue(valueInSeconds){
    const hours = this.formatUnitOfTime(Math.floor(valueInSeconds / 3600))
    const minutes = this.formatUnitOfTime(Math.floor((valueInSeconds % 3600) / 60))
    const seconds = this.formatUnitOfTime(Math.floor(valueInSeconds % 60))
    //const miliseconds = this.formatUnitOfTime(Math.floor(valueInSeconds % 1000))
    return `${hours}:${minutes}:${seconds}`
  }

  formatUnitOfTime = (unitOfTime) => {
    return unitOfTime < 10 ? `0${unitOfTime}`.substring(0,2) : unitOfTime.toString().substring(0,2);
  }

}