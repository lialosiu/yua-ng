import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;
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
    constructor(private $http: angular.IHttpService, private envConstants: any, private $log: angular.ILogService) {
        this.title = 'Lialosiu\'s Yua';
        this.desc = 'a yua blog';
        this.masterName = 'Lialosiu';
        this.masterAvatarUrl = 'https://avatars.githubusercontent.com/u/1682158?v=3';
        this.masterGithubLink = 'https://github.com/lialosiu';
        this.masterGooglePlusLink = 'https://plus.google.com/+WakatatsuRyou';
        this.masterTwitterLink = 'https://twitter.com/lialosiu';

        this.copyrightStartYear = '2010';
        this.copyrightEndYear = moment(new Date()).format('YYYY');

        this.getInfo();
    }

    getInfo() {
        this.$http.get(this.envConstants.GITHUB_REPO_API).then((thenRsp: IHttpPromiseCallbackArg<any>): any => {
            this.$log.debug(thenRsp);
        })
    }
}
