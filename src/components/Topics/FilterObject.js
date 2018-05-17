import React, {Component} from "react"

class FilterObject extends Component {

    constructor(){
        super();
        this.state = {
            unFilteredArray: [
                {
                    name: "Taylor",
                    age: 24,
                    devMountain: true
                },
                {
                    name: "Whitney",
                    age: 24,
                    hairColor: "brown"
                },
                {
                    name: "Jordan",
                    height: 36
                }
            ],
            userInput: "",
            filteredArray: []
        }
        
        
    }
    inputChange(val){
        this.setState( { userInput: val } );
    }
    filterFunction(prop){
        var unFilteredArray = this.state.unFilteredArray;
        var filtered=[];
        for(var i = 0; i < unFilteredArray.length; i++){
            if(unFilteredArray[i].hasOwnProperty(prop)){
                filtered.push(unFilteredArray[i])
            }
        }
        this.setState( { filteredArray: filtered });
    }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.inputChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.filterFunction(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}
export default FilterObject