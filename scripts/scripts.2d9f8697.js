"use strict";angular.module("cartApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/cart",{templateUrl:"views/cart.html",controller:"CartCtrl"}).otherwise({redirectTo:"/cart"})}]),angular.module("cartApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("cartApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("cartApp").controller("CartCtrl",["$scope","$modal","products",function(a,b,c){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.showDialog=!1,a.cart=[],a.add=function(b){var d=c.random();a.cart.push(d)},a.$watchCollection("cart",function(){a.totalCost=a.cart.reduce(function(a,b){return a+parseFloat(b.price)},0)})}]),angular.module("cartApp").directive("quagga",function(){var a={inputStream:{type:"LiveStream",constraints:{width:640,height:480,facing:"environment"}},locator:{patchSize:"medium",halfSample:!0},numOfWorkers:4,decoder:{readers:["ean_reader"]},locate:!0};return Quagga.onProcessed(function(a){var b=Quagga.canvas.ctx.overlay,c=Quagga.canvas.dom.overlay;a&&(a.boxes&&(b.clearRect(0,0,parseInt(c.getAttribute("width")),parseInt(c.getAttribute("height"))),a.boxes.filter(function(b){return b!==a.box}).forEach(function(a){Quagga.ImageDebug.drawPath(a,{x:0,y:1},b,{color:"green",lineWidth:2})})),a.box&&Quagga.ImageDebug.drawPath(a.box,{x:0,y:1},b,{color:"#00F",lineWidth:2}),a.codeResult&&a.codeResult.code&&Quagga.ImageDebug.drawPath(a.line,{x:"x",y:"y"},b,{color:"red",lineWidth:3}))}),Quagga.onDetected(console.log),{template:'<div id="interactive" class="viewport"></div>',restrict:"E",scope:{code:"="},link:function(b,c,d){Quagga.init(a,function(){Quagga.start()})}}}),angular.module("cartApp").directive("cart",function(){return{templateUrl:"views/cart-list.html",restrict:"E",scope:{items:"="},link:function(a,b,c){}}}),angular.module("cartApp").factory("products",function(){var a=[{productCode:"7290012132223",price:12.99,name:"Product #1"},{productCode:"7296073020462",price:2.99,name:"Product #2"},{productCode:"7296073130499",price:1.99,name:"Product #3"},{productCode:"7296073153337",price:3.99,name:"Product #4"},{productCode:"7296073202479",price:7.99,name:"Product #5"}];return{random:function(){return a[Math.floor(Math.random()*a.length)]}}});