function MiamForm({ menu, setMenu }) {

    const sushi = "🍣"
    const pizza = "🍕"
    const broccoli = "🥦"

    const addMenuClicked = (event) => {
        setMenu([...menu, event.target.value])
    }

    return (
        <>
            { menu.length < 14 &&
                <div>
                    <div>
                        <button value={sushi} onClick={addMenuClicked}>{sushi}</button>
                        <button value={pizza} onClick={addMenuClicked}>{pizza}</button>
                        <button value={broccoli} onClick={addMenuClicked}>{broccoli}</button>
                    </div>
                </div>
            }
            {
                menu.map((elem, index) => {
                    return (<span>#{index} {elem}, </span>)
                })
            }
        </>
    )
}

export default MiamForm
