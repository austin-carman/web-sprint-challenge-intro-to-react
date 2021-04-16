import React from 'react'
import styled from 'styled-components'


const StyledDiv = styled.div `
    h3 {
        font-size: 1.8rem;
    }
    p{
        font-size: 1.5rem;
    }
`

const CharacterInfo = props => {
    const { character, viewButton} = props;

    return(
        <StyledDiv>
            {viewButton ? 
                <>
                    <h3>Profile:</h3>
                    <p>Gender: {character.gender}</p>
                    <p>Eye Color: {character.eye_color}</p>
                    <p>Hair Color: {character.hair_color}</p>
                    <p>Height: {character.height}cm</p>
                    <p>Weigth: {character.mass}kg</p>
                </>
            : <div></div>}
        </StyledDiv>
    );
}

export default CharacterInfo;