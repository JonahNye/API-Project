"use strict";

const favoritesPage = {
  template: `
    <section ng-repeat="favorite in $ctrl.favoritesList track by $index">
        <p> Diet: {{ favorite.recipe.dietLabels[0] }} </p>
        <p> Servings: {{ favorite.recipe.yield }} </p>
        <p> Link to recipe: {{ favorite.recipe.url }} </p>
        <i class="fas fa-minus" ng-click="$ctrl.remove($index)"></i>
    </section>
  `,
  controller: ["Service", function (Service) {
    const vm = this;
    vm.favoritesList = Service.getFavorites();
    vm.remove = (index) => {
      Service.removeFavorite(index);
    };


  }]
}

angular
  .module("App")
  .component("favoritesPage", favoritesPage)