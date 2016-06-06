import {Post} from "../../../model/post";
import {EnvConstants} from "../../../EnvConstants";
import IHttpService = angular.IHttpService;
import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;

export class AssistanceController {
    public post: Post;

    /** @ngInject */
    constructor(private $http: IHttpService, private marked: any) {
        this.$http.get(`https://raw.githubusercontent.com/${EnvConstants.GITHUB_REPO_NAME}/master/assistance.md`)
            .then((thenRsp: IHttpPromiseCallbackArg<any>): any => {
                let post = new Post('assistance', null);
                post.content = thenRsp.data;
                let i = post.content.search(/^---$/m);
                if (i !== -1) {
                    let header = post.content.substring(0, i);

                    let mTitle = header.match(/title:(.*)/);
                    post.title = mTitle ? mTitle[1] : null;

                    let mDate = header.match(/date:(.*)/);
                    let mTime = header.match(/time:(.*)/);
                    post.time = mDate ? mDate[1] : (mTime ? mTime[1] : null);

                    post.content = post.content.substring(i + 3).trim();
                }

                post.content = post.content.replace(/!\[(.*)]\((.*)\)/g, (match: string,
                                                                          title: string,
                                                                          name: string) => {
                    if (name.indexOf('http://') === -1) {
                        return `![${title}](https://raw.githubusercontent.com/${EnvConstants.GITHUB_REPO_NAME}/master/${post.path}/${name})`;
                    }

                    return match;
                });

                post.content = this.marked(post.content);
                post.isSynced = true;

                this.post = post;
            });
    }
}
