import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './style.css';

interface SpinnerState {
    firstStyle: number;
    secondStyle: number;
    thirdStyle: number;
}

interface SpinnerProps {
    slotNumbers: Array<number>;
}
export class Spinner extends React.Component<SpinnerProps, SpinnerState> {

    constructor(props) {
        super(props);
        this.state = { 
            firstStyle: this.props.slotNumbers[0], 
            secondStyle: this.props.slotNumbers[1], 
            thirdStyle: this.props.slotNumbers[2] 
        };
    }


    getStyle(type) {
        switch (type) {
            case 0: return style.rotation;
            case 1: return style.hearts;
            case 2: return style.clubs;
            case 3: return style.spades;
            case 4: return style.diamonds;
        }
    }


    component(props){
        debugger;
        // this.setState({ 
        //     firstStyle: this.props.slotNumbers[0], 
        //     secondStyle: this.props.slotNumbers[1], 
        //     thirdStyle: this.props.slotNumbers[2] 
        // })
    }

    render() {
        return (
            <div className={style.spinnerContainer}>
                <div className={classNames(style.item, this.getStyle(this.props.slotNumbers[0]))}></div>
                <div className={classNames(style.item, this.getStyle(this.props.slotNumbers[1]))}></div>
                <div className={classNames(style.item, this.getStyle(this.props.slotNumbers[2]))}></div>
            </div>
        )
    }
}