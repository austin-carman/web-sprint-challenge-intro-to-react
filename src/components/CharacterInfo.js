import React from 'react'
import styled from 'styled-components'




const CharacterInfo = props => {
    const { character, viewButton} = props

    return(
        <div>
            {viewButton ? 
                <>
                    <h2>Profile:</h2>
                    <p>Gender: {character.gender}</p>
                    <p>Eye Color: {character.eye_color}</p>
                    <p>Hair Color: {character.hair_color}</p>
                    <p>Height: {character.height}cm</p>
                    <p>Weigth: {character.mass}kg</p>
                </>
            : <div></div>}
        </div>
  
    )
}

export default CharacterInfo;