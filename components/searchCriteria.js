 "use strict";

const searchCriteria = {
    template: `
    <input type="text" placeholder="recipe" ng-model="$ctrl.recipe">
    <button ng-click="$ctrl.search($ctrl.recipe);">Search A Recipe</button>
    `,
    controller: ["Service", function(Service) {
      const vm = this;
      vm.search = (recipe) => {
        Service.searchRecipe(recipe).then((data) => {
          console.log(data);
        })
      }
    }]

}

angular
  .module("App")
  .component("searchCriteria", searchCriteria);