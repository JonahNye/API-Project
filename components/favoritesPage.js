"use strict";

const favoritesPage = {
  template: `
    <section ng-repeat="favorite in $ctrl.favoritesList">
        <p> Diet: {{ favorite.recipe.dietLabels[0] }} </p>
        <p> Total time: {{ favorite.recipe.totalTime }} </p>
        <p> Link to recipe: {{ favorite.recipe.url }} </p>
    </section>
  `,
  controller: ["Service", function (Service) {
    const vm = this;
    vm.favoritesList = Service.getFavorites();
  }]
}

angular
  .module("App")
  .component("favoritesPage", favoritesPage)