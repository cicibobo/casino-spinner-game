import * as React from 'react';
import classNames from 'classnames/bind';
import * as style from './style.css';

export class Spinner extends React.Component {

    constructor(props) {
        super(props);
        this.state = { firstStyle: 0 , secondStyle: 0, thirdStyle: 0 };
    }

    componentDidMount() {
        setTimeout(function () { this.setState({ firstStyle: 2, secondStyle: 1, thirdStyle: 4 }); }.bind(this), 3000);
    }

    getStyle(type){
        switch(type){
            case 0: return style.rotation;
            case 1: return style.hearts;
            case 2: return style.clubs;
            case 3: return style.spades;
            case 4: return style.diamonds;
        }
    }

    render() {
        return (
            <div className={style.spinnerContainer}>
                <div className={classNames(style.item,this.getStyle(this.state.firstStyle))}></div>
                <div className={classNames(style.item,this.getStyle(this.state.secondStyle))}></div>
                <div className={classNames(style.item,this.getStyle(this.state.thirdStyle))}></div>
            </div>
        )
    }
}