class Photo {
    constructor(data) {
        this.id = data.id
        this.imgur_link = data.imgur_link
        this.info = data.info
        Photo.all.push(this)
    }

    static all = []

    photoStripTemplate() {
        let img = this
        return `
        
        <div class="col-lg-3 col-md-4 col-6">
        <div class="row"
      <a href="#" class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" src="${img.imgur_link}" alt="" onclick="selectPhoto(this)">
          </a>
    </div>
    </div>
        `
    }

    
    
    displayPhotoInStrip() {
        document.getElementsByClassName("image")[0].innerHTML += this.photoStripTemplate();
    }    

    static findByImgurLink(imgurLink) {
        return Photo.all.find(photo => photo.imgur_link === imgurLink)
    }
    

    
    // static renderAll() {
    //     Photo.all.forEach(photo => {
    //         photo.display()
    //     })
    // }
}







       