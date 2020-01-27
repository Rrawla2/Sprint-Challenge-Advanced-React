import React, { Component } from "react";

class WorldCupRank extends Component {
    constructor() {
        super();
        this.state = {
            women: [],
            woman: []
        }
    }

    componentDidMount () {
        fetch("http://localhost:5000/api/players")
        .then(response => response.json())
        .then(women => {console.log("API response", women)
            this.setState({ ...this.state, women: women })

        })
        .catch(err => console.log("Error on Fetch: ", err))
    }

    render() {
        return(
            <div>
            {this.state.women.map(woman => 
            <div>
                <p>Rank: {woman.id}</p>
                <p>Name: {woman.name}</p>
                <p>Country: {woman.country}</p>
                <p>Searches: {woman.searches}</p>
            </div>
            
            )}
        </div>
        );//return

    }//Render
}//WorldCupRank

export default WorldCupRank;
