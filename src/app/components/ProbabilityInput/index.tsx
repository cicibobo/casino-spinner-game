import * as React from 'react';

interface ProbabilityInputProps {
    value: number,
    setProbability: Function
}
interface State{
    value: number
}


export class ProbabilityInput extends React.Component<ProbabilityInputProps, State>{
    constructor(props){
        super(props);
        this.state = {
           value:  this.props.value
        }
    }

    render(){
        return(
        <div className="">
            <div>
                <span>Probability: </span><input type="number" onChange={event=>{this.props.setProbability(event.target.value)}} value={this.state.value} />
            </div>
        </div>
        );
    }
}