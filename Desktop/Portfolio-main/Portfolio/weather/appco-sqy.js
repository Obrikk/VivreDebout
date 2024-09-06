//// S'insrcire sur Open Weather Map 

// Récupérer la clé API dans votre compte - en haut à droite (My API keys)

// Parcourir la doc pour récupérer le lien que vous utiliserez

// Pour le bouton de Geolocalisation : 
// récupérer les coords de vore position avec navigator.geolocation -> Regarder comment ca marche dans la doc (w3 ou MDN) !

// 1) Créer le HTML et importer script + css, ne pas oublier d'importer axios si besoin

// 2) Ajouter un écouteur d'événement sur votre bouton Geolocate (récupérer les coords)

// 3) Passer ces coords dans votre lien lors de la requete vers l'API ainsi que la clé API

// api : https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&appid=${key}

// 4) Récupérer la data recu et l'afficher dans votre page

// 5) Il faudra afficher les degrés, le temps, la ville et les 2 premières lettres du pays et surtout l'image qui correspond au temps

// BONUS :

// Ajouter un input dans lequel on renseigne le nom de la ville et qui nous affiche le temps correspondant
// (Astuce : vous devrez utiliser un autre type de requete API d'Open Weather en plus de celle utilisée précedemment)

// > Pour cherche par ville : https://openweathermap.org/api/geocoding-api

const input = document.querySelector('.search')
const btn = document.querySelector('.btn-location')
const icon = document.querySelector('.weather-icon')
const weather = document.querySelector('.weather')
const degrees = document.querySelector('.degrees')
const city = document.querySelector('.city')

const key = '28a46ed081fa271f6e1f3b7415825368'

// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}

btn.addEventListener('click', getLocation)
window.addEventListener('keypress', (e) => {
    if (e.key === "Enter" && input.value !== "") {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&limit=5&appid=${key}`)
        .then(res => {
            const lat = res.data[0].lat
            const lon = res.data[0].lon

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`

            getData(url)
        })
        .catch(error => alert(error))
    }
})

function getLocation() {
    weather.textContent = "Chargement ..."
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError)
    } else {
        alert("La geolocalisation n'est pas supportée")
    }
}

function showPosition(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`

    getData(url)
}

function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
    }
}

async function getData(url) {
    try {
        const response = await axios.get(url)
        
        city.textContent = response.data.name + ", " + response.data.sys.country
        degrees.textContent = Math.floor(response.data.main.temp) + " °C"
        weather.textContent = response.data.weather[0].main + ", " + response.data.weather[0].description
        const iconCode = response.data.weather[0].icon
        icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`

    } catch (e) {
        console.log(e)
    }
}

