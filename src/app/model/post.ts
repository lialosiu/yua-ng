export class Post {
    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    private _title: string;
    private _content: string;
}