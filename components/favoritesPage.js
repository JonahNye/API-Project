"use strict";

const favoritesPage = {
  template: `
    <section >
        <p ng-repeat="favorite in $ctrl.favoritesList"> {{ favorite.title }} </p>
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