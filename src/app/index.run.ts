import {YuaInfoService} from "./service/YuaInfoService";
import {IRootScopeService} from "./interface/Yua/IRootScopeService";
import {YuaPostService} from "./service/YuaPostService";

/** @ngInject */
export function runBlock($log: angular.ILogService, $rootScope: IRootScopeService, $_YuaInfo: YuaInfoService, $_YuaPost: YuaPostService) {
    $log.debug('runBlock end');

    $rootScope.$_YuaInfo = $_YuaInfo;
    $rootScope.$_YuaPost = $_YuaPost;
}
