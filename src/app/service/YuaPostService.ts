import IHttpPromiseCallbackArg = angular.IHttpPromiseCallbackArg;
import {EnvConstants} from "./../EnvConstants";
import {IGithubContent} from "../interface/Github/IGithubContent";
import Immutable = require('immutable');
import List = Immutable.List;
import Map = Immutable.Map;
import {Post} from "../model/post";
import IPromise = angular.IPromise;

export class YuaPostService {
    public postNameOrderIndex: string[];
    public posts: Post[];

    /** @ngInject */
    constructor(private $http: angular.IHttpService,
                private $log: angular.ILogService,
                private marked: any) {
        this.postNameOrderIndex = [];
        this.posts = [];
        this.getPostList();
    }

    getPostList() {
        this.$http.get(`https://api.github.com/repos/${EnvConstants.GITHUB_REPO_NAME}/contents/posts`)
            .then((thenRsp: IHttpPromiseCallbackArg<any>): any => {
                let _contents: IGithubContent[] = thenRsp.data;
                let contents: List<Map> = Immutable.fromJS(_contents);
                contents = contents.sort((a: Map, b: Map) => {
                    if (a.get('name') < b.get('name')) return 1;
                    else if (a.get('name') > b.get('name')) return -1;
                    else return 0;
                }).toList();
                contents.forEach((v: Map, k: number) => {
                    let post = new Post(v.get('sha'), v.get('path'));
                    this.postNameOrderIndex.push(post.id);
                    this.posts[post.id] = post;
                    if (k < 10) {
                        this.syncPost(post);
                    }
                });
            });
    }

    syncPost(post: Post) {
        return this.$http.get(`https://raw.githubusercontent.com/${EnvConstants.GITHUB_REPO_NAME}/master/${post.path}/content.md`)
            .then((thenRsp: IHttpPromiseCallbackArg<any>): any => {
                post.content = thenRsp.data;
                let i = post.content.search(/^---$/m);
                if (i !== -1) {
                    let header = post.content.substring(0, i);

                    let mTitle = header.match(/title:(.*)/);
                    post.title = mTitle ? mTitle[1] : null;

                    let mTime = header.match(/time:(.*)/);
                    post.time = mTime ? mTime[1] : null;

                    post.content = post.content.substring(i + 3).trim();
                }

                post.content = post.content.replace(/!\[(.*)]\((.*)\)/g, (match: string,
                                                                          title: string,
                                                                          name: string) => {
                    if (name.indexOf('http://') === -1)
                        return `![${title}](https://raw.githubusercontent.com/${EnvConstants.GITHUB_REPO_NAME}/master/${post.path}/${name})`;

                    return match;
                });

                post.content = this.marked(post.content);
                post.isSynced = true;
            });
    }
}
