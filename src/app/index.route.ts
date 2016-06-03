import {HomepageController} from "./state/home/homepage/homepage";

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
                    templateUrl: 'app/state/home/homepage/homepage.html',
                    controller: HomepageController,
                    controllerAs: 'ctrl'
                }
            }
        }
    );

    $urlRouterProvider.otherwise('/');
}
