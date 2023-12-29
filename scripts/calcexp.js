//@ts-nocheck

const lv = document.getElementById("level");
const exp = document.getElementById("currentExp");
const lvGoal = document.getElementById("levelGoal");
const expGoal = document.getElementById("expNeededText");

const pills = document.getElementById("currentPills");
const reverseLv = document.getElementById("reverseLevel");
const reverseXP = document.getElementById("reverseExp");


// EXP amounts for pills
const purity = 50000;
const skycharge = 20000;
const fortuphant = 29000;

const calcExp = () => {
    const expValues = [0, 95, 120, 150, 180, 215, 255, 295, 340, 385, 550, 670, 800, 945, 1105, 1275, 1455, 1645, 1850, 2070, 2665, 3125, 3625, 4155, 4725, 5330, 5970, 6650, 7360, 8110, 10230, 11890, 13665, 15565, 17580, 19715, 21975, 24350, 26850, 29465, 36040, 41815, 48200, 55175, 62770, 70980, 79810, 89270, 99385, 110155, 130935, 145000, 173670, 199045, 227240, 258285, 292325, 329445, 369720, 413260, 826525, 1653050, 2479575, 3306100, 4132625, 4959150, 5785675, 6612200, 7438725, 8265250, 9918300, 10744825, 11571350, 12397875, 13224400 ];
    
    let count = 0; // This will sum up exp per level for a given range.
    for (let i = parseInt(lv.value, 10); i <= parseInt(lvGoal.value, 10) - 1; i++) {
        count = parseInt(expValues[i], 10) + count;
    };
    count = count - parseInt(exp.value, 10);
    
    expGoal.innerText = parseInt(count).toLocaleString("en-US");

    // This is the amount of purity and skycharge pills needed, fixed so that if exp range falls between 40k and 50k it will up the purity
    let purCt = Math.floor(count / purity);
    let skyCt = Math.ceil((count - (purity * purCt)) / skycharge);
    let fortuphantCt = Math.floor(count / fortuphant);
    skyCt === 3 ? skyCt-- && purCt++ : "";

   
   
    
    // Update the results
    document.getElementById("purity-needed").innerText = purCt;
    document.getElementById("skycharge-needed").innerText = skyCt; 
    document.getElementById("fortuphant-needed").innerText = fortuphantCt
}

const reverseCalc = () => {
    const purity = 50000;
    
    let newLevel = 0;

    const expValues = [0, 0, 95, 120, 150, 180, 215, 255, 295, 340, 385, 550, 670, 800, 945, 1105, 1275, 1455, 1645, 1850, 2070, 2665, 3125, 3625, 4155, 4725, 5330, 5970, 6650, 7360, 8110, 10230, 11890, 13665, 15565, 17580, 19715, 21975, 24350, 26850, 29465, 36040, 41815, 48200, 55175, 62770, 70980, 79810, 89270, 99385, 110155, 130935, 145000, 173670, 199045, 227240, 258285, 292325, 329445, 369720, 413260, 826525, 1653050, 2479575, 3306100, 4132625, 4959150, 5785675, 6612200, 7438725, 8265250, 9918300, 10744825, 11571350, 12397875, 13224400];
        let totalExpPerLevel = [];
        let sum = 0;
        for (let i = 0; i < expValues.length; i++) {
            sum = expValues[i] + sum;
            totalExpPerLevel.push(sum);
        }
    
    let pillExp = parseInt(pills.value) * purity;
    let pillLv = totalExpPerLevel[reverseLv.value];
    
    let combined = pillExp + pillLv + parseInt(reverseXP.value);

    for (let i in totalExpPerLevel) {
        if (combined > totalExpPerLevel[i]) {
            newLevel = i;
        }
    }
    document.getElementById('current-pills-text').value = pills.value;
    document.getElementById('new-level-text').value = newLevel;
}

// Create the flip button for the user
const flip = () => {
    document.getElementById('calculator-container').style.display = "none";
    document.getElementById('reverse-calculator-container').style.display = "inline";
}
const flipback = () => {
    document.getElementById('calculator-container').style.display = "inline";
    document.getElementById('reverse-calculator-container').style.display = "none";
}

// Limits the values so that we don't have errors
const limiter = (input) => {
    if (input.value > 75) input.value = 75;
    if (lv.value >= lvGoal.value) lv.value = lvGoal.value - 1;
    calcExp();
}

