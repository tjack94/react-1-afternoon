import React, {Component} from "react"

class Palindrome extends Component {
    constructor(){
        super();
        this.state = {
            userInput: "",
            palindrome:""
        }
    }
    inputChange(val){
        this.setState( { userInput: val } );
    }
    reverseString(string){
        var pdrome= false;
        if(string == string.split("").reverse().join("")){
            pdrome = true
        }
this.setState( { palindrome: pdrome } )
    }
    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange= {(e)=> this.inputChange(e.target.value)}></input>
                <button className="confirmationButton"onClick= {()=> this.reverseString(this.state.userInput) }>Check</button>
                <span className="resultsBox"> Palindrome: { JSON.stringify(this.state.palindrome, null, 10) }</span>
            </div>
        )
    }
}
export default Palindrome