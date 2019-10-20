class Photo {

    constructor(data) {
        this.id = data.id
        this.imgur_link = data.imgur_link
        this.info = data.info
        Photo.all.push(this)
    }

    static all = []

    

    template() {
        return`
            <div class="col-lg-3 col-md-4 col-6">
                <div class="row" class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="${this.imgur_link}" alt="" id="${this.id}" onClick=""/>
                </div>
            </div>
        `
    }

    comments() {
        let comments = []
        comments = Comment.all.filter(comment => comment.photo_id === this.id)
        return comments
    }

    viewPanelTemplate() {
        return `
                <div class="text-center card mb-3">
                    <img src="${this.imgur_link}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title" id="photo-id"></h5>
                    <div class="comment-card-text">
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 m6 l6">
                        <form id="comment-form">
                        <label for="commenter">Name:</label>
                            <div class="input-field">
                                <input type="text" name="commenter" id="commenter">
                            </div>
                        <label for="content">Comment:</label>
                            <div class="input-field">
                                <textarea name="content" id="content" cols="60" rows="8"></textarea>
                            </div>
                        <br>
                        <div>
                            <input type="submit" value="Add Comment" class="btn-primary" id="">
                        </div>
                        <br>
                            </form>
                        </div>
                </div>
                `
    }

    display() {
        document.querySelector("div.gallery").innerHTML += this.template();
    }

    static renderAll() {
        Photo.all.forEach(photo => {
            photo.display();
        })
    }
}