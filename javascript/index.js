import recipes from './recipes.js';
import factories from './factories.js';

const factory = factories();
const header = document.querySelector('header > aside');
const section = document.querySelector('section');
const divIngredient = document.querySelector('#ingredientField');
const divAppareil = document.querySelector('#appareilField');
const divUstensile = document.querySelector('#ustensilField');
const idListIngredient = document.querySelector('#ingredientList');
const idListAppareil = document.querySelector('#appareilList');
const idListUstensil = document.querySelector('#ustensilList');
const recipesSearch = document.querySelector('#search');
const arrayEvent = ['click', 'keypress'];

/**
 * initDataPage - initialise la page
 * @param  {Array} data liste des recettes
 */
const initDataPage = (data) => {
    initDataRecettes(data);
    initHtmlRecettes();
    initListIngredients();
    initListAppareils();
    initListUstensils();
    handleDivList();
    handleSearchRecettes();
    handleSearchIngredient();
    handleSearchAppareil();
    handleSearchUstensil();
    filtreTagRecette();
};

/**
 * initDataRecettes - envoie les données de la recette à la factory
 * @param  {Array} data liste des recettes
 */
const initDataRecettes = (data) => {
    data.forEach(recette => {
        factory.initRecettes(recette.id, recette.name, recette.servings, recette.ingredients, recette.time, recette.description, recette.appliance, recette.ustensils);
    });
    factory.setOrigineRecettes(factory.getRecettes());
};

/**
 * initHtmlRecettes - stock les recettes dans la variable htmlRecettes
 * @param  {Array} data liste des recettes recherchées
 */
const initHtmlRecettes = (data = false) => {
    if (!data) data = factory.getRecettes();
    let htmlRecettes = '';
    for (let i = 0; i < data.length; i++) {
        let htmlRecetteIngredients = '';
        for (let y = 0; y < data[i].ingredients.length; y++) {
            let ingredientUnit;
            let ingredientQuantity;
            if (data[i].ingredients[y].quantity !== undefined) ingredientQuantity = data[i].ingredients[y].quantity;
            else ingredientQuantity = '0';
            if (data[i].ingredients[y].unit !== undefined) ingredientUnit = data[i].ingredients[y].unit;
            else ingredientUnit = '';
            htmlRecetteIngredients += `${data[i].ingredients[y].ingredient}: ${ingredientQuantity} ${ingredientUnit}<br>`;
        }
        htmlRecettes += `
            <article tabindex="0">
                <aside>
                    <div class="recipeHeader">
                        <h2 title="${data[i].name}">${data[i].name}</h2>
                        <p class="time"><i class="far fa-clock"></i> ${data[i].time} min</p>
                    </div>
                    <div class="recipeDetails">
                        <p class="ingrédients" title="${htmlRecetteIngredients}">${htmlRecetteIngredients}</p>
                        <p class="description" title="${data[i].description}">${data[i].description}</p>
                    </div>
                </aside>
            </article>`;
    }
    displayListRecettes(htmlRecettes);
};

/**
 * displayListRecettes - affiche la liste des recettes dans le html
 * @param  {String} htmlRecettes liste des recettes en html 
 */
const displayListRecettes = (htmlRecettes) => {
    let icone = document.querySelector('header > a > img:nth-of-type(1)');
    if (htmlRecettes.length !== 0) section.innerHTML = htmlRecettes;
    else section.innerHTML = '<div id="searchFailed"><span>Aucune recette ne correspond à votre critère…<br>Vous pouvez chercher « tarte aux pommes », « poisson », etc.</span></div>';
    icone.style.marginLeft = '0em';
    icone.style.marginBottom = '0.5em';
    icone.style.transform = 'rotate(0deg)  scale(1)';
    setTimeout(() => {
        header.style.opacity = 1;
        section.style.opacity = 1;
    }, 1000);
};

/**
 * initListIngredients - envoie chaque ingrédient unique dans chaque recette à la factory
 * @param  {Array} recettes liste des recettes recherchées
 */
const initListIngredients = (recettes = false) => {
    
    if(!recettes) recettes = factory.getRecettes();
    factory.setIngredient([]);
    for (let i = 0; i < recettes.length; i++) {
        for (let y = 0; y < recettes[i].ingredients.length; y++) {
            let ingredient = recettes[i].ingredients[y].ingredient;
            ingredient = ingredient.charAt(0).toUpperCase() + ingredient.substring(1).toLowerCase();
            factory.initIngredient(ingredient);
        }
    }
    let ingredientList = factory.getIngredients();
    ingredientList = Array.from(new Set(ingredientList));
    factory.setIngredient(ingredientList);
    displayListFiltre(ingredientList, idListIngredient);
    addTagIngredient();
};

