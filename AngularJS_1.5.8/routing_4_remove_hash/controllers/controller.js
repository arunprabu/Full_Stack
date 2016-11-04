
app.controller("HeaderController", function($scope){
  $scope.logoTitle = "MyShopping";
  console.log($scope.logoTitle);
 
});

app.controller("HomeController", function($scope){
  $scope.page = "Home Page";
   $scope.loadData = function(){
    console.log("Req received")
    $http.get("person.json").then(function (response) {
        console.log(response);
        $scope.persons = response.data;
    });
  }
});

app.controller("ProductsController", function($scope){
  $scope.page = "Products Page";
});

app.controller("CartController", function($scope){
  $scope.page = "Cart Page";
});