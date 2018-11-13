"use strict";

const recipeList = {
    templateUrl: "components/recipeList.html",
    bindings: {
        listOfItems: "<",
        listOfIngredients: "<"
    },
    controller: ["Service", function (Service) {
        const vm = this;
        vm.add = (list) => {
            Service.addFavorite(list);
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