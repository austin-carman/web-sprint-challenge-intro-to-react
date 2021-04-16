// Write your Character component here

import React, { useState } from 'react'
import styled from 'styled-components'
import CharacterInfo from './CharacterInfo'


const Character = ((props) => {
    const { character } = props

    const [charUrl, setCharUrl] = useState(null)

    const openProfile = id => {
        setCharUrl(character.url)
    }

    const closeProfile = id => {
        setCharUrl(null)
    }


    return(
        <div>
            <h2>{character.name}</h2>
            <button onClick={()=>{openProfile()}}>View Profile</button>
            <CharacterInfo character={character} charid={charUrl} close={closeProfile}/>
        </div>
    )

});

export default Character;

