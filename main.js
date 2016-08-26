angular.module('magicCards', ['ngRoute']);


angular.module('magicCards')
    .config(Router);

Router.$inject = ['$routeProvider'];

function Router ($routeProvider){


        .otherwise({
            redirectTo : '/'
        });



    $routeProvider
        .when('/', {
            templateUrl : '/templates/home.html',
        })
        .when('/origins', {
            templateUrl : '/templates/form.html',
            controller  : 'magicForm as mCtrl'

        })
        .when('/menu', {
            templateUrl : '/templates/gallery.html',
            controller : 'magicGallery as gCtrl',
        });


}
/////////////////////////////////////////////////////
angular.module('magicCards',[])
    .controller("magicForm",magicController)
    .controller("magicGallery",galleryController)
    .factory("magicFactory",cardFactory);

magicController.$inject=["magicFactory"];
galleryController.$inject=["magicFactory"];


//  //FORM
function magicController(magicFactory){
    console.log("shits working");
    var mCtrl= this;
    mCtrl.cards = magicFactory.cardList;
    mCtrl.addCards = function(){
        mCtrl.cards.push(mCtrl.newCard);
        mCtrl.newCard={};

    }
}



//  //GALLERY
function galleryController(magicFactory){
    console.log("It works gallery")
    var gCtrl= this;
    gCtrl.cards = magicFactory.cardList;
}


//  //FACTORY
function cardFactory(){
    cardList=[
        {
            name:"Beyonce",
            superPower:"Glow",
            power:10,
            toughness:10,
            art:"http://img.etonline.com/media/video/2016/06/24244938/et_BeyonceSneeze_1280.jpg",
        },
        {
            name:"Adam Sandler",
            superPower:"funny",
            power:6,
            toughness:2,
            art:"http://gazettereview.com/wp-content/uploads/2016/05/adam-sandler-net-worth.jpg",
        },
        {
            name:"N'Sync",
            superPower:"dirty Pop",
            power:12,
            toughness:12,
            art:"http://www.awesomelyluvvie.com/wp-content/uploads/2013/08/NSYNC-lycra-shirts.jpg",
        }
    ];
    return {
        cardList : cardList
    }
}
