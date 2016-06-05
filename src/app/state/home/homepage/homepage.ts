import {Post} from "../../../model/post";
import {YuaPostService} from "../../../service/YuaPostService";
import {IRootScopeService} from "../../../interface/Yua/IRootScopeService";

export class HomepageController {
    public posts: Post[];

    /** @ngInject */
    constructor(private $rootScope: IRootScopeService, private $_YuaPost: YuaPostService) {
        $rootScope.$watchCollection('$_YuaPost.isReady', (isReady: boolean) => {
            if (isReady) {
                this.getPage(1);
            }
        });
    }

    getPage(page: number, perPage: number = 10) {
        let list = this.$_YuaPost.postNameOrderIndex.slice((page - 1) * perPage, (page - 1) * perPage + perPage);

        this.posts = [];
        for (let id of list) {
            let post = this.$_YuaPost.posts[id];
            if (!post.isSynced) {
                this.$_YuaPost.syncPost(post);
            }
            this.posts.push(post);
        }
    }
}
