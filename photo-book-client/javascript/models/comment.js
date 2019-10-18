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
                <p>${this.content}</p>
            </div>
            `
    }

    

    displayNewComment() {
        document.querySelector("div.comments").innerHTML += this.template();
    }
    
    // static renderComments() {
    //     let comments = Comment.all
    //     comments.forEach(comment=> {
    //         comment.display();
    //     });
    // }
}