const factories = () => {
	let recipeArray = [];
	let arrayOrigineRecettes = [];
	let ingredientArray = [];
	let arrayTagIngredients = [];
	let equipmentArray = [];
	let arrayTagAppareils = [];
	let ustensilArray = [];
	let arrayTagUstensils = [];
	
	/**
	 * initRecettes - initialise les données de la recette dans le tableau recipeArray
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
		recipeArray.push({ id, name, servings, ingredients, time, description, appliance, ustensils });
	};

	/**
	 * initIngredient - initialise les ingrédients de la recette
	 * @param  {Array} ingredient ingrédients de la recette
	 */
	const initIngredient = (ingredient) => {
		ingredientArray.push(ingredient);
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
		equipmentArray.push(appareil);
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
		ustensilArray.push(ustensil);
	};

	/**
	 * initTagUstensil - initialise le tag ustensil de la recette dans le tableau arrayTagUstensils
	 * @param  {String} tagUstensil tag ustensil de la recette
	 */
	const initTagUstensil = (tagUstensil) => {
		arrayTagUstensils.push(tagUstensil);
	};

	/**
	 * setRecettes - entre les recettes filtreés dans le tableau recipeArray
	 * @param  {Array} dataRecettes tableau contenant les recettes filtrées 
	 */
	const setRecettes = (dataRecettes) => {
		recipeArray = dataRecettes;
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
		ingredientArray = dataIngredients;
	};

	/**
	 * setTagIngredient - entre les tags ingrédients dans le tableau arrayTagIngrédients
	 * @param  {Array} dataTagIngredients tableau contenant les tags ingrédients 
	 */
	const setTagIngredient = (dataTagIngredients) => {
		arrayTagIngredients = dataTagIngredients;
	};

	/**
	 * setAppareil - entre les appareils filtreés dans le tableau equipmentArray
	 * @param  {Array} dataAppareils tableau contenant les appareils filtrées 
	 */
	const setAppareil = (dataAppareils) => {
		equipmentArray = dataAppareils;
	};
	
	/**
	 * setTagAppareil - entre les tags appareils dans le tableau arrayTagAppareils
	 * @param  {Array} dataTagAppareils tableau contenant les tags appareils 
	 */
	const setTagAppareil = (dataTagAppareils) => {
		arrayTagAppareils = dataTagAppareils;
	};

	/**
	 * setUstensil - entre les ustensils filtreés dans le tableau ustensilArray
	 * @param  {Array} dataUstensils tableau contenant les ustensils filtrées 
	 */
	const setUstensil = (dataUstensils) => {
		ustensilArray = dataUstensils;
	};
			
	/**
	 * setTagUstensil - entre les tags ustensils dans le tableau arrayTagUstensils
	 * @param  {Array} dataTagUstensils tableau contenant les tags ustensils 
	 */
	const setTagUstensil = (dataTagUstensils) => {
		arrayTagUstensils = dataTagUstensils;
	};

	/**
	 * getRecettes - retourne le tableau recipeArray
	 * @return  {Array} recipeArray contenant les recettes 
	 */
	const getRecettes = () => {
		return recipeArray;
	};
	
	/**
	 * getOrigineRecettes - retourne le tableau arrayOrigineRecettes
	 * @return  {Array} arrayOrigineRecettes contenant les recettes 
	 */
	const getOrigineRecettes = () => {
		return arrayOrigineRecettes;
	};
	
	/**
	 * getIngredients - retourne le tableau ingredientArray
	 * @return  {Array} ingredientArray contenant les ingrédients des recettes 
	 */
	const getIngredients = () => {
		return ingredientArray;
	};
	
	/**
	 * getTagIngredients - retourne le tableau arrayTagIngredients
	 * @return  {Array} arrayTagIngredients contenant les tags ingrédients des recettes ajoutées 
	 */
	const getTagIngredients = () => {
		return arrayTagIngredients;
	};
	
	/**
	 * getAppareils - retourne le tableau equipmentArray
	 * @return  {Array} equipmentArray contenant les appareils des recettes 
	 */
	const getAppareils = () => {
		return equipmentArray;
	};
			
	/**
	 * getTagAppareils - retourne le tableau arrayTagAppareils
	 * @return  {Array} arrayTagAppareils contenant les tags appareils des recettes ajoutées 
	 */
	const getTagAppareils = () => {
		return arrayTagAppareils;
	};

	/**
	 * getUstensils - retourne le tableau ustensilArray
	 * @return  {Array} ustensilArray contenant les ustensils des recettes 
	 */
	const getUstensils = () => {
		return ustensilArray;
	};
			
	/**
	 * getTagUstensils - retourne le tableau arrayTagUstensils
	 * @return  {Array} arrayTagUstensils contenant les tags ustensils des recettes ajoutées 
	 */
	const getTagUstensils = () => {
			return arrayTagUstensils;
	};

	/**
	 * recipesSearch - filtre le tableau recipeArray en fonction de la valeur search
	 * @param  {String} search valeur passée dans la barre de recherche
	 * @returns {Array} renvoie un tableau contenant les recettes correspondant à la recherche
	**/
	const recipesSearch = (search) => {
		return recipeArray.filter((recette) => { //On réalise un parcours unique de la boucle principal en appliquant un filtre
			return recette.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) || // Si la recherche correspond au nom de la recette on l'ajoute au tableau
			recette.ingredients.filter((ingredient) => ingredient.ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))).length > 0 ||  // Si la recherche correspond à un ingrédient de la recette on l'ajoute au tableau
			recette.ustensils.filter((ustensil) => ustensil.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))).length > 0 || // Si la recherche correspond à un ustensil de la recette on l'ajoute au tableau
			recette.description.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) || // Si la recherche correspond à la description de la recette on l'ajoute au tableau
			recette.appliance.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")); // Si la recherche correspond à l'appareil de la recette on l'ajoute au tableau
		});
	};
	
	/**
	 * ingredientSearchFilter - filtre le tableau ingredientArray en fonction de la valeur search
	 * @param  {String} search valeur passée dans la barre de recherche
	 * @returns {Array} renvoie un tableau contenant les résultats filtrés
	 */
	const ingredientSearchFilter = (search) => {
		return ingredientArray.filter((ingredient) => ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")));
	};

	/**
	 * recipeFilteredByIngredients - filtre le tableau la liste en argument en fonction de la valeur du tag passé en argument
	 * @param  {Array} array tableau contenant les recettes a filtrer
	 * @param  {String} tagIngredient valeur tag ingrédient
	 * @returns {Array} renvoie un tableau contenant les recettes filtrés avec l'ingredient choisi
	 */
	const recipeFilteredByIngredients = (array, tagIngredient) => {
		return array.filter((array) => array.ingredients.filter((ingredient) => ingredient.ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(tagIngredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))).length > 0);
	};
	
	/**
	 * equipmentSearchFilter - filtre le tableau equipmentArray en fonction de la valeur search
	 * @param  {String} search valeur passée dans la barre de recherche
	 * @returns {Array} renvoie un tableau contenant les résultats filtrés
	 */
	const equipmentSearchFilter = (search) => {
		return equipmentArray.filter((equipment) => equipment.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")));
	};
	
	/**
	 * recipeFilteredByAppareil - filtre le tableau la liste en argument en fonction de la valeur du tag passé en argument
	 * @param  {Array} array tableau contenant les recettes a filtrer
	 * @param  {String} tagAppareil valeur tag appareil
	 * @returns {Array} renvoie un tableau contenant les résultats filtrés
	 */
	const recipeFilteredByAppareil = (array, tagAppareil) => {
		return array.filter((array) => array.appliance.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(tagAppareil.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")));
	};
	
	/**
	 * ustensilSearchFilter - filtre le tableau ustensilArray en fonction de la valeur search
	 * @param  {String} search valeur passée dans la barre de recherche
	 * @returns {Array} renvoie un tableau contenant les résultats filtrés
	 */
	const ustensilSearchFilter = (search) => {
		return ustensilArray.filter((ustensil) => ustensil.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")));
	};

	/**
	 * recipeFilteredByUstensil - filtre le tableau la liste en argument en fonction de la valeur du tag passé en argument
	 * @param  {Array} array tableau contenant les ustensils a filtrer
	 * @param  {String} tagIngredient valeur tag ustensil
	 * @returns {Array} renvoie un tableau contenant les résultats filtrés
	 */
	const recipeFilteredByUstensil = (array, tagUstensil) => {
		return array.filter((array) => array.ustensils.filter((ustensil) => ustensil.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(tagUstensil.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))).length > 0);
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
		equipmentSearchFilter,
		recipeFilteredByAppareil,
		ustensilSearchFilter,
		recipeFilteredByUstensil
	};
};

export default factories;