import {YuaInfoService} from "./service/YuaInfoService";
import {IRootScopeService} from "./interface/Yua/IRootScopeService";

/** @ngInject */
export function runBlock($log: angular.ILogService, $rootScope: IRootScopeService, $_YuaInfo: YuaInfoService) {
    $log.debug('runBlock end');

    $rootScope.$_YuaInfo = $_YuaInfo;
}
