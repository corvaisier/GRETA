import MiamFunction from "../cores/miamFunction"

function MiamWeekForm({ menu, day, numberOfDay }) {

    let a
    let b
    if (menu.length === 14) {
        a = menu.map((elem) => elem)
        b = day
    }

    function handleSubmit(event) {
        numberOfDay(event.target.value)
        event.preventDefault()
    }
    return (
        <>
            {
                menu.length === 14 &&
                <div> <form onChange={handleSubmit}>
                    <label for="pet-select">Entrez un jour:</label>
                    <select name="day" >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                    </select>
                </form>
                    <MiamFunction
                        menu={a}
                        day={b}
                    />
                </div>

            }
        </>
    )
}

export default MiamWeekForm 
