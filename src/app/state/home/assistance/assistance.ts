import {Post} from "../../../model/post";
import {YuaPostService} from "../../../service/YuaPostService";
import IRootScopeService = angular.IRootScopeService;

export class AssistanceController {
    public post: Post;

    /** @ngInject */
    constructor(private $rootScope: IRootScopeService, private $_YuaPost: YuaPostService) {
        $rootScope.$watchCollection('$_YuaPost.isReady', (isReady: boolean) => {
            if (isReady) {
                this.post = $_YuaPost.posts['assistance'];
                if (!this.post.isSynced) {
                    this.$_YuaPost.syncPost(this.post);
                }
            }
        });
    }
}
