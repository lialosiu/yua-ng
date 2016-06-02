/// <reference path="../../typings/index.d.ts" />

import {config} from "./index.config";
import {routerConfig} from "./index.route";
import {runBlock} from "./index.run";
import {yuaPost} from "./directive/yua-post/yua-post.directive";
import {YuaInfoService} from "./service/YuaInfoService";
import {envConstants} from "./envConstants";

// declare var malarkey:any;
// declare var moment:moment.MomentStatic;

module yuaNg {
    'use strict';

    angular.module('yuaNg',
        ['ngAnimate',
            'ngCookies',
            'ngSanitize',
            'ngMessages',
            'ngAria',
            'restangular',
            'ui.router',
            'ngMaterial',
            'toastr'])
        .constant('envConstants', envConstants)
        // .constant('moment', moment)
        .config(config)
        .config(routerConfig)
        .run(runBlock)
        .service('$_YuaInfo', YuaInfoService)
        // .service('webDevTec', WebDevTecService)
        // .controller('MainController', MainController)
        // .directive('acmeNavbar', acmeNavbar)
        .directive('yuaPost', yuaPost)
    ;
}
