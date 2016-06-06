import {YuaInfoService} from "./service/YuaInfoService";
import {IRootScopeService} from "./interface/Yua/IRootScopeService";
import {YuaPostService} from "./service/YuaPostService";
import IStateService = angular.ui.IStateService;

/** @ngInject */
export function runBlock($log: angular.ILogService,
                         $rootScope: IRootScopeService,
                         $_YuaInfo: YuaInfoService,
                         $_YuaPost: YuaPostService,
                         $state: IStateService) {
    $log.debug('runBlock end');

    $rootScope.$_YuaInfo = $_YuaInfo;
    $rootScope.$_YuaPost = $_YuaPost;
    $rootScope.$state = $state;
}