/**
 * initListAppareils - envoie chaque appareil unique dans chaque recette à la factory
 * @param  {Array} recettes liste des recettes recherchées
 */
const initListAppareils = (recettes = false) => {
    
    if (!recettes) recettes = factory.getRecettes();
    factory.setAppareil([]);
    for (let i = 0; i < recettes.length; i++) {
        factory.initAppareil(recettes[i].appliance);
    }
    let appareilList = factory.getAppareils();
    appareilList = Array.from(new Set(appareilList));
    factory.setAppareil(appareilList);
    displayListFiltre(appareilList, idListAppareil);
    addTagAppareil();
};

/**
 * initListUstensils - envoie chaque ustensil unique dans chaque recette à la factory
 * @param  {Array} recettes liste des recettes recherchées
 */
const initListUstensils = (recettes = false) => {
    
    if (!recettes) recettes = factory.getRecettes();
    factory.setUstensil([]);
    for (let i = 0; i < recettes.length; i++) {
        for (let y = 0; y < recettes[i].ustensils.length; y++) {
            let ustensil = recettes[i].ustensils[y];
            ustensil = ustensil.charAt(0).toUpperCase() + ustensil.substring(1).toLowerCase();
            factory.initUstensil(ustensil);
        }
    }
    let listUstensils = factory.getUstensils();
    listUstensils = Array.from(new Set(listUstensils));
    factory.setUstensil(listUstensils);
    displayListFiltre(listUstensils, idListUstensil);
    addTagUstensil();
};

/**
 * displayListFiltre - affiche la liste reçue dans son élément id reçu
 * @param  {Array} arrayList liste d'ingrédients ou d'appareils ou d'ustensiles uniques
 * @param  {Array} idElement élément id dom html
 */
const displayListFiltre = (arrayList, idElement) => {
    
    let htmlListFiltre = '';
    arrayList.forEach(element => {
        htmlListFiltre += `<span class="tag" tabindex="0">${element}</span>`;
    });

    idElement.innerHTML = htmlListFiltre;
};

/**
 * handleDivList - ouvre le div list lorsque que l'élément est click ou keypress
 */
const handleDivList = () => {
    
    arrayEvent.forEach(event => {
        [divIngredient, divAppareil, divUstensile].forEach(element => {
            element.querySelector('.fa-chevron-up').addEventListener(event, () => {
                if(element.style.width === '87px') {
                    // On ferme tous les listField
                    for (let i = 0; i < 3; i++) {
                        let listField = header.querySelectorAll('.listField')[i];
                        listField.style.width = '87px';
                        listField.style.minWidth = 'initial';
                        listField.style.height = '19.7px';
                        listField.style.filter = 'brightness(100%)';
                        listField.querySelector('.fa-chevron-up').style.transform = 'rotate(180deg)';
                        listField.querySelector('div').style.display = 'none';
                    }
                    divIngredient.querySelector('span').textContent = 'Ingédients';
                    divAppareil.querySelector('span').textContent = 'Appareils';
                    divUstensile.querySelector('span').textContent = 'Ustensiles';
                    if (element === divAppareil) { element.style.width = '19%'; element.style.minWidth = '185px'; }
                    else { element.style.width = '90%'; }
                    element.style.height = '251px';
                    if (element === divIngredient) {
                        element.querySelector('span').innerHTML = '<input type="search" placeholder="Rechercher un ingédient" aria-label="Rechercher un ingédient" name="ingredientSearchFilter" id="ingredientSearchFilter" class="searchInputList">';
                    } else if (element === divAppareil) {
                        element.querySelector('span').innerHTML = '<input type="search" placeholder="Rechercher un appareil" aria-label="Rechercher un appareil" name="appareilSearchFilter" id="appareilSearchFilter" class="searchInputList">';
                    } else if (element === divUstensile) {
                        element.querySelector('span').innerHTML = '<input type="search" placeholder="Rechercher un ustensile" aria-label="Rechercher un ustensile" name="ustensilSearchFiltere" id="ustensilSearchFiltere" class="searchInputList">';
                    }
                    element.style.filter = 'brightness(95%)';
                    element.querySelector('.fa-chevron-up').style.transform = 'rotate(0deg)';
                    element.querySelector('div').style.display = 'grid';
                    element.querySelector('div').style.gridTemplateColumns = '1fr 1fr 1fr';

                } else {
                    closeDivList(element);
                }
            });
        });
    });
};

