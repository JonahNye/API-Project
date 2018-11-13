"use strict";

const recipeList = {
    templateUrl: "components/recipeList.html",
    bindings: {
        listOfItems: "<"
    },
    controller: ["Service", function (Service) {
        const vm = this;
        vm.add = (list) => {
            Service.addFavorite(list);
        };

    }]
}


angular
    .module("App")
    .component("recipeList", recipeList);