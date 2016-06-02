import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;
import IPromise = angular.IPromise;
import {IV0Response} from "../interface/YuriCore/API/IV0Response";

export class HttpService {
    defaultSuccessCallback = (successRsp: IHttpPromiseCallbackArg<IV0Response<any>>): any => {
        let apiRsp = successRsp.data;
        if (apiRsp.level === 'success') {
            this.toastr.success(apiRsp.message);
        } else {
            this.toastr.warning(apiRsp.message);
            this.$mdDialog.show(this.$mdDialog
                .alert()
                .title('提示')
                .textContent(apiRsp.message)
                .ok('确认')
            );
        }
        return apiRsp;
    };

    defaultFailCallback = (failResponse: IHttpPromiseCallbackArg<IV0Response<any>>): any => {
        let apiRsp = failResponse.data;
        let message = '请求数据失败...';

        if (failResponse.status > 0 && apiRsp.message)
            message = apiRsp.message;

        this.$mdDialog.show(this.$mdDialog
            .alert()
            .title('提示')
            .textContent(message)
            .ok('确认')
        );

        return apiRsp;
    };

    /** @ngInject */
    constructor(private envConstant: any,
                private toastr: angular.toastr.IToastrService,
                private $mdDialog: angular.material.IDialogService,
                private $http: angular.IHttpService,
                private $log: angular.ILogService) {
    }

    buildUrl(url: string, uriParams?: any, params?: any) {
        let afterUrl = url;

        if (uriParams != null) {
            for (let key in uriParams) {
                if (!uriParams.hasOwnProperty(key)) continue;
                let value = uriParams[key];
                afterUrl = afterUrl.replace(`{${key}}`, value);
            }
        }

        if (params != null) {
            for (let key in params) {
                if (!params.hasOwnProperty(key)) continue;
                let value = params[key];
                if (afterUrl.indexOf('?') === -1) {
                    afterUrl = afterUrl + '?' + key + '=' + value;
                } else {
                    afterUrl = afterUrl + '&' + key + '=' + value;
                }
            }
        }

        if (afterUrl.indexOf('://') < 0)
            afterUrl = this.envConstant.CORE_API_ROOT + afterUrl;

        return afterUrl;
    };

    get(url: any,
        successCallback?: (successRsp: IHttpPromiseCallbackArg<IV0Response<any>>) => any,
        failCallback?: (FailRsp: IHttpPromiseCallbackArg<IV0Response<any>>) => any): IPromise<any> {
        if (typeof url === 'object') {
            url = this.buildUrl(url.url, url.uriParams, url.params);
        } else {
            url = this.buildUrl(url);
        }

        if (!successCallback) {
            successCallback = this.defaultSuccessCallback;
        }
        if (!failCallback) {
            failCallback = this.defaultFailCallback;
        }

        return this.$http.get(url).then(successCallback).catch(failCallback);
    };

    post(url: any, data: any,
         successCallback?: (successRsp: IHttpPromiseCallbackArg<IV0Response<any>>) => any,
         failCallback?: (successRsp: IHttpPromiseCallbackArg<IV0Response<any>>) => any): IPromise<any> {
        if (typeof url === 'object') {
            url = this.buildUrl(url.url, url.uriParams, url.params);
        } else {
            url = this.buildUrl(url);
        }

        if (!successCallback) {
            successCallback = this.defaultSuccessCallback;
        }
        if (!failCallback) {
            failCallback = this.defaultFailCallback;
        }

        return this.$http.post(url, data).then(successCallback).catch(failCallback);
    };
}
