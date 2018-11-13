"use strict";

function Service($http) {
  const self = this;
  self.searchRecipe = (recipe) => {
    return $http({
      method: "GET",
      url: `https://api.edamam.com/search?q=${recipe}&app_id=852db20b&app_key=d6c63e84b8e3616fcc717a2217f25a5e`
    }).then((data) => {
      self.lists = data.data.hits;
      for (let i = 0; i < self.lists.length; i++) {
        self.ingredients = self.lists[i].recipe.ingredientLines;
      }
        return self.lists;
    })
  };




  self.favorites = [
      { title: "chicken", ingredients: "chicken"},
      { title: "cheese", ingredients: "cheese"},
      { title: "lasagna", ingredients: "noodles"}
  ];
  self.addFavorite = (newFavorite) => {
    self.favorites.push(angular.copy(newFavorite));
  };
  self.getFavorites = () => {
    return self.favorites;
    // $location.path("/favoritesPage");
  };

  

}

angular
  .module("App")
  .service("Service", Service)