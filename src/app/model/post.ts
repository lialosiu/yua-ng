export class Post {
    public id: string;
    public path: string;
    public title: string;
    public time: string;
    public content: string;
    public isSynced: boolean;

    constructor(id: string, path: string) {
        this.id       = id;
        this.path     = path;
        this.isSynced = false;
    }
}
