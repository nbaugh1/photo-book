function createData() {
    return {
        comment: {
            commenter: document.getElementById('commenter').value,
            content: document.getElementById('content').value,
            photo_id: document.getElementById("photo-id").textContent
        }
    }
}

function getPhotoObject(photoTag) {
    let selectedPhoto = Photo.all.find(p => p.imgur_link === photoTag.src)
    return selectedPhoto
}

function addSubmitEventToCommentForm() {
    document.getElementById("comment-form").addEventListener('submit', Api.submitComment);
}

function showPhotoAndComments() {
    let photo = getPhotoObject(this)
    let comments = photo.comments()
    document.querySelector("div.comments").innerHTML = ""
    document.querySelector("div.old-comments").innerHTML = ""
    document.querySelector("div.view-panel").innerHTML = photo.viewPanelTemplate();
    addSubmitEventToCommentForm();
    comments.forEach(comment => {
        comment.displayComment()
    })
}

function clearForm() {
    document.getElementById('commenter').value = ""
    document.getElementById('content').value = ""
}

function addClickToThumbnails() {
    let thumbs = document.querySelectorAll('.gallery img.img-thumbnail')
    thumbs.forEach(thumbnail => {
        thumbnail.addEventListener('click', showPhotoAndComments)
    })
}

Api.getPhotos();
Api.getComments();
