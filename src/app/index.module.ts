/// <reference path="../../typings/index.d.ts" />

import {config} from "./index.config";
import {routerConfig} from "./index.route";
import {runBlock} from "./index.run";
import {yuaPost} from "./directive/yua-post/yua-post.directive";
import {YuaInfoService} from "./service/YuaInfoService";
import {YuaPostService} from "./service/YuaPostService";

module yuaNg {
    'use strict';

    angular.module('yuaNg', ['ngAnimate',
        'ngCookies',
        'ngSanitize',
        'ngMessages',
        'ngAria',
        'restangular',
        'ui.router',
        'ngMaterial',
        'toastr',
        'ab-base64',
        'hc.marked'
    ])
        .config(config)
        .config(routerConfig)
        .run(runBlock)
        .service('$_YuaInfo', YuaInfoService)
        .service('$_YuaPost', YuaPostService)
        .directive('yuaPost', yuaPost)
    ;
}
