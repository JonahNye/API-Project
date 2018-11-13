"use strict";

const favoritesPage = {
  template: `
  <h3>Favorites</h3>
  <section id="main-favorite">
    <section id="favorite" ng-repeat="favorite in $ctrl.favoritesList track by $index">
        <i id="delete-btn" class="fa fa-times" ng-click="$ctrl.remove($index)"></i>
        <p class="favorite-info"> Diet: {{ favorite.recipe.dietLabels[0] }} </p>
        <p class="favorite-info"> Servings: {{ favorite.recipe.yield }} </p>
        <p class="favorite-info"> Link to recipe: {{ favorite.recipe.url }} </p>
        <img id="favorite-image" src="{{ favorite.recipe.image }}">
    </section>
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