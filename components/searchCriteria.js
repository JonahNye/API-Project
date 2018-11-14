 "use strict";

const searchCriteria = {
  templateUrl: "components/searchCriteria.html",
  controller: ["Service", "$location", function (Service, $location) {
    const vm = this;
    vm.listOfItems;
    vm.search = (recipe, healthy, restrictions) => {
      Service.searchRecipe(recipe, healthy, restrictions).then((response) => {
        // console.log(response);
        // vm.listOfItems = response;
        $location.path("/recipeList");
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