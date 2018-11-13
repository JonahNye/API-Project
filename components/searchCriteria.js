 "use strict";

const searchCriteria = {
  template: `
  <button ng-click="$ctrl.goFavorites();">Favorites</button>
  <input type="text" placeholder="recipe" ng-model="$ctrl.recipe">
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
  <button ng-click="$ctrl.search($ctrl.recipe, $ctrl.healthy, $ctrl.restrictions);">Search A Recipe</button>
  <recipe-list list-of-ingredients="$ctrl.listOfIngredients" list-of-items="$ctrl.listOfItems"></recipe-list>
  
`,
  controller: ["Service", "$location", function (Service, $location) {
    const vm = this;
            //concatenate?
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