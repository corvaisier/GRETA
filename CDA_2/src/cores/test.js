function computeNextFood(lunch, dinner) {
    const choix = ["sushi", "pizza", "broccoli"]

    if (lunch === dinner) {
        return lunch
    }
    for (let i = 0; i < choix.length; i++) {
        if (choix[i] !== lunch && choix[i] !== dinner) {
            return choix[i];
        }
    }
}

let result = [];
function MiamFunction(menu) {
    let loopIdx = 0;
    let menuCpy = menu.map((elem) => elem);
    result[0] = menu.map((elem) => elem);
    while (loopIdx < menu.length -1) {
    let array = []
    let a = 0
    let b = 2
    for (let i = 0; i < menuCpy.length -1; i++) {
        let c = menuCpy.slice(a, b)
        array.push(c)
        a = a + 1
        b = b + 1
   }
   menuCpy = [];
   array.forEach((regroupement) => {
       const lunch = regroupement[0];
       const dinner = regroupement[1];
       menuCpy.push(computeNextFood(lunch, dinner))
   })
   result[loopIdx + 1] = menuCpy.map((elem) => elem);
   loopIdx += 1;
    }
    return result;
}

console.log(MiamFunction(["sushi", "sushi", "pizza", "sushi", "pizza", "broccoli", "pizza", "broccoli", "sushi", "sushi", "pizza", "pizza", "broccoli", "sushi"]));
