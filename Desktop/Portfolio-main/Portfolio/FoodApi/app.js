const input = document.querySelector('input') // on sélectionne l'élément d'entrée (input)
const favoriteBtn = document.querySelector(".btn-favorite"); // le bouton de favoris
const submitBtn = document.querySelector(".submit"); // le bouton de soumission
const ul = document.querySelector("ul"); // la liste non
const alpha = document.querySelector('.alpha')
const popup = document.querySelector('.popup')

// Initialisation du tableau de favoris
let favTable = []

// Tableau pour mes lettres de l'alphabet
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t" , "u", "v", "w", "x", "y", "z"]

alphabet.forEach(letter => {
    const p = document.createElement('p')
    p.textContent = letter
    alpha.appendChild(p)

    p.addEventListener('click', () => {
        ul.innerHTML = "";
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        .then(res => {
            const meals = res.data.meals 

            meals.forEach(element => {
                const type = "search"
                displayMeal(element, favTable, type)
            })
        })
        .catch(error => console.log(error))
    })
})

// on va afficher les détails du repas en fonction de la recherche
function searchMeals() {
    ul.innerHTML = "";
    // Vérifie si la valeur de l'entrée (input) si elle n'est pas vide
    if (input.value !== "") {
        ul.innerHTML = ""; 
        const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`; 
        axios.get(URL)
            .then(res => {
                const body = res.data.meals; // on récupère les données des repas
                console.log(body);

                body.forEach(element => { 
                    const type = "search"
                    displayMeal(element, favTable, type)
                });
            }).catch(e => console.error(e)); // catch qui va gère les erreurs de la requête 
    }
}
 
// l'événement lors du clic sur le bouton de favoris
favoriteBtn.addEventListener("click", () => {
    ul.innerHTML = ""; // on va éfface le contenu précédent de la liste

    const favorites = JSON.parse(localStorage.getItem("favorites")) || []; // puis récupère les favoris depuis le stockage local
    
    favorites.forEach(idMeal => { 
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        
        axios.get(url)
        .then(res => {
            const data = res.data.meals
            console.log(data)

            data.forEach(element => {
                const type = 'fav'
                displayMeal(element, favTable, type)
            })
        })
        .catch(err => console.log(err))
    });
});


// Fonction de refactorisation
function displayMeal(element, favTable, type) {
    const title = element.strMeal; // Titre du repas
    const category = element.strCategory; // Catégorie du repas
    const area = element.strArea; // Région et origine du repas
    const img = element.strMealThumb; // l'image du repas
    const li = document.createElement("li"); // Crée un élément li (<p>${instructions}</p>)

    li.innerHTML = `
        <img src="${img}" alt="poster">
        <h2>${title}</h2>
        <h3>${category}</h3>
        <h3>${area}</h3>
    `;

    if (type === "search") {
        li.innerHTML +=  `<button id=${element.idMeal} class="btn-add">Add to favorites</button>`
    } else {
        li.innerHTML+=  `<button id=${element.idMeal} style="color: red" class="btn-del">Delete from favorites</button>`
    }

    ul.appendChild(li); // on va ajouter l'élément li à la liste ul

    // On vient chercher le 5ème enfant du li 
    const addBtn = li.children[4]

    // On écoute le bouton (aka 5ème enfant de ton li)
    addBtn.addEventListener('click', () => {

        if (!favTable.includes(element.idMeal)) {

            // On ajoute au tableau de favoris l'id du meal / repas
            favTable.push(addBtn.id)

            // On ajoute notre tableau de favs au local storage
            localStorage.setItem('favorites', JSON.stringify(favTable))
            addBtn.textContent = "Delete from favorites"
            addBtn.style.color = "red"

            // Afficher pop up de confirmation pendant 2 secondes
            popup.textContent = `${element.strMeal} a été ajouté au favoris avec succès`
            popup.style.visibility = "visible"
            popup.classList.remove('animate__animated', 'animate__fadeOutRight')
            popup.classList.add('animate__animated', 'animate__fadeInRight')

            console.log(popup.classList)

            setTimeout(() => {
                popup.classList.remove('animate__animated', 'animate__fadeInRight')
                popup.classList.add('animate__animated', 'animate__fadeOutRight')
            }, 2500)

        } else {
            addBtn.parentElement.remove()

            const index = favTable.indexOf(addBtn.id)
            favTable.splice(index, 1)
            localStorage.setItem('favorites', JSON.stringify(favTable))
            addBtn.textContent = "Add to favorites"
            addBtn.style.color = "black"
        }
    })
} 

// et pour finir l'événement lors du clic sur le bouton de soumission pour afficher les repas
submitBtn.addEventListener("click",searchMeals)


// À faire pour tout de suite : 

// Une flèche pour pouvoir descendre tout en bas de la page
// Une flèche en bas pour remonter 
// Un footer avec les lettres de l'alphabet quand on clique sur une lettre on effectue une recherche 
// avec pour résultats tous les plats qui commencent par cette lettre 

// Bonus : quand on clique sur un plat qu'on ajoute aux favoris qui est déjà dans les favoris 
// lui donner une petite animation de type wobble.

// Bonus2 : Afficher une pop-up quand on ajoute un plat aux favs ex : "plat ajouté avec succès"
// Afficher une popup quand on retire un plet depuis la zone de recherche, ex : "plat supprimé avec succès" 