//Miam triangle algorithm who return the prediction
function computeNextFood(lunch, dinner) {
    const choice = ["🍣", "🍕", "🥦"]
    if (lunch === dinner) {
        return lunch
    }
    // compare lunch and dinner with the choice array, and return the unique element
    for (let i = 0; i < choice.length; i++) {
        if (choice[i] !== lunch && choice[i] !== dinner) {
            return choice[i];
        }
    }
}
//array of array in order to be used by function
let result = []
//array concatened for being able to search the good daily menu
let resultByDay = []

function MiamFunction({ menu, day }) {
    //variable who will be incremented, 0 value symbolizes the first student command 
    let loopIdx = 0
    //create a copy of menu for manipulations
    let menuCpy = menu.map((elem) => elem)
    //first student command
    result[0] = menu.map((elem) => elem)
    //loop who turn until we have only one result (18)
    while (loopIdx < menu.length - 1) {
        //system to format menus two by two so that they are comparable by function computeNextFood
        let array = []
        let a = 0
        let b = 2
        for (let i = 0; i < menuCpy.length - 1; i++) {
            let c = menuCpy.slice(a, b)
            array.push(c)
            a = a + 1
            b = b + 1
        }
        //menuCpy need to be reset to preparing a new iteration
        menuCpy = []
        //data formatting for the function computeNextFood
        array.forEach((regroupement) => {
            const lunch = regroupement[0]
            const dinner = regroupement[1]
            menuCpy.push(computeNextFood(lunch, dinner))
        })
        //iteration of the function to create the Miam triangle
        result[loopIdx + 1] = menuCpy.map((elem) => elem)
        loopIdx += 1
    }
    //construct a unique array with result array composed with array
    resultByDay = result[0].concat(result[1], result[2], result[3], result[4], result[5], result[6], result[7], result[8], result[9], result[10], result[11], result[12], result[13])

    let dailyMiam = (day * 2)

    return (
        <>
            {
                day > 0 && day < 54 &&
                <div>
                    <p>midi: {resultByDay[dailyMiam - 2]}</p>
                    <p>soir: {resultByDay[dailyMiam - 1]}</p>
                </div>
            }
        </>
    )
}


export default MiamFunction