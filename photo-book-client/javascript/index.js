// initializer code goes here

// eventListener ensures that all of the elements are loaded into the DOM
function selectPhoto(photo) {
    let selectedPhoto = Photo.findByImgurLink(photo["src"])
    console.log(selectedPhoto)
    document.getElementsByClassName("view-panel")[0].innerHTML = viewPanelTemplate(selectedPhoto);
}



function alert() {
    console.log('test')
}

function viewPanelTemplate(photo) {
    return `
    <div class="card" style="width: 18rem;">
                                <img src="${photo.imgur_link}" class="card-img-top" alt="...">
                                <div class="card-body">
                                  <h5 class="card-title">${photo.info} </h5>
                                  <p class="card-text">Comments go here</p>
                                  <p class="card-text">Comments go here</p>
                                  <p class="card-text">Comments go here</p>
                                  <p class="card-text">Comments go here</p>
                                  <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                              </div>
    `
}
document.addEventListener('DOMContentLoaded', function (){
    
    Api.makePhotoStrip()

    console.log("test")
});