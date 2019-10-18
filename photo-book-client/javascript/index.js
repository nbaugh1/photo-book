// initializer code goes here

// eventListener ensures that all of the elements are loaded into the DOM


function createData() {
    return {
        comment: {
            commenter: document.getElementById('commenter').value,
            content: document.getElementById('content').value,
            photo_id: document.getElementById("photo-id").textContent
        }
    }
}



function viewPanelTemplate(photoTag) {
    let selectedPhotoId = Api.getPhoto(photoTag)
    let photo = Photo.all[selectedPhotoId - 1]
    return `
            <div class="text-center card mb-3">
                <img src="${photoTag.src}" class="card-img-top" alt="${photoTag.id}">
            <div class="card-body">
                <h5 class="card-title" id="photo-id">${photoTag.id}</h5>
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
                            <textarea name="content" id="content" cols="60" rows="25"></textarea>
                        </div>
                    <br>
                    <div>
                        <input type="submit" value="Add Comment" class="btn-primary" id="">
                    </div>
                        </form>
                    </div>
            </div>
            `
}



function addSubmitEventToCommentForm(photo) {
    document.getElementById("comment-form").addEventListener('submit', Api.submitComment);
    // let selectedPhoto = Api.getPhoto(photo);
    }

function showPhoto(photoTag) {
    document.querySelector("div.comments").innerHTML = ""
    document.querySelector("div.view-panel").innerHTML = viewPanelTemplate(photoTag);
    addSubmitEventToCommentForm(photoTag);
    Api.getComments();
}

function clearForm() {
    document.getElementById('commenter').value = ""
    document.getElementById('content').value = ""
}


document.addEventListener('DOMContentLoaded', function () {
    Api.getPhotos();
});