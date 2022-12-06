import React, { useState } from "react";
import styled from "styled-components";

const Charactercontainer = styled.div`
background-color: grey;
border: 2px solid;
border-color: limegreen;
min-width: 60vw;
max-height: 80%;
display:flex;
justify-content: space-between;
padding: 5px;
margin: 15px;
` 

const ExtraInfo = styled.div`

`

const Characters = (props) => {

    const [extra, setExtra] = useState(null)

    return (
        <div>
            <Charactercontainer onClick={()=> {extra === null? setExtra(props.data): setExtra(null)}}>
                <h2 className="name">{props.data.name}</h2>
                <h2 className="birthday">{props.data.birth_year}</h2>
            </Charactercontainer> 
            {extra && <ExtraInfo>
                <h3> Eye Color: {extra?.eye_color}</h3>
                <h3>Films: {extra?.films}</h3>
                <h3>Gender: {extra?.gender}</h3>
                <h3>Hair: {extra?.hair_color}</h3>
                <h3>Height: {extra?.height}</h3>
                <h3>Mass: {extra?.mass}</h3>
            </ExtraInfo>}
        </div>
    )
    
}

// birth_year:"19BBY"
// created:"2014-12-09T13:50:51.644000Z"
// edited:"2014-12-20T21:17:56.891000Z"
// eye_color:"blue"
// films:(4) ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi', 'Revenge of the Sith']
// gender:"male"
// hair_color:"blond"
// height:"172"
// homeworld:"http://swapi.dev/api/planets/1/"
// mass:"77"
// name:"Luke Skywalker"
// skin_color:"fair"
// species:[]
// starships:(2) ['http://swapi.dev/api/starships/12/', 'http://swapi.dev/api/starships/22/']
// url:"http://swapi.dev/api/people/1/"
// vehicles:(2) ['http://swapi.dev/api/vehicles/14/', 'http://swapi.dev/api/vehicles/30/']

export default Characters