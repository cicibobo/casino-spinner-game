import * as React from 'react';
import * as style from './style.css';
import * as classNames from 'classNames';
interface PlayProps {
    play
}

interface PlayState {
    playing
}

export class Play extends React.Component<PlayProps, PlayState>{
    constructor(props) {
        super(props);

        this.state = {
            playing: false
        }
    }

    render() {
        let buttonClass = classNames(style.bubblyButton, this.state.playing ? style.animate : '');
        const play = (event) => {
            this.props.play(event);
            this.setState({ playing: true });
            setTimeout(() => {
                this.setState({ playing: false });
            }, 3000)
        }
        return (
            <div className={style.playButtonContainer}>
                <button className={buttonClass} onClick={play} >Play</button>
            </div>
        );
    }
}