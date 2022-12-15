// get hot drink recipes
async function getHotRecipes() {
    const res = await fetch("https://api.sampleapis.com/coffee/hot");
    const hotRecipe = await res.json();
    return hotRecipe;
}

// get iced drink recipes
async function getIcedRecipes() {
    const res = await fetch("https://api.sampleapis.com/coffee/iced");
    const icedRecipe = await res.json();
    return icedRecipe;
}

// create empty elements
function recipesClone(rcp) {
    const recipes = document.querySelector('.recipes');
    for (let i=1; i < rcp.length; i++) {

        const drinkSection = document.createElement('section');
        const drinkTitle = document.createElement('h1');
        const drinkDiv = document.createElement('div');
        const drinkImage = document.createElement('img');
        const drinkDescription = document.createElement('p');
        const drinkIngredients = document.createElement('ul');
        // const drinkFav = document.createElement('button');
        
        // drinkSection.setAttribute('class', 'recipeSection');
        drinkTitle.setAttribute('class', 'title');
        drinkDiv.setAttribute('class', 'recipe-box');
        drinkImage.setAttribute('class', 'image');
        drinkDescription.setAttribute('class', 'description');
        drinkIngredients.setAttribute('class', 'ingredients');
        // drinkFav.setAttribute('class', 'favcheck');

        recipes.appendChild(drinkSection);
        drinkSection.appendChild(drinkTitle);
        drinkSection.appendChild(drinkDiv);
        drinkDiv.appendChild(drinkImage);
        drinkDiv.appendChild(drinkDescription);
        drinkDiv.appendChild(drinkIngredients);
        // drinksection.appendChild(drinkFav);
    }
}

//input api data into empty elements
function recipesInput(rcp) {
    
    const drinkTitle = document.querySelectorAll('.title');
    const drinkImage = document.querySelectorAll('.image');
    const drinkDescription = document.querySelectorAll('.description');
    const drinkIngredients = document.querySelectorAll('.ingredients');

    for (let i=0; i < rcp.length; i++) {
        drinkTitle[i].innerHTML = rcp[i].title;
        drinkImage[i].src = rcp[i].image;
        drinkImage[i].alt = rcp[i].title;
        drinkDescription[i].innerHTML = rcp[i].description;
        for(let j=0; j < rcp[i].ingredients.length; j++) {
            let list = document.createElement('li');
            list.innerHTML = rcp[i].ingredients[j];
            drinkIngredients[i].appendChild(list);
        }
    }

}

//delete elements that have api data when user change drink type
function recipesReset() {
    const node = document.querySelector('.recipes');
    
    while(node.firstChild) {
        node.removeChild(node.firstChild);
    }
}


// function scrollToRecipes() {
    
//     var element = document.getElementById('recipes');
//     var rect = element.getBoundingClientRect();
//     var position = rect.top;

//     function scrollToTop() {
//     scrollTo(0, position);
//     }
// }


//set of functions for hot drink
async function allHotRecipes() {
    recipesReset();
    // scrollToRecipes();
    const hotRecipe = await getHotRecipes();
    recipesClone(hotRecipe);
    recipesInput(hotRecipe);
}

//set of functions for iced drink
async function allIcedRecipes() {
    recipesReset();
    const icedRecipe = await getIcedRecipes();
    recipesClone(icedRecipe);
    recipesInput(icedRecipe);
}