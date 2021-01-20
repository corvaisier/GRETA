import MiamFunction from "../cores/miamFunction"

function MiamWeekForm({ menu, day, numberOfDay }) {

    function handleChange(event) {
        numberOfDay(event.target.value)
        event.preventDefault()
    }
    return (
        <>
            {
                menu.length === 14 &&
                <div style={{marginTop:"20px"}}>
                    <form onChange={handleChange}>
                        <label htmlFor="pet-select">Entrez un jour entre 1 et 53:</label>
                        <input type="number" min="1" max="53" />
                    </form>
                    <MiamFunction
                        menu={menu}
                        day={day}
                    />
                </div>

            }
        </>
    )
}

export default MiamWeekForm 
