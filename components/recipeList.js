"use strict";

const recipeList = {
    templateUrl: "components/recipeList.html",
    bindings: {
        listOfItems: "<"
    },
    controller: ["Service", function (Service) {
        const vm = this;
        vm.add = (newFavorite) => {
            Service.addFavorite(newFavorite);
        };

    }]
}

angular
    .module("App")
    .component("recipeList", recipeList);