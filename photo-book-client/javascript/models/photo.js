class Photo {
    constructor(data) {
        this.id = data.id
        this.imgur_link = data.imgur_link
        this.info = data.info
        Photo.all.push(this)
    }

    static all = []

    template() {
        let img = this
        return `
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div>
        <h6>${img.info}</h6>
            <img class="img-thumbnail" src="${img.imgur_link}" alt="">
        </div>
        <div>
        <button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#imgModal">View Comments</button>
        </div>
        <br>
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