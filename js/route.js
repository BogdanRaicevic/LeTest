document.getElementById("row").style.display = "none";

function otvori(){
    document.getElementById("row").style.display = "flex";
}
var myapp = angular.module('myapp', ["ui.router"])
    myapp.config(function($stateProvider){
    $stateProvider
        .state('home', {   
            url: "sklilset", 
            templateUrl:'templates/skillset.html'
            
        })

    
        .state('resume', {
            url: "/resume",
            templateUrl: 'templates/treciparametar.html',
//            views: {
//                "viewA": {
//                    template: "resume.viewA"
//                },
//                "viewB": {
//                    template: "resume.viewB"
//                }
//            }
        })
    
        
        .state('resume.skillset', {
            url: "/skillset",
            templateUrl: 'templates/skillset.html',
            
        })
//        .state('resume-child',{
//            
//        })
      
    
        .state('resumeNew', {
            url: '/new?resimeID&param1&param2&param3',
            controller: function($scope, $stateParams) {                             
                $scope.resimeID = $stateParams.resimeID;
                $scope.param1 = $stateParams.param1;
                $scope.param2 = $stateParams.param2;
                $scope.param3 = $stateParams.param3;
                
                alert("proradi "+$scope.resimeID);
//                switch(){
//                    case $scope.resimeID:
//                        alert("pro "+$scope.resimeID)
//                        break;
//                    default:
//                        break;
//                }
            },
            
//            views: {
//                    "viewA": {                        
//                        template: "<h1>Proba Uspela</h1>"
//                    },
//                    "viewB": {
//                        template: "vrati mi nesto"
//                    }
//                },
            
        })
    
    
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
    