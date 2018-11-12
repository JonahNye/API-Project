"use strict";

function Service($http) {
  const self = this;
  self.searchRecipe = (recipe) => {
    return $http({
      method: "GET",
      url: `https://api.edamam.com/search?q=${recipe}&app_id=852db20b&app_key=d6c63e84b8e3616fcc717a2217f25a5e`
    }).then((data) => {
        return data;
    })
  }

}

angular
  .module("App")
  .service("Service", Service)