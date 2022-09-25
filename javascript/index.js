import recipes from './recipes.js';
import factories from './factories.js';

const factory = factories();
const section1 = document.querySelector('header > aside');
const section2 = document.querySelector('section');
const divIngredient = document.querySelector('#ingredientField');
const divAppareil = document.querySelector('#equipmentField');
const divUstensile = document.querySelector('#ustensilField');
const idListIngredient = document.querySelector('#ingredientList');
const idListAppareil = document.querySelector('#equipmentList');
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
    handleAppareilSearchFilter();
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
    if (htmlRecettes.length !== 0) section2.innerHTML = htmlRecettes;
    else section2.innerHTML = '<div id="searchFailed"><span>Aucune recette ne correspond à votre critère…<br>Vous pouvez chercher « tarte aux pommes », « poisson », etc.</span></div>';
    icone.style.marginLeft = '0em';
    icone.style.marginBottom = '0.5em';
    icone.style.transform = 'rotate(0deg)  scale(1)';
    setTimeout(() => {
        section1.style.opacity = 1;
        section2.style.opacity = 1;
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
                        let listField = section1.querySelectorAll('.listField')[i];
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
                        element.querySelector('span').innerHTML = '<input type="search" placeholder="Rechercher un ingédient" aria-label="Rechercher un ingédient" name="searchIngredient" id="searchIngredient" class="searchInputList">';
                    } else if (element === divAppareil) {
                        element.querySelector('span').innerHTML = '<input type="search" placeholder="Rechercher un appareil" aria-label="Rechercher un appareil" name="equipmentSearchFilter" id="equipmentSearchFilter" class="searchInputList">';
                    } else if (element === divUstensile) {
                        element.querySelector('span').innerHTML = '<input type="search" placeholder="Rechercher un ustensile" aria-label="Rechercher un ustensile" name="searchUstensile" id="searchUstensile" class="searchInputList">';
                    }
                    element.style.filter = 'brightness(95%)';
                    element.querySelector('.fa-chevron-up').style.transform = 'rotate(0deg)';
                    element.querySelector('div').style.display = 'grid';
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
    const searchIngredient = document.querySelector('.ingredientFieldSpan');
    searchIngredient.addEventListener('keyup', () => {
        if (searchIngredient.querySelector('#searchIngredient').value.length >= 3) {
            const ingredient = factory.searchIngredient(searchIngredient.querySelector('#searchIngredient').value.toLowerCase());
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
                const ingredientArrayTagList = factory.getTagIngredients();
                if (ingredientArrayTagList.length === 0 || ingredientArrayTagList.indexOf(tagIngredient.textContent.toLowerCase()) === -1) {
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
    let ingredientArrayTagList = factory.getTagIngredients();
    const ingredientTagList = document.querySelector('#ingredientTagList');
    for (let i = 0; i < ingredientArrayTagList.length; i++) {
        let tagIngredient = ingredientTagList.querySelectorAll('p.tag')[i];
        arrayEvent.forEach(event => {
            tagIngredient.querySelector('i').addEventListener(event, () => {
                const positionTag = ingredientArrayTagList.indexOf(tagIngredient.textContent.toLowerCase());
                ingredientArrayTagList.splice(positionTag, 1);
                factory.setTagIngredient(ingredientArrayTagList);
                filtreTagRecette();
                initHtmlRecettes();
                tagIngredient.remove();
            });
        });
    }
};

/**
 * handleAppareilSearchFilter - capture la valeur passée dans la barre de recherche appareils et l'envoie à la factory
 */
const handleAppareilSearchFilter = () => {
    const equipmentSearchFilter = document.querySelector('.equipmentFieldSpan');
    equipmentSearchFilter.addEventListener('keyup', () => {
        if (equipmentSearchFilter.querySelector('#equipmentSearchFilter').value.length >= 3) {
            const appareil = factory.equipmentSearchFilter(equipmentSearchFilter.querySelector('#equipmentSearchFilter').value.toLowerCase());
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
    const equipmentArray = factory.getAppareils();
    const appareilField = document.querySelector('#equipmentField');
    const appareilTagList = document.querySelector('#equipmentTagList');
    for (let i = 0; i < equipmentArray.length; i++) {
        let tagAppareil = appareilField.querySelectorAll('#equipmentList > span.tag')[i];
        arrayEvent.forEach(event => {
            tagAppareil.addEventListener(event, () => {
                const equipmentArrayTagList = factory.getTagAppareils();
                if (equipmentArrayTagList.length === 0 || equipmentArrayTagList.indexOf(tagAppareil.textContent.toLowerCase()) === -1) {
                    if (appareilTagList.textContent.length === 15) appareilTagList.innerHTML = `<p class="tag tagEquipment">${tagAppareil.textContent}<i class="far fa-times-circle"></i></p>`;
                    else appareilTagList.innerHTML += `<p class="tag tagEquipment">${tagAppareil.textContent}<i class="far fa-times-circle"></i></p>`;
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
    let equipmentArrayTagList = factory.getTagAppareils();
    const appareilTagList = document.querySelector('#equipmentTagList');
    for (let i = 0; i < equipmentArrayTagList.length; i++) {
        let tagAppareil = appareilTagList.querySelectorAll('p.tag')[i];
        arrayEvent.forEach(event => {
            tagAppareil.querySelector('i').addEventListener(event, () => {
                const positionTag = equipmentArrayTagList.indexOf(tagAppareil.textContent.toLowerCase());
                equipmentArrayTagList.splice(positionTag, 1);
                factory.setTagAppareil(equipmentArrayTagList);
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
        if (ustensilSearchFilter.querySelector('#searchUstensile').value.length >= 3) {
            const ustensil = factory.ustensilSearchFilter(ustensilSearchFilter.querySelector('#searchUstensile').value.toLowerCase());
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
    const ustensilArray = factory.getUstensils();
    const divUstensils = document.querySelector('#ustensilField');
    const listTagUstensil = document.querySelector('#ustensilTagList');
    for (let i = 0; i < ustensilArray.length; i++) {
        let tagUstensil = divUstensils.querySelectorAll('#ustensilList > span.tag')[i];
        arrayEvent.forEach(event => {
            tagUstensil.addEventListener(event, () => {
                const ustensilArrayTagList = factory.getTagUstensils();
                if (ustensilArrayTagList.length === 0 || ustensilArrayTagList.indexOf(tagUstensil.textContent.toLowerCase()) === -1) {
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
    let ustensilArrayTagList = factory.getTagUstensils();
    const listTagUstensil = document.querySelector('#ustensilTagList');
    for (let i = 0; i < ustensilArrayTagList.length; i++) {
        let tagUstensil = listTagUstensil.querySelectorAll('p.tag')[i];
        arrayEvent.forEach(event => {
            tagUstensil.querySelector('i').addEventListener(event, () => {
                const positionTag = ustensilArrayTagList.indexOf(tagUstensil.textContent.toLowerCase());
                ustensilArrayTagList.splice(positionTag, 1);
                factory.setTagUstensil(ustensilArrayTagList);
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
    let ingredientArrayTagList = factory.getTagIngredients();
    let equipmentArrayTagList = factory.getTagAppareils();
    let ustensilArrayTagList = factory.getTagUstensils();
    let origineRecette = factory.getOrigineRecettes();
    ingredientArrayTagList.forEach(tag => {
        const recetteTagIngredient = factory.recipeFilteredByIngredients(origineRecette ,tag);
        origineRecette = recetteTagIngredient;
        factory.setRecettes(origineRecette);
    });
    equipmentArrayTagList.forEach(tag => {
        const recetteTagAppareil = factory.recipeFilteredByAppareil(origineRecette ,tag);
        origineRecette = recetteTagAppareil;
        factory.setRecettes(origineRecette);
    });
    ustensilArrayTagList.forEach(tag => {
        const recetteTagUstensil = factory.recipeFilteredByUstensil(origineRecette ,tag);
        origineRecette = recetteTagUstensil;
        factory.setRecettes(origineRecette);
    });
    if (recipesSearch.value.length >= 3) {
        const recettesSearch = factory.recipesSearch(recipesSearch.value.toLowerCase());
        if (recettesSearch.length !== 0) factory.setRecettes(recettesSearch);
    }
    if (ingredientArrayTagList.length === 0 && equipmentArrayTagList.length === 0 && ustensilArrayTagList.length === 0 && recipesSearch.value.length <= 2) factory.setRecettes(origineRecette);
    initListIngredients();
    initListAppareils();
    initListUstensils();
};

initDataPage(recipes);