/**
 * closeDivList - ferme l'element passé
 * @param  {Array} element élément html du dom
 */
const closeDivList = (element) => {
    divIngredient.querySelector('span').textContent = 'Ingédients';
    divAppareil.querySelector('span').textContent = 'Appareils';
    divUstensile.querySelector('span').textContent = 'Ustensiles';
    element.style.width = '87px';
    element.style.minWidth = 'initial';
    element.style.height = '19.7px';
    element.style.filter = 'brightness(100%)';
    element.querySelector('.fa-chevron-up').style.transform = 'rotate(180deg)';
    element.querySelector('div').style.display = 'none';
};

/**
 * handleSearchRecettes - capture la valeur passée dans la barre de recherche et l'envoie à la factory
 */
const handleSearchRecettes = () => {
    recipesSearch.addEventListener('keyup', () => {
        if (recipesSearch.value.length >= 3) {
            const recettes = factory.recipesSearch(recipesSearch.value.toLowerCase());
            if (recettes.length !== 0) factory.setRecettes(recettes);
            initHtmlRecettes(recettes);
            initListIngredients(recettes);
            initListAppareils(recettes);
            initListUstensils(recettes);
        } else {
            filtreTagRecette();
            initHtmlRecettes(factory.getRecettes());
            initListIngredients();
            initListAppareils();
            initListUstensils();
        }
    });
};

/**
 * handleSearchIngredient - capture la valeur passée dans la barre de recherche ingrédients et l'envoie à la factory
 */
const handleSearchIngredient = () => {
    const ingredientSearchFilter = document.querySelector('.ingredientFieldSpan');
    ingredientSearchFilter.addEventListener('keyup', () => {
        if (ingredientSearchFilter.querySelector('#ingredientSearchFilter').value.length >= 3) {
            const ingredient = factory.ingredientSearchFilter(ingredientSearchFilter.querySelector('#ingredientSearchFilter').value.toLowerCase());
            displayListFiltre(ingredient, idListIngredient);
            addTagIngredient();
        } else {
            initListIngredients();
        }
    });
};

/**
 * addTagIngredient - capture la valeur du tag dans la liste ingrédients et l'envoie à la factory
 */
const addTagIngredient = () => {
    const arrayIngredients = factory.getIngredients();
    const ingredientField = document.querySelector('#ingredientField');
    const ingredientTagList = document.querySelector('#ingredientTagList');
    for (let i = 0; i < arrayIngredients.length; i++) {
        let tagIngredient = ingredientField.querySelectorAll('#ingredientList > span.tag')[i];
        arrayEvent.forEach(event => {
            tagIngredient.addEventListener(event, () => {
                const arrayingredientTagList = factory.getTagIngredients();
                if (arrayingredientTagList.length === 0 || arrayingredientTagList.indexOf(tagIngredient.textContent.toLowerCase()) === -1) {
                    if (ingredientTagList.textContent.length === 17) ingredientTagList.innerHTML = `<p class="tag tagIngredient">${tagIngredient.textContent}<i class="far fa-times-circle"></i></p>`;
                    else ingredientTagList.innerHTML += `<p class="tag tagIngredient">${tagIngredient.textContent}<i class="far fa-times-circle"></i></p>`;
                    factory.initTagIngredient(tagIngredient.textContent.toLowerCase());
                    const recetteTagIngredient = factory.recipeFilteredByIngredients(factory.getRecettes(), tagIngredient.textContent.toLowerCase());
                    factory.setRecettes(recetteTagIngredient);
                    const recettes = factory.getRecettes();
                    initListIngredients(recettes);
                    initListAppareils(recettes);
                    initListUstensils(recettes);
                    initHtmlRecettes(recettes);
                    spliceTagIngredient();
                }
            });
        });
    }
};

/**
 * spliceTagIngredient - capture la valeur du tag ingrédient supprimé et l'envoie à la factory
 */
