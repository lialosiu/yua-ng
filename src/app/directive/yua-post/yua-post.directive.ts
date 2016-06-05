import IScope = angular.IScope;
import IRootElementService = angular.IRootElementService;

declare var hljs: any;

export function yuaPost() {
    return {
        restrict        : 'E',
        scope           : {
            post: '='
        },
        templateUrl     : 'app/directive/yua-post/yua-post.html',
        controller      : YuaPostController,
        controllerAs    : 'ctrl',
        bindToController: true
    };
}

class YuaPostController {

    /** @ngInject */
    constructor(private $scope: IScope, private $element: IRootElementService) {
        $scope.$watch('ctrl.post.content', (content: string) => {
            $scope.$evalAsync(() => {
                $element.find('.yua-post>.body>.content pre>code').each((i: number, block: Element) => {
                    hljs.highlightBlock(block);
                });
            });
        });
    }
}
