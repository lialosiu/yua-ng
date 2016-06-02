/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider,
                             $urlRouterProvider: angular.ui.IUrlRouterProvider) {
    $stateProvider
        .state('home', {
            abstract: true,
            views: {
                'root.body': {
                    templateUrl: 'app/state/home/home.html'
                }
            }
        }).state('home.homepage', {
            url: '/',
            views: {
                'home.body': {
                    templateUrl: 'app/state/home/homepage/homepage.html'
                    // controller: 'MainController',
                    // controllerAs: 'main'
                }
            }
        }
    );

    $urlRouterProvider.otherwise('/');
}
