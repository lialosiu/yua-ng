import {YuaInfoService} from "../../service/YuaInfoService";
import {YuaPostService} from "../../service/YuaPostService";
import IStateService = angular.ui.IStateService;

export interface IRootScopeService extends angular.IRootScopeService {
    $_YuaInfo: YuaInfoService;
    $_YuaPost: YuaPostService;
    $state: IStateService;
}