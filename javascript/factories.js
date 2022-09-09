const factories = () => {
	let arrayRecettes = [];
	let arrayOrigineRecettes = [];
	let arrayIngredients = [];
	let arrayTagIngredients = [];
	let arrayAppareils = [];
	let arrayTagAppareils = [];
	let arrayUstensils = [];
	let arrayTagUstensils = [];
	
	/**
	 * initRecettes - initialise les données de la recette dans le tableau arrayRecettes
	 * @param  {Int} id id de la recette
	 * @param  {String} name nom de la recette
	 * @param  {Int} servings nombre de personne qui peuvent être servies
	 * @param  {Array} ingredients ingrédients de la recette
	 * @param  {Int} time temps de préparation
	 * @param  {String} description description de la recette
	 * @param  {String} appliance appareil utilisé
	 * @param  {Array} ustensils ustensile utilisé
	 */
	const initRecettes = (id, name, servings, ingredients, time, description, appliance, ustensils) => {
		arrayRecettes.push({ id, name, servings, ingredients, time, description, appliance, ustensils });
	};

	/**
	 * initIngredient - initialise les ingrédients de la recette
	 * @param  {Array} ingredient ingrédients de la recette
	 */
	const initIngredient = (ingredient) => {
		arrayIngredients.push(ingredient);
	};

	/**
	 * initTagIngredient - initialise le tag ingrédient de la recette dans le tableau arrayTagIngredients
	 * @param  {String} tagIngredient tag ingrédient de la recette
	 */
	const initTagIngredient = (tagIngredient) => {
		arrayTagIngredients.push(tagIngredient);
	};

	/**
	 * initAppareil - initialise l'appareil de la recette
	 * @param  {String} appareil appareil de la recette
	 */
	const initAppareil = (appareil) => {
			arrayAppareils.push(appareil);
	};

	/**
	 * initTagAppareil - initialise le tag appareil de la recette dans le tableau arrayTagAppareils
	 * @param  {String} tagAppareil tag appareil de la recette
	 */
	const initTagAppareil = (tagAppareil) => {
		arrayTagAppareils.push(tagAppareil);
	};

	/**
	 * initUstensil - initialise les ustensils de la recette
	 * @param  {Array} ustensil ustensils de la recette
	 */
	const initUstensil = (ustensil) => {
		arrayUstensils.push(ustensil);
	};

	/**
	 * initTagUstensil - initialise le tag ustensil de la recette dans le tableau arrayTagUstensils
	 * @param  {String} tagUstensil tag ustensil de la recette
	 */
	const initTagUstensil = (tagUstensil) => {
		arrayTagUstensils.push(tagUstensil);
	};

	/**
	 * setRecettes - entre les recettes filtreés dans le tableau arrayRecettes
	 * @param  {Array} dataRecettes tableau contenant les recettes filtrées 
	 */
	const setRecettes = (dataRecettes) => {
		arrayRecettes = dataRecettes;
	};
	
	/**
	 * setOrigineRecettes - entre les recettes dans le tableau arrayOrigineRecettes
	 * @param  {Array} dataRecettes tableau contenant les recettes 
	 */
	const setOrigineRecettes = (dataRecettes) => {
		arrayOrigineRecettes = dataRecettes;
	};

	/**
	 * setIngredient - entre les ingrédients filtreés dans le tableau arrayIngrédients
	 * @param  {Array} dataIngredients tableau contenant les ingrédients filtrées 
	 */
	const setIngredient = (dataIngredients) => {
		arrayIngredients = dataIngredients;
	};

	/**
	 * setTagIngredient - entre les tags ingrédients dans le tableau arrayTagIngrédients
	 * @param  {Array} dataTagIngredients tableau contenant les tags ingrédients 
	 */
	const setTagIngredient = (dataTagIngredients) => {
		arrayTagIngredients = dataTagIngredients;
	};

	/**
	 * setAppareil - entre les appareils filtreés dans le tableau arrayAppareils
	 * @param  {Array} dataAppareils tableau contenant les appareils filtrées 
	 */
	const setAppareil = (dataAppareils) => {
		arrayAppareils = dataAppareils;
	};
	
	/**
	 * setTagAppareil - entre les tags appareils dans le tableau arrayTagAppareils
	 * @param  {Array} dataTagAppareils tableau contenant les tags appareils 
	 */
	const setTagAppareil = (dataTagAppareils) => {
		arrayTagAppareils = dataTagAppareils;
	};

	/**
	 * setUstensil - entre les ustensils filtreés dans le tableau arrayUstensils
	 * @param  {Array} dataUstensils tableau contenant les ustensils filtrées 
	 */
	const setUstensil = (dataUstensils) => {
		arrayUstensils = dataUstensils;
	};
			
	/**
	 * setTagUstensil - entre les tags ustensils dans le tableau arrayTagUstensils
	 * @param  {Array} dataTagUstensils tableau contenant les tags ustensils 
	 */
	const setTagUstensil = (dataTagUstensils) => {
		arrayTagUstensils = dataTagUstensils;
	};

	/**
	 * getRecettes - retourne le tableau arrayRecettes
	 * @return  {Array} arrayRecettes contenant les recettes 
	 */
	const getRecettes = () => {
		return arrayRecettes;
	};
	
	/**
	 * getOrigineRecettes - retourne le tableau arrayOrigineRecettes
	 * @return  {Array} arrayOrigineRecettes contenant les recettes 
	 */
	const getOrigineRecettes = () => {
			return arrayOrigineRecettes;
	};
	
	/**
	 * getIngredients - retourne le tableau arrayIngredients
	 * @return  {Array} arrayIngredients contenant les ingrédients des recettes 
	 */
	const getIngredients = () => {
		return arrayIngredients;
	};
	
	/**
	 * getTagIngredients - retourne le tableau arrayTagIngredients
	 * @return  {Array} arrayTagIngredients contenant les tags ingrédients des recettes ajoutées 
	 */
	const getTagIngredients = () => {
		return arrayTagIngredients;
	};
	
	/**
	 * getAppareils - retourne le tableau arrayAppareils
	 * @return  {Array} arrayAppareils contenant les appareils des recettes 
	 */
	const getAppareils = () => {
		return arrayAppareils;
	};
			
	/**
	 * getTagAppareils - retourne le tableau arrayTagAppareils
	 * @return  {Array} arrayTagAppareils contenant les tags appareils des recettes ajoutées 
	 */
	const getTagAppareils = () => {
		return arrayTagAppareils;
	};

	/**
	 * getUstensils - retourne le tableau arrayUstensils
	 * @return  {Array} arrayUstensils contenant les ustensils des recettes 
	 */
	const getUstensils = () => {
		return arrayUstensils;
	};
			
	/**
	 * getTagUstensils - retourne le tableau arrayTagUstensils
	 * @return  {Array} arrayTagUstensils contenant les tags ustensils des recettes ajoutées 
	 */
	const getTagUstensils = () => {
		return arrayTagUstensils;
	};

	/**
	 * recipesSearch - filtre le tableau arrayRecettes en function de la valeur search passée
	 * @param  {String} search valeur passée dans la barre de recherche
	 * @returns {Array} renvoie le tableau resultSearch contenant les recettes correspondant à la recherche
	 */
	const recipesSearch = (search) => {
		let resultSearch = [];
		for (let i = 0; i < arrayRecettes.length; i++) {
			if (arrayRecettes[i].name.toLowerCase().includes(search)) {
				resultSearch.push(arrayRecettes[i]);
			}
			for (let y = 0; y < arrayRecettes[i].ingredients.length; y++) {
				if (arrayRecettes[i].ingredients[y].ingredient.toLowerCase().includes(search)) {
					resultSearch.push(arrayRecettes[i]);
				}
			}
			if (arrayRecettes[i].description.toLowerCase().includes(search)) {
				resultSearch.push(arrayRecettes[i]);
			}
		}
		return resultSearch = Array.from(new Set(resultSearch));
	};
	
	/**
	 * ingredientSearchFilter - filtre le tableau arrayIngredients en function de la valeur search passée
	 * @param  {String} search valeur passée dans la barre de recherche
	 * @returns {Array} renvoie le tableau resultSearch contenant les résultats filtrés
	 */
	const ingredientSearchFilter = (search) => {
		let resultSearch = [];
		for (let i = 0; i < arrayIngredients.length; i++) {
			if (arrayIngredients[i].toLowerCase().includes(search)) resultSearch.push(arrayIngredients[i]);
		}
		return resultSearch;
	};

	/**
	 * recipeFilteredByIngredients - filtre le tableau arrayRecettes en function des valeurs dans le tableau arrayTagIngredients
	 * @param  {Array} array tableau contenant les recettes a filtrer
	 * @param  {String} tagIngredient valeur tag ingrédient
	 * @returns {Array} renvoie le tableau resultSearch contenant les résultats filtrés
	 */
	const recipeFilteredByIngredients = (array, tagIngredient) => {
		let resultSearch = [];
		for (let i = 0; i < array.length; i++) {
			for (let y = 0; y < array[i].ingredients.length; y++) {
				if (array[i].ingredients[y].ingredient.toLowerCase().includes(tagIngredient)) resultSearch.push(array[i]);
			}
		}
		return resultSearch;
	};
	
	/**
	 * appareilSearchFilter - filtre le tableau arrayAppareils en function de la valeur search passée
	 * @param  {String} search valeur passée dans la barre de recherche
	 * @returns {Array} renvoie le tableau resultSearch contenant les résultats filtrés
	 */
	const appareilSearchFilter = (search) => {
		let resultSearch = [];
		for (let i = 0; i < arrayAppareils.length; i++) {
			if (arrayAppareils[i].toLowerCase().includes(search)) resultSearch.push(arrayAppareils[i]);
		}
		return resultSearch;
	};
	
	/**
	 * recipeFilteredByAppareil - filtre le tableau arrayAppareils en function des valeurs dans le tableau arrayTagAppareils
	 * @param  {Array} array tableau contenant les recettes a filtrer
	 * @param  {String} tagAppareil valeur tag appareil
	 * @returns {Array} renvoie le tableau resultSearch contenant les résultats filtrés
	 */
	const recipeFilteredByAppareil = (array, tagAppareil) => {
		let resultSearch = [];
		for (let i = 0; i < array.length; i++) {
			if (array[i].appliance.toLowerCase().includes(tagAppareil)) resultSearch.push(array[i]);
		}
		return resultSearch;
	};
	
	/**
	 * ustensilSearchFilter - filtre le tableau arrayUstensils en function de la valeur search passée
	 * @param  {String} search valeur passée dans la barre de recherche
	 * @returns {Array} renvoie le tableau resultSearch contenant les résultats filtrés
	 */
	const ustensilSearchFilter = (search) => {
		let resultSearch = [];
		for (let i = 0; i < arrayUstensils.length; i++) {
			if (arrayUstensils[i].toLowerCase().includes(search)) resultSearch.push(arrayUstensils[i]);
		}
		return resultSearch;
	};

	/**
	 * recipeFilteredByUstensil - filtre le tableau arrayUstensils en function des valeurs dans le tableau arrayTagUstensils
	 * @param  {Array} array tableau contenant les ustensils a filtrer
	 * @param  {String} tagIngredient valeur tag ustensil
	 * @returns {Array} renvoie le tableau resultSearch contenant les résultats filtrés
	 */
	const recipeFilteredByUstensil = (array, tagUstensil) => {
		let resultSearch = [];
		for (let i = 0; i < array.length; i++) {
			for (let y = 0; y < array[i].ustensils.length; y++) {
				if (array[i].ustensils[y].toLowerCase().includes(tagUstensil)) resultSearch.push(array[i]);
			}
		}
		return resultSearch;
	};
	
	return {
		initRecettes,
		initIngredient,
		initTagIngredient,
		initAppareil,
		initTagAppareil,
		initUstensil,
		initTagUstensil,
		setRecettes,
		setOrigineRecettes,
		setIngredient,
		setTagIngredient,
		setAppareil,
		setTagAppareil,
		setUstensil,
		setTagUstensil,
		getRecettes,
		getOrigineRecettes,
		getIngredients,
		getTagIngredients,
		getAppareils,
		getTagAppareils,
		getUstensils,
		getTagUstensils,
		recipesSearch,
		ingredientSearchFilter,
		recipeFilteredByIngredients,
		appareilSearchFilter,
		recipeFilteredByAppareil,
		ustensilSearchFilter,
		recipeFilteredByUstensil
	};
};

export default factories;