export class Post {
    public id: string;
    public path: string;
    public fileName: string;
    public title: string;
    public time: string;
    public content: string;
    public isSynced: boolean;

    constructor(id: string, path: string, fileName: string = 'content.md') {
        this.id = id;
        this.path = path;
        this.fileName = fileName;
        this.isSynced = false;
    }
}
