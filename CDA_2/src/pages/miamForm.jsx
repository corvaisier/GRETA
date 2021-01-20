function MiamForm({ menu, setMenu }) {

    const sushi = "🍣"
    const pizza = "🍕"
    const broccoli = "🥦"

    //update setMenu with menu and a new element
    const addMenuClicked = (event) => {
        setMenu([...menu, event.target.value])
    }

    return (
        <>
            { menu.length < 14 &&
                <div style={{marginBottom:"20px"}}>
                    <div>
                        <p>Sélectionnez vos 14 repas</p>
                        <button value={sushi} onClick={addMenuClicked}>{sushi}</button>
                        <button value={pizza} onClick={addMenuClicked}>{pizza}</button>
                        <button value={broccoli} onClick={addMenuClicked}>{broccoli}</button>
                    </div>
                </div>
            }
            {
                menu.map((elem, index) => {
                    return (<span>{index}: {elem} </span>)
                })
            }
        </>
    )
}

export default MiamForm
