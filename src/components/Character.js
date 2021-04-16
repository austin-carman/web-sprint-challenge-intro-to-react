// Write your Character component here

import React, { useState } from 'react'
import styled from 'styled-components'
import CharacterInfo from './CharacterInfo'

const StyledCard = styled.div `
    width: 75%;
    margin: 5% auto;
    
    .character-button{
    display:flex;
    justify-content: space-between;
    }

    h2 {
        font-size: 2rem;
    }

    button {
       padding: 0 2%;
    }
`

const Character = ((props) => {
    const { character } = props;

    const [view, setView] = useState(false);

    const toggleButton = () => {
        setView(!view)
    };

    return(
        <StyledCard>
            <div className='character-button'>
                <h2>{character.name}</h2>
                <button onClick={toggleButton}>View Profile</button>
            </div>
            <CharacterInfo character={character} viewButton={view} toggleButton={toggleButton}/>
        </StyledCard>
    );
});

export default Character;

