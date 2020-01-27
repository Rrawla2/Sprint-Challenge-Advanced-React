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
            <div className="container">
                <header className="card header">
                    <div className="card">
                    {this.state.women.map(woman => 
                        <div>
                            <p>Rank: {woman.id}</p>
                            <h3>Name: {woman.name}</h3>
                            <p>Country: {woman.country}</p>
                            <p>Searches: {woman.searches}</p>
                        </div>
            
                     )}
                    </div>
                </header>
            </div>
        );//return

    }//Render
}//WorldCupRank

export default WorldCupRank;
