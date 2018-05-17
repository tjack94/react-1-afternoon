import React, {Component} from "react"

class FilterString extends Component {

    constructor(){
        super();
        this.state= {
            original: ["Taylor", "Whitney", "Jordan", "Jackson"],
            userInput: "",
            filtered: []

        }
    }
    inputChange(val){
        this.setState( { userInput: val } );
    }
    filterFunction(string){
        var original = this.state.original;
        var filter = []
        for(var i = 0; i < original.length; i++){
            if(original[i].includes(string)){
                filter.push(original[i])
            }
            this.setState( { filtered: filter } );
        }
    }
    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.original, null, 10) }</span>
                <input className="inputLine" onChange= { (e) => this.inputChange(e.target.value) }></input>
                <button className="confirmationButton" onClick= {()=> this.filterFunction(this.state.userInput)}> Filter</button>
                <span className="resultsBox filterStringRB">Filtered: { JSON.stringify(this.state.filtered, null, 10) }</span>
            </div>
        )
    }
}
export default FilterString