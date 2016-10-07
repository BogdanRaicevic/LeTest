// document.getElementById("row").style.display = "none";
// var states = ['resume.skillset','resume.workhistory','resume.treciparametar'];
// function otvori(){
//     document.getElementById("row").style.display = "flex";
// }
var myapp = angular.module('myapp', ["ui.router"])
myapp.run(function($rootScope) {
    $rootScope.personalInfo = false;
});
    myapp.config(function($stateProvider){

        
    $stateProvider
        .state('home', {   
            url: "/", 
            templateUrl:'templates/resume.html',
            controller: ['$scope', function($scope) {

                $scope.showPersonalInfo = function () {
                    // $scope.personalInfo = 'Ovo je iz stejta';
                    $scope.personalInfo = !$scope.personalInfo;
                };
            }]
            
        })

    
        .state('product', {
            url: "/product/:productID",
            templateUrl: 'templates/singleProductPage.html',
            controller: ['$state', '$scope', function($state, $scope) {
                    var products = [
                        {
                            id: 1,
                            title: 'Proizvod 1',
                            description: 'Ovo je opis za prozivod 1'
                        },
                        {
                            id: 56,
                            title: 'Proizvod 2',
                            description: 'Ovo je opis za prozivod 2'
                        },
                        {
                            id: 59,
                            title: 'Proizvod 3',
                            description: 'Ovo je opis za prozivod 3'
                        },
                        {
                            id: 560,
                            title: 'Proizvod 4',
                            description: 'Ovo je opis za prozivod 4'
                        }
                    ];



                    getById = function(idProizvoda) {
                        products.forEach(function(elem) {
                            if (elem.id = idProizvoda) {
                                return elem;
                            }
                        })
                    };
                    product = getById($state.params.productID);
                    product.id, product.title, product.description
                    switch()
                // Procitaj productID iz state-a
                // Napravi poziv ka web servisu da bi izvukao informacije o proizvodu (salji productID)
                // Prihvati odgovor od servisa
                // Sacuvaj informacije koje si dobio u neki scope objekat - npr product = { 'title': 'Kacket 72', 'description' : 'Ovo je opis za kacket'}
                // kraj

                // var states = ['skillset','workhistory','treciparametar'],
                //     param;
                // param = $state.params.contentType;
                // switch(param){
                //     case states[0]:
                //         $scope.content = 'Ovo je stranica za skillset';
                //         break;
                //     case states[1]:
                //         $scope.content = 'Ovo je stranica za WORk HISTORY';
                //         break;
                //     case states[2]:
                //         $scope.content = 'Ovo je stranica za TRECI';
                //         break;
                //     default:
                //         $scope.content = 'Niste prosledili parametar';
                //         break;
                // }
            }]
//            views: {
//                "viewA": {
//                    template: "resume.viewA"
//                },
//                "viewB": {
//                    template: "resume.viewB"
//                }
//            }
        })
    
        
       .state('resume.products', {
           url: "/products",
           // templateUrl: 'templates/workhistory.html',
           views: {
                'menu': {
                    templateUrl: 'templates/menu.html'
                },
                'content': {
                    templateUrl: 'templates/workhistory.html'
                }
           }
       })
       .state('resume.products.rostilj', {
           url: "/products/rostilj",
           views: {
                'menu@resume': {
                    templateUrl: 'templates/treciparametar.html'
                },
                'content@products': {
                    templateUrl: 'templates/treciparametar.html'
                }
           }
       })
//        .state('resume-child',{
//            
//        })
    
//        .state('resumeNew',{
//            controller: function($scope, $stateParams) {                             
//                $scope.resimeID = $stateParams.resimeID;
//                $scope.param1 = $stateParams.param1;
//                $scope.param2 = $stateParams.param2;
//                $scope.param3 = $stateParams.param3;
//              },
//            views: {
//              'v1': {
//                templateUrl: 'templates/skillset.html',
////                controller: function($scope, $stateParams) {       $scope.resimeID = $stateParams.resimeID;
////                $scope.param1 = $stateParams.param1;
////                alert($scope.resimeID);
//                
//              },
//              'v2': {
//                templateUrl: 'templates/workhistory.html',
//                controller: function($scope){$scope.param2;}
//              },
//              'v3': {
//                templateUrl: 'templates/treciparametar.html',
//                controller: function($scope){$scope.param3;}
//              }
//            }
//        
//        })
      
    
//         .state('resumeNew', {
//             url: '/new?resimeID&param1&param2&param3',
//             controller: function($scope, $stateParams) {   
//                 $scope.resimeID = $stateParams.resimeID;
//                 $scope.param1 = $stateParams.param1;
//                 $scope.param2 = $stateParams.param2;
//                 $scope.param3 = $stateParams.param3;
                
              
                
//                 alert("proradi "+$scope.resimeID);
                
                
//                 // switch($scope.resimeID){
//                 //     case states[0]:
//                 //         alert("pro "+$scope.resimeID);
//                 //         break;
//                 //     case states[1]:
//                 //         alert("pro "+$scope.resimeID);
//                 //         break;
//                 //     case states[2]:
//                 //         alert("pro "+$scope.resimeID);
//                 //         break;
//                 //     default:
//                 //         console.log("usli u switch");
//                 //         break;
//                 // }
//             },
//             views: {
//                templateUrl: 'templates/workhistory.html'
//                 // '': { templateUrl: 'templates/workhistory.html' }
//             }
            
// //            views: {
// //                    "viewA": {                        
// //                        template: "<h1>Proba Uspela</h1>"
// //                    },
// //                    "viewB": {
// //                        template: "vrati mi nesto"
// //                    }
// //                },
            
//         })
    
    
        .state('portfolio', {
            url: "/portfolio",
            views: {
                "viewA": {
                    template: "portfolio.viewA"
                },
                "viewB": {
                    template: "portfolio.viewB"
                }
            }
        })
    
        
})
    