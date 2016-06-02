export function yuaPost() {
    return {
        restrict: 'E',
        scope: {
            title: '@',
            content: '@',
            time: '@'
        },
        templateUrl: 'app/directive/yua-post/yua-post.html',
        controller: YuaPostController,
        controllerAs: 'ctrl',
        bindToController: true
    };
}

class YuaPostController {

}
