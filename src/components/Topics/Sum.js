import React, {Component} from "react"

class Sum extends Component {
    constructor(){
        super();
        this.state={
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    number1Change(val){
        this.setState( { number1: Number(val) } );
    }
    number2Change(val){
        this.setState( { number2: Number(val) } );
    }
    sumFunction(num1,num2){
        this.setState( { sum: num1 + num2 } )
    }
    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine"onChange= {(e)=> this.number1Change(e.target.value)}></input>
                <input className="inputLine"onChange= {(e)=> this.number2Change(e.target.value)}></input>
                <button className="confirmationButton"onClick= {()=> this.sumFunction(this.state.number1,this.state.number2)}>ADD</button>
                <span className="resultsBox">Sum: { JSON.stringify(this.state.sum, null, 10) }</span>
            </div>
        )
    }
}
export default Sum