"use strict";

const recipeList = {
    templateUrl: "components/recipeList.html",
    bindings: {
        listOfItems: "<",
        listOfIngredients: "<"
    },
    controller: ["Service", function (Service) {
        const vm = this;
        vm.add = (newFavorite) => {
            Service.addFavorite(newFavorite);
        };
        vm.more = false
        vm.expand = (info) => {
            vm.more = true
        }
        vm.collapse = () => {
            vm.more = false
        }

    }]
}


angular
    .module("App")
    .component("recipeList", recipeList);