class Photo {
    constructor(data) {
        this.id = data.id
        this.imgur_link = data.imgur_link
        this.info = data.info
        Photo.all.push(this)
    }

    static all = []

    template() {
        return `
        <div class="col-lg-3 col-md-4 col-xs-6">
            <a href="#" data-image-id="" data-toggle="modal" data-title=""
                data-image="${this.imgur_link}" data-target="#image-gallery">
                <img class="img-thumbnail" src="${this.imgur_link}" alt="Another alt text">
                <p>${this.info}</p>
            </a>
        </div>
        `
    }

    display() {
        document.getElementsByClassName("gallery")[0].innerHTML += this.template();
    }

    static renderAll() {
        Photo.all.forEach(photo => {
            photo.display()
        })
    }
}