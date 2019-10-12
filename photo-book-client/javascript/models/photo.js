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
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div class="text-center">
                <h6>${img.info}</h6>
                
                <img class="img-thumbnail" src="${img.imgur_link}" alt="" onclick="selectPhoto(this)">
                
            </div>
            
        <br>
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