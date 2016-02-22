<!doctype html>
<html>
  <head>
        <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>
		<link href="main.css" rel="stylesheet">
  </head>
  <body ng-app="myApp">
    <div class="main" ng-controller="MainController">
     <h1>{{ title }} {{ name }}</h1>
	 <div ng-repeat="product in products" class="col-md-6"> 
	 <div class="thumbnail"> 
	 <p class="title">
	 {{ product.name | uppercase}} - {{ product.price | currency:"&#8377;" }}
	 <p class="date">
	 {{ product.pubdate | date}}

	 </p>
	<div class="rating"> 
		<p class="likes" ng-click="plusOne($index)">+{{ product.likes }} </p> 
		<p class="dislikes" ng-click="minusOne($index)">-{{ product.dislikes }} </p> 
		<p class="dislikes" style="background-color:green;" ng-click="minusOne($index)">={{ product.result }} </p> 
	</div>
	 </div>
	 </div>
	 <div class="card"> 
	 <app-info info="book1"></app-info>
	 </div>
	 <div class="card"> 
	 <app-info info="book2"></app-info>
    </div>
    </div>
	
	<!-- Modules -->
    <script src="js/app.js"></script>

    <!-- Controllers -->
    <script src="js/controllers/MainController.js"></script>
	
	 <!-- Directives -->
    <script src="js/directives/appInfo.js"></script>
  </body>
</html>



