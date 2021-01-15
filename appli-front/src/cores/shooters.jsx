import React, { useState } from 'react'
import { number } from 'yup/lib/locale'
import schema from "../controllers/schema"

function Shooter() {
    const [isValidData, changeIsValidData] = useState(false)
    const [numberOfShooters, setShooters] = useState("")
    //states of differents songs versions
    const [songForZeroShooter, displaySongForZeroShooter] = useState(false)
    const [songForOneShooter, displaySongForOneShooter] = useState(false)
    const [songForTwoShooters, displaySongForTwoShooters] = useState(false)
    const [song, displaySong] = useState(false)

    //update messages, depend of isValidData statut
    function updateShootersValue(event) {
        if (songForZeroShooter === true || songForOneShooter === true ||songForTwoShooters === true || song === true ) {
            displaySongForZeroShooter(false)
            displaySongForOneShooter(false)
            displaySongForTwoShooters(false)
            displaySong(false)
        }
        if (isValidData === true) {
            changeIsValidData(false)
        }
        setShooters(event.target.value)
    }

    //call when the form is submitted, check if value is correct. If yes, update numberOfShooters state
    function handleSubmit(event) {
        schema
            .isValid({
                numberController: numberOfShooters
            })
            .then(function (valid) {
                if (valid === false) {
                    changeIsValidData(true)
                } else {
                    setShooters(numberOfShooters)
                    alert()
                }
            })
        event.preventDefault()
        
    }
// call in handleSubmit, if data is correct, display the good song version
    function alert() {
            if (numberOfShooters === "0") {
                displaySongForZeroShooter(true)
            }
           else if (numberOfShooters === "1") {
                displaySongForOneShooter(true)
            }
           else if (numberOfShooters === "2") {
                displaySongForTwoShooters(true)
            } 
            else  {
                displaySong(true)
            }
    }
    return (
        <>
            <div className="container" style={{ textAlign: "center", margin: "30px" }}>
                <form onSubmit={handleSubmit} className="form-group">
                    <label for="formGroupExampleInput">
                        Nombre de shooters:
                     <input className="form-control" id="formGroupExampleInput" value={numberOfShooters} type="text" onChange={updateShootersValue} /></label>
                    <input type="submit" value="Envoyer" />
                    <div>{isValidData && "Entrez s'il vous plaît une valeur intégrale comprise entre 0 et 99"}</div>
                </form>
                {
                    songForZeroShooter &&
                    <p>Plus de shooters sans alcool sur le mur, plus de shooters sans alcool.
                    Vas au supermarché pour en acheter, 99 shooters sans alcool sur le mur.</p>
                }
                {
                    songForOneShooter &&
                    <p>1 shooter sans alcool sur le mur, 1 shooter sans alcool.
                    Bois en un et au suivant ! plus de shooters sans alcool sur le mur.</p>
                }
                {
                    songForTwoShooters &&
                    <p>2 shooters sans alcool sur le mur, 2 shooters sans alcool.
                    Bois en un et au suivant! 1 shooter sans alcool sur le mur.
                    </p>
                }
                {
                    song &&
                    <p>{numberOfShooters} shooters sans alcool sur le mur, {numberOfShooters} shooters sans alcool. Bois en un et au suivant ! {numberOfShooters - 1} shooters sans alcool sur le mur.</p>
                }
            </div>
        </>
    )
}
export default Shooter
