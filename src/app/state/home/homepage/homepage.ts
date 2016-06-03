import {Post} from "../../../model/post";
import IHttpService = angular.IHttpService;
import {YuaPostService} from "../../../service/YuaPostService";

export class HomepageController {
    public posts: Post[];

    /** @ngInject */
    constructor(private $_YuaPost: YuaPostService) {
        this.getPage(1);
    }

    getPage(page, perPage = 10) {
        let list = this.$_YuaPost.postNameOrderIndex.slice((page - 1) * perPage, (page - 1) * perPage + perPage);

        this.posts = [];
        for (let id of list) {
            let post = this.$_YuaPost.posts[id];
            if (!post.isSynced)
                this.$_YuaPost.syncPost(post);
            this.posts.push(post);
        }
    }
}
