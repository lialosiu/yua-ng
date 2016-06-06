import {HomepageController} from "./state/home/homepage/homepage";
import {AssistanceController} from "./state/home/assistance/assistance";

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
        }).state('home.assistance', {
            url: '/assistance',
            views: {
                'home.body': {
                    templateUrl: 'app/state/home/assistance/assistance.html',
                    controller: AssistanceController,
                    controllerAs: 'ctrl'
                }
            }
        }
    );

    $urlRouterProvider.otherwise('/');
}
