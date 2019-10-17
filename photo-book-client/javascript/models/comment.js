class Comment {
    static all = []
    constructor(commenter, content) {
        this.commenter = commenter;
        this.content = content;
        Comment.all.push(this);
    }

    template() {
        let photo = Api.findPhoto(photo)
        return `
            <div>
                <p>${this.commenter} says: ${this.content}</p>
            </div>
            `
    }

    display() {
        document.getElementById("comment-card-text").innerHtml += this.template()
    }
}