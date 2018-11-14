"use strict";

const recipeList = {
    templateUrl: "components/recipeList.html",
    // bindings: {
    //     listOfItems: "<",
    //     listOfIngredients: "<"
    // },
    controller: ["Service", function (Service) {
        const vm = this;
        vm.listOfItems = Service.getResults().lists;
        vm.ingredients = Service.getResults().ingredients;
        vm.add = (list) => {
            Service.addFavorite(list);
        };
        // vm.more = false
        // vm.expand = (index) => {
        //     vm.more = true
        // }
        // vm.collapse = () => {
        //     vm.more = false
        // }

    }]
}


angular
    .module("App")
    .component("recipeList", recipeList);