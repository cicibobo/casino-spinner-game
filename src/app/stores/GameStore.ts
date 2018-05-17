import { observable, action } from 'mobx';


export class GameStore  {
  constructor() {
    this.slotNumbers = [1,2,3];
  }

  @observable public probability: number;

  @observable public win: boolean;

  @observable public slotNumbers: Array<number>;


  @action 
  setWin = (result):void => {
    this.win = result;
  }

  @action 
  setProbability = (probability):void => {
    this.probability = probability;
  }

  @action 
  setSlotNumbers = (slotNumbers):void => {
    this.slotNumbers = slotNumbers;
  }
  

}

export default GameStore;
