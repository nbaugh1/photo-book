class Photo {

    constructor(data) {
        this.id = data.id
        this.imgur_link = data.imgur_link
        this.info = data.info
        Photo.all.push(this)
    }

    static all = []

    

    template() {
        let img = this;
        return`
            <div class="col-lg-3 col-md-4 col-6">
                <div class="row" class="d-block mb-4 h-100">
                    <img class="img-fluid img-thumbnail" src="${img.imgur_link}" alt="" id="${img.id}" onClick="showPhoto(this)">
                </div>
            </div>
        `
    }

    comments() {
        let comments = []
        comments = Comment.all.filter(comment => comment.photo_id === this.id)
        return comments
    }

    display() {
        let photo = this;
        document.querySelector("div.gallery").innerHTML += this.template(photo);
    }

    static renderAll() {
        Photo.all.forEach(photo => {
            photo.display();
        })
    }
}