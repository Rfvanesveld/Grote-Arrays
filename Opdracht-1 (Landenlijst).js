document.getElementById("opdracht1").addEventListener('click', showLandenLijst)

function showLandenLijst() {
    removeDatabase()
    removeExtraRadioButtons()
    const getCountries = randomPersonData.map(element => element.region)
    const noDoubles = [... new Set(getCountries)]
    noDoubles.forEach(result => {

        li = document.createElement("li")
        toelichting.innerHTML = "De Landenlijst"
        li.innerHTML = result
        database.appendChild(li)
    })
}




