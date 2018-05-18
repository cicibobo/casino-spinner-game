import * as React from 'react';
import * as style from './style.css';
interface ProbabilityInputProps {
    value: number,
    setProbability: Function
}
interface State {
    value: number,
    choosen: boolean
}


export class ProbabilityInput extends React.Component<ProbabilityInputProps, State>{
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || 50,
            choosen: false
        }
    }


    handleChange(event) {
        this.setState({ value: event.target.value});
    }

    render() {

        const setValue = () => {  
            this.props.setProbability(this.state.value) 
        }

        return (
            <div className={style.chanceContainer}>
                {
                    this.state.choosen ? (
                        <div className={style.label} >Set chance to win </div>
                    ) : (
                            <div>
                                <div className={style.label} >Set chance to win </div>
                                <div className={style.inputContainer}>
                                    <div className={style.inputText} >
                                        <input type="number" value={this.state.value}
                                            onChange={this.handleChange.bind(this)} />
                                    </div>
                                    <div className="style.buttonContainer">
                                        <button className={style.setButton} onClick={setValue} > Set </button>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>
        );
    }
}