const spliceTagIngredient = () => {
    let arrayingredientTagList = factory.getTagIngredients();
    const ingredientTagList = document.querySelector('#ingredientTagList');
    for (let i = 0; i < arrayingredientTagList.length; i++) {
        let tagIngredient = ingredientTagList.querySelectorAll('p.tag')[i];
        arrayEvent.forEach(event => {
            tagIngredient.querySelector('i').addEventListener(event, () => {
                const positionTag = arrayingredientTagList.indexOf(tagIngredient.textContent.toLowerCase());
                arrayingredientTagList.splice(positionTag, 1);
                factory.setTagIngredient(arrayingredientTagList);
                filtreTagRecette();
                initHtmlRecettes();
                tagIngredient.remove();
            });
        });
    }
};

/**
 * handleSearchAppareil - capture la valeur passée dans la barre de recherche appareils et l'envoie à la factory
 */
const handleSearchAppareil = () => {
    const appareilSearchFilter = document.querySelector('.appareilFieldSpan');
    appareilSearchFilter.addEventListener('keyup', () => {
        if (appareilSearchFilter.querySelector('#appareilSearchFilter').value.length >= 3) {
            const appareil = factory.appareilSearchFilter(appareilSearchFilter.querySelector('#appareilSearchFilter').value.toLowerCase());
            displayListFiltre(appareil, idListAppareil);
            addTagAppareil();
        } else {
            initListAppareils();
        }
    });
};

/**
 * addTagAppareil - capture la valeur du tag dans la liste appareils et l'envoie à la factory
 */
const addTagAppareil = () => {
    const arrayAppareils = factory.getAppareils();
    const appareilField = document.querySelector('#appareilField');
    const appareilTagList = document.querySelector('#appareilTagList');
    for (let i = 0; i < arrayAppareils.length; i++) {
        let tagAppareil = appareilField.querySelectorAll('#appareilList > span.tag')[i];
        arrayEvent.forEach(event => {
            tagAppareil.addEventListener(event, () => {
                const arrayappareilTagList = factory.getTagAppareils();
                if (arrayappareilTagList.length === 0 || arrayappareilTagList.indexOf(tagAppareil.textContent.toLowerCase()) === -1) {
                    if (appareilTagList.textContent.length === 15) appareilTagList.innerHTML = `<p class="tag tagAppareil">${tagAppareil.textContent}<i class="far fa-times-circle"></i></p>`;
                    else appareilTagList.innerHTML += `<p class="tag tagAppareil">${tagAppareil.textContent}<i class="far fa-times-circle"></i></p>`;
                    factory.initTagAppareil(tagAppareil.textContent.toLowerCase());
                    const recetteTagAppareil = factory.recipeFilteredByAppareil(factory.getRecettes(), tagAppareil.textContent.toLowerCase());
                    factory.setRecettes(recetteTagAppareil);
                    const recettes = factory.getRecettes();
                    initListIngredients(recettes);
                    initListAppareils(recettes);
                    initListUstensils(recettes);
                    initHtmlRecettes(recettes);
                    spliceTagAppareil();
                }
            });
        });
    }
};

/**
 * spliceTagAppareil - capture la valeur du tag appareil supprimé et l'envoie à la factory
 */
const spliceTagAppareil = () => {
    let arrayappareilTagList = factory.getTagAppareils();
    const appareilTagList = document.querySelector('#appareilTagList');
    for (let i = 0; i < arrayappareilTagList.length; i++) {
        let tagAppareil = appareilTagList.querySelectorAll('p.tag')[i];
        arrayEvent.forEach(event => {
            tagAppareil.querySelector('i').addEventListener(event, () => {
                const positionTag = arrayappareilTagList.indexOf(tagAppareil.textContent.toLowerCase());
                arrayappareilTagList.splice(positionTag, 1);
                factory.setTagAppareil(arrayappareilTagList);
                filtreTagRecette();
                initHtmlRecettes();
                tagAppareil.remove();
            });
        });
    }
};

/**
 * handleSearchUstensil - capture la valeur passée dans la barre de recherche ustensiles et l'envoie à la factory
 */
const handleSearchUstensil = () => {
    const ustensilSearchFilter = document.querySelector('.ustensilFieldSpan');
    ustensilSearchFilter.addEventListener('keyup', () => {
        if (ustensilSearchFilter.querySelector('#ustensilSearchFiltere').value.length >= 3) {
            const ustensil = factory.ustensilSearchFilter(ustensilSearchFilter.querySelector('#ustensilSearchFiltere').value.toLowerCase());
            displayListFiltre(ustensil, idListUstensil);
            addTagUstensil();
        } else {
            initListUstensils();
        }
    });
};

