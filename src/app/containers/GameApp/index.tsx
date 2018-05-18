import * as React from 'react';
import * as style from './style.css';
import { inject, observer } from 'mobx-react';
import { Spinner } from '../../components';
import {
  STORE_GAME,
  STORE_ROUTER,
} from 'app/constants';
import { ProbabilityInput } from 'app/components/ProbabilityInput';
import { Play } from 'app/components/Play';
import { InfoModal } from 'app/components/InfoModal';

@inject(STORE_GAME, STORE_ROUTER)
@observer
export class GameApp extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  getRandomNumber(from, to) {
    return Math.floor(Math.random() * (to - from)) + from;
  }


  getSlotNumbers() {
    const win = this.props[STORE_GAME].win;
    if (win) {
      return [1, 1, 1];
    }
    let result = [this.getRandomNumber(1, 4), this.getRandomNumber(1, 4), this.getRandomNumber(1, 4)];
    if (!win && result[0] === 1 && result[0] === 1 && result[0] === 1) {
      return this.getSlotNumbers();
    }
    return result;
  }

  render() {
    const gameStore = this.props[STORE_GAME];

    const play = () => {
      gameStore.setSlotNumbers([0, 0, 0]);
      setTimeout(() => {
        gameStore.setWin(this.getRandomNumber(0, 100) <= gameStore.probability);
        gameStore.setSlotNumbers(this.getSlotNumbers());
      }, 1000);
      setTimeout(() => {
        gameStore.showInfo();
      }, 4000);
    };

    const playAgain = () => {
      gameStore.clearProbability();
    }

    return (
      <div className={style.mainContainer}>
        <ProbabilityInput value={gameStore.probability} choosen={gameStore.probabilityChoosen} setProbability={gameStore.setProbability} />
        <Spinner slotNumbers={gameStore.slotNumbers} />
        <Play play={play} />
        <InfoModal win={gameStore.win} hideInfo={gameStore.hideInfo.bind(this)} info={gameStore.info} playAgain={playAgain} />
      </div>
    );
  }
}
