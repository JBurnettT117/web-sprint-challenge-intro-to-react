// Write your Character component here
import React, { useState } from "react";
import styled from "styled-components";
import Characters from "./Characters";

const Test = styled.div`
opacity: 90%;
display: flex;
align-content: center;
width: 60%;
`

const BackgroundStyle = styled.div`
background-color: dimgrey;
opacity: 90%;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const ExtendedInfo = styled.div`
background-color: grey;
border: 2px solid;
border-color: limegreen;
min-width: 20vw;
max-height: 80%;
`



const Character = (props) => {    
    return (
        <Test>
            <BackgroundStyle>
                {  
                    props.props.data.map((data) => {
                        return (
                            <Characters data={data}/> 
                        )
                    })
                }
            </BackgroundStyle>
        </Test>
    )
}

export default Character