/**
 * addTagUstensil - capture la valeur du tag dans la liste ustensils et l'envoie à la factory
 */
const addTagUstensil = () => {
    const arrayUstensils = factory.getUstensils();
    const divUstensils = document.querySelector('#ustensilField');
    const listTagUstensil = document.querySelector('#ustensilTagList');
    for (let i = 0; i < arrayUstensils.length; i++) {
        let tagUstensil = divUstensils.querySelectorAll('#ustensilList > span.tag')[i];
        arrayEvent.forEach(event => {
            tagUstensil.addEventListener(event, () => {
                const arrayListTagUstensil = factory.getTagUstensils();
                if (arrayListTagUstensil.length === 0 || arrayListTagUstensil.indexOf(tagUstensil.textContent.toLowerCase()) === -1) {
                    if (listTagUstensil.textContent.length === 16) listTagUstensil.innerHTML = `<p class="tag tagUstensile">${tagUstensil.textContent}<i class="far fa-times-circle"></i></p>`;
                    else listTagUstensil.innerHTML += `<p class="tag tagUstensile">${tagUstensil.textContent}<i class="far fa-times-circle"></i></p>`;
                    factory.initTagUstensil(tagUstensil.textContent.toLowerCase());
                    const recetteTagUstensil = factory.recipeFilteredByUstensil(factory.getRecettes(), tagUstensil.textContent.toLowerCase());
                    factory.setRecettes(recetteTagUstensil);
                    const recettes = factory.getRecettes();
                    initListIngredients(recettes);
                    initListAppareils(recettes);
                    initListUstensils(recettes);
                    initHtmlRecettes(recettes);
                    spliceTagUstensil();
                }
            });
        });
    }
};

/**
 * spliceTagUstensil - capture la valeur du tag ustensil supprimé et l'envoie à la factory
 */
const spliceTagUstensil = () => {
    let arrayListTagUstensil = factory.getTagUstensils();
    const listTagUstensil = document.querySelector('#ustensilTagList');
    for (let i = 0; i < arrayListTagUstensil.length; i++) {
        let tagUstensil = listTagUstensil.querySelectorAll('p.tag')[i];
        arrayEvent.forEach(event => {
            tagUstensil.querySelector('i').addEventListener(event, () => {
                const positionTag = arrayListTagUstensil.indexOf(tagUstensil.textContent.toLowerCase());
                arrayListTagUstensil.splice(positionTag, 1);
                factory.setTagUstensil(arrayListTagUstensil);
                filtreTagRecette();
                initHtmlRecettes();
                tagUstensil.remove();
            });
        });
    }
};

/**
 * filtreTagRecette - refiltre chaque recherche avancée
 */
const filtreTagRecette = () => {
    let arrayingredientTagList = factory.getTagIngredients();
    let arrayappareilTagList = factory.getTagAppareils();
    let arrayListTagUstensil = factory.getTagUstensils();
    let origineRecette = factory.getOrigineRecettes();
    arrayingredientTagList.forEach(tag => {
        const recetteTagIngredient = factory.recipeFilteredByIngredients(origineRecette ,tag);
        origineRecette = recetteTagIngredient;
        factory.setRecettes(origineRecette);
    });
    arrayappareilTagList.forEach(tag => {
        const recetteTagAppareil = factory.recipeFilteredByAppareil(origineRecette ,tag);
        origineRecette = recetteTagAppareil;
        factory.setRecettes(origineRecette);
    });
    arrayListTagUstensil.forEach(tag => {
        const recetteTagUstensil = factory.recipeFilteredByUstensil(origineRecette ,tag);
        origineRecette = recetteTagUstensil;
        factory.setRecettes(origineRecette);
    });
    if (recipesSearch.value.length >= 3) {
        const recettesSearch = factory.recipesSearch(recipesSearch.value.toLowerCase());
        if (recettesSearch.length !== 0) factory.setRecettes(recettesSearch);
    }
    if (arrayingredientTagList.length === 0 && arrayappareilTagList.length === 0 && arrayListTagUstensil.length === 0 && recipesSearch.value.length <= 2) factory.setRecettes(origineRecette);
    initListIngredients();
    initListAppareils();
    initListUstensils();
};

initDataPage(recipes);