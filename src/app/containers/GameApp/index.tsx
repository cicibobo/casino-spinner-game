import * as React from 'react';
import * as style from './style.css';
import { inject, observer } from 'mobx-react';

import {
  STORE_GAME,
  STORE_ROUTER,
} from 'app/constants';



@inject(STORE_GAME, STORE_ROUTER)
@observer
export class TodoApp extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className={style.normal}>
        test game
    
      </div>
    );
  }
}
