import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;
import {EnvConstants} from "./../EnvConstants";
import {IYuaConf} from "../interface/Yua/IYuaConf";

export class YuaInfoService {
    public title: string;
    public desc: string;
    public masterName: string;
    public masterAvatarUrl: string;
    public masterGithubLink: string;
    public masterGooglePlusLink: string;
    public masterTwitterLink: string;
    public copyrightStartYear: string;
    public copyrightEndYear: string;

    /** @ngInject */
    constructor(private $http: angular.IHttpService,
                private $log: angular.ILogService) {
        this.copyrightStartYear = '2010';
        this.copyrightEndYear = moment(new Date()).format('YYYY');

        this.getInfo();
    }

    getInfo() {
        this.$http.get(`https://raw.githubusercontent.com/${EnvConstants.GITHUB_REPO_NAME}/master/conf.json`)
            .then((thenRsp: IHttpPromiseCallbackArg<any>): any => {
                let conf: IYuaConf = thenRsp.data;
                this.title = conf.SITE_TITLE;
                this.desc = conf.SITE_DESC;
                this.masterName = conf.MASTER_NAME;
                this.masterAvatarUrl = conf.MASTER_AVATAR_URL;
                this.masterGithubLink = conf.MASTER_LINK_GITHUB;
                this.masterGooglePlusLink = conf.MASTER_LINK_GOOGLE_PLUS;
                this.masterTwitterLink = conf.MASTER_LINK_TWITTER;
            });
    }
}

interface IBase64Service {
    decode: (a: string) => string;
    encode: (b: string) => string;
}
