import React from 'react'
import styled from 'styled-components'

const CharacterInfo = props => {
    const { character, charid, close} = props

    console.log('help', character);

    return(
            <div>
                { charid &&
                    <>
                        <h2>Profile:</h2>
                        <p>Gender: {character.gender}</p>
                        <p>Eye Color: {character.eye_color}</p>
                        <p>Hair Color: {character.hair_color}</p>
                        <p>Height: {character.height}cm</p>
                        <p>Weigth: {character.mass}kg</p>
                        <button onClick={()=> {close()}}>Close Profile</button>
                    </>
                }
            </div>
    )

}

export default CharacterInfo;