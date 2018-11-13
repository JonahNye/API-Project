 "use strict";

const searchCriteria = {
  template: `
    <button ng-click="$ctrl.goFavorites();">Favorites</button>
    <input type="text" placeholder="recipe" ng-model="$ctrl.recipe">
    <button ng-click="$ctrl.search($ctrl.recipe);">Search A Recipe</button>
    <recipe-list list-of-items="$ctrl.listOfItems"></recipe-list>
    `,
  controller: ["Service", function (Service, $location) {
    const vm = this;
    
    vm.search = (recipe) => {
      Service.searchRecipe(recipe).then((response) => {
        vm.listOfItems = response;
      });
      
    }
    
    vm.goFavorites  = () => {
      $location.path('/favoritesPage');
    }

  }]

}

angular
  .module("App")
  .component("searchCriteria", searchCriteria);