import React, {Component} from "react"

class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state= {
            evenArray: [],
            oddArray: [],
            userInput: "",
        }
    }
        handleChange(val){
            this.setState({userInput: val});
        }
        solve(userInput){
            var evens = []
            var odds = []
            var arr = userInput.split(",")

            for(var i = 0; i < arr.length; i++){
                if(arr[i] % 2 === 0 ){
                    evens.push(Number(arr[i]))
                }else{
                    odds.push(Number(arr[i]))
                }
            }
            this.setState( {evenArray: evens, oddArray: odds} );
        }
    
    render(){
        return (
            <div className= "puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className = "inputLine" onChange= {(e)=> this.handleChange(e.target.value)}></input>
            <button className= "confirmationButton"onClick = {()=> {this.solve(this.state.userInput)}}> Split </button>
            <span className= "resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
            <span className= "resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>

            </div>
        )
    }
}
export default EvenAndOdd