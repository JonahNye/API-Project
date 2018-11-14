 "use strict";

const searchCriteria = {
  template: `
  <i class="material-icons favorites-page-btn" ng-click="$ctrl.goFavorites();">favorite</i>
  <header>
    <h1>Recipease</h1>
    <p class="sub-title">Search Recipes With Ease</p>
  </header>  
 <section class="search-center-container">
  <section class="search-container">
    <label>By Molecule</label>
    <select ng-model="$ctrl.healthy">
      <option>low-carb</option>
      <option>low-fat</option>
      <option>high-protein</option>
    </select>
    <label>Dietary Restrictions</label>
    <select ng-model="$ctrl.restrictions">
      <option>peanut-free</option>
      <option>alcohol-free</option>
      <option>vegan</option>
      <option>vegetarian</option>
    </select>
    <input class="search-bar" type="text" placeholder="recipe" ng-model="$ctrl.recipe">
    <img class="carrot-arrow" src="./images/carrot-arrow.png" ng-click="$ctrl.search($ctrl.recipe, $ctrl.healthy, $ctrl.restrictions);"/>
    <recipe-list list-of-ingredients="$ctrl.listOfIngredients" list-of-items="$ctrl.listOfItems"></recipe-list>
   </section> 
 </section>
`,
  controller: ["Service", "$location", function (Service, $location) {
    const vm = this;

    vm.search = (recipe, healthy, restrictions) => {
      Service.searchRecipe(recipe, healthy, restrictions).then((response) => {
        console.log(response);
        vm.listOfItems = response;
      }); 
      // $location.path('/recipeList'); 

    }

    

    
    vm.goFavorites  = () => {
      $location.path('/favoritesPage');
    }

  }]
}
angular
  .module("App")
  .component("searchCriteria", searchCriteria);