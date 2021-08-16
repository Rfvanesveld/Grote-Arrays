const log = console.log

document.getElementById("opdracht5").addEventListener('click', showButtons)
// document.getElementById("opdracht7").addEventListener('click', showTheAverageAgeInFrance);

document.getElementById("opdracht8").addEventListener('click', showTheAverageAgeInSlovakia);
// document.getElementById("opdracht9").addEventListener('click', showTheAverageAgeInColombia);
console.log()


const getFrance = randomPersonData.filter(result => result.region === "France")
const getFranceAges = getFrance.map(result => result.age)
const getFranceTotalAge = getFranceAges.reduce((a, b) => a + b)

const getNumberOfPersonsInFrance = getFrance.length
const GetFranceAverageAge = Math.round(getFranceTotalAge / getNumberOfPersonsInFrance)

log(GetFranceAverageAge)

const getSlovakia = randomPersonData.filter(result => result.region === "Slovakia")
const getSlovakiaAges = getSlovakia.map(result => result.age)
const getSlovakiaTotalAge = getSlovakiaAges.reduce((a, b) => a + b)

const getNumberOfPersonsInSlovakia = getSlovakia.length
const GetSlovakiaAverageAge = Math.round(getSlovakiaTotalAge / getNumberOfPersonsInSlovakia)


log(GetSlovakiaAverageAge)

const getColombia = randomPersonData.filter(result => result.region === "Colombia")
const getColombiaAges = getColombia.map(result => result.age)
const getColombiaTotalAge = getColombiaAges.reduce((a, b) => a + b)

const getNumberOfPersonsInColombia = getColombia.length
const GetColombiaAverageAge = Math.round(getColombiaTotalAge / getNumberOfPersonsInColombia)

log(GetColombiaAverageAge)

function showButtons() {
    removeDatabase()

    france = document.createElement("input");
    france.setAttribute("type", "radio")
    france.setAttribute("name", "filter")
    france.setAttribute("value", "opdracht7")
    france.id = ("opdracht7")

    franceLable = document.createElement("lable");
    franceText = document.createTextNode("FRANCE")

    franceLable.appendChild(franceText)
    radioButtons.appendChild(france)
    radioButtons.appendChild(franceLable)

    slovakia = document.createElement("input");
    slovakia.setAttribute("type", "radio")
    slovakia.setAttribute("name", "filter")
    slovakia.setAttribute("value", "opdracht8")
    slovakia.id = ("opdracht8")

    slovakiaLable = document.createElement("lable");
    slovakiaText = document.createTextNode("SLOVAKIA")

    slovakiaLable.appendChild(slovakiaText)
    radioButtons.appendChild(slovakia)
    radioButtons.appendChild(slovakiaLable)

    colombia = document.createElement("input");
    colombia.setAttribute("type", "radio")
    colombia.setAttribute("name", "filter")
    colombia.setAttribute("value", "opdracht9")

    colombia.id = ("opdracht9")
    colombiaLable = document.createElement("lable");
    colombiaText = document.createTextNode("COLOMBIA")

    colombiaLable.appendChild(colombiaText)
    radioButtons.appendChild(colombia)
    radioButtons.appendChild(colombiaLable)

};

function showTheAverageAgeInFrance() {
    removeDatabase()

    toelichting.innerHTML = "De Gemiddelde Leeftijd in Frankrijk";
    getFrance.forEach(result => {

        franceAverageAge = document.createElement("div");
        emptyLine = document.createElement("div");

        franceAverageAge.innerHTML = (result);
        emptyLine.innerHTML = ("");

        database.appendChild(franceAverageAge)
        database.appendChild(emptyLine);

    });
};


function showTheAverageAgeInSlovakia() {
    removeDatabase()

    toelichting.innerHTML = "De Gemiddelde Leeftijd in slovakia";
    getSlovakia.forEach(result => {

        SlovakiaAverageAge = document.createElement("div");
        emptyLine = document.createElement("div");

        slovakiaAverageAge.innerHTML = (result);
        emptyLine.innerHTML = ("");

        database.appendChild(slovakiaAverageAge)
        database.appendChild(emptyLine);

    });
};

function showTheAverageAgeInColombia() {
    removeDatabase()

    toelichting.innerHTML = "De Gemiddelde Leeftijd in Colombia";
    getColombia.forEach(result => {

        colombiaAverageAge = document.createElement("div");
        emptyLine = document.createElement("div");

        colombiaAverageAge.innerHTML = (result);
        emptyLine.innerHTML = ("");

        database.appendChild(colombiaAverageAge)
        database.appendChild(emptyLine);

    });
};


