"use strict";

const recipeList = {
    templateUrl: "components/recipeList.html",
    bindings: {
        listOfItems: "<"
    }


}


angular
   .module("App")
   .component("recipeList", recipeList);