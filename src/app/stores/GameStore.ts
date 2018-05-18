import { observable, action } from 'mobx';


export class GameStore {
  constructor() {
    this.slotNumbers = [1, 2, 3];
  }

  @observable public probability: number;

  @observable public win: boolean;

  @observable public slotNumbers: Array<number>;

  @observable public info: boolean = false;

  @observable public probabilityChoosen: boolean = false;



  @action
  setWin = (result): void => {
    this.win = result;
  }

  @action
  setProbability = (probability): void => {
    this.probability = probability;
    this.probabilityChoosen = true;
  }

  @action
  setSlotNumbers = (slotNumbers): void => {
    this.slotNumbers = slotNumbers;
  }

  @action
  clearProbability = (): void =>{
    this.probabilityChoosen = false;
  }

  @action
  showInfo = (): void =>{
    this.info = true;
  }

  @action
  hideInfo = (): void =>{
    this.info = false;
  }



}

export default GameStore;
