class Comment {
    static all = []
    constructor(comment) {
        this.commenter = comment.commenter;
        this.content = comment.content;
        this.photo_id = comment.photo_id;
        Comment.all.push(this);
    }


    template() {
        return `
            <div>
                <p><strong>${this.commenter}</strong> says: ${this.content}</p>
            </div>
            `
    }

    displayComments() {
        document.querySelector("div.old-comments").innerHTML += this.template();
    }

    displayNewComment() {
        document.querySelector("div.comments").innerHTML += this.template();
    }
}