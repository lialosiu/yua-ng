import {YuaInfoService} from "../../service/YuaInfoService";

export interface IRootScopeService extends angular.IRootScopeService {
    $_YuaInfo: YuaInfoService;
}