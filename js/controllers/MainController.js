app.controller('MainController', 

function($scope) { 
  $scope.title = 'Top Sellers in Books'; 
  $scope.products = [];

$scope.plusOne = function(index) { 
  $scope.products[index].likes += 1; 
  $scope.products[index].result += 1; 
};
  
$scope.minusOne = function(index){
	$scope.products[index].dislikes+=1;
	$scope.products[index].result -= 1; 
};
$scope.saveBillForm =function(index) {


	document.getElementById('mainContainer').style.opacity = "1";
	document.getElementById('addBillForm').style.top = "0%";
	document.getElementById('addFriendForm').style.visibility = "visible";
	document.getElementById('addBillForm').style.opacity = "0";
	document.getElementById('addBillForm').style.zIndex = "-1";
		
$scope.products.push({
      id: '1',
    desc: $scope.billName, 
    paid: $scope.amount, 
    pubdate: new Date($scope.pubdate), 
    lent: 140 ,
	friends: 0
    });
	$scope.billName=''; 
	$scope.amount='';
console.log($scope.products.length);

};


});