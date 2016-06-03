import {YuaInfoService} from "../../service/YuaInfoService";
import {YuaPostService} from "../../service/YuaPostService";

export interface IRootScopeService extends angular.IRootScopeService {
    $_YuaInfo: YuaInfoService;
    $_YuaPost: YuaPostService;
}