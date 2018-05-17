import * as React from 'react';

interface PlayProps {
    play
}


export class Play extends React.Component<PlayProps>{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="">
            <div>
                <button onClick={this.props.play} >Play</button>
            </div>
        </div>
        );
    }
}