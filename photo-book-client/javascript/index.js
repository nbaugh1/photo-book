// initializer code goes here

// eventListener ensures that all of the elements are loaded into the DOM

function createData() {
    return {
        comment: {
            commenter: document.getElementById('commenter').value,
            content: document.getElementById('content').value 
        
        }
    }

}
function selectPhoto(photo) {
    let selectedPhoto = Photo.findByImgurLink(photo["src"])
    console.log(selectedPhoto)
    
    document.getElementsByClassName("view-panel")[0].innerHTML = viewPanelTemplate(selectedPhoto);
    document.getElementsByClassName("add-comment-button")[0].innerHTML = addCommentButton(selectedPhoto);
}



function alert() {
    console.log('test')
}

function viewPanelTemplate(photo) {
    return `
<div class="text-center card mb-3">
  <img src="${photo.imgur_link}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${photo.info}</h5>
    <p class="card-text" id="comment-card-text">this is where photo comments will go</p>
    <p class="card-text"><small class="text-muted">perhaps put the number of comments here or something</small></p>
  </div>
</div>
    `
}

function addCommentButton(photo) {
    
    return `
   
       <button type="button" class="btn-primary" value="Add New Comment" onclick="renderCommentForm()">Add New Comment</button>

    `
}

function commentFormTemplate () {
    return `
    <div class="row">
    <div class="col s12 m6 l6">
      <form id="comment-form" action="#">
      <label for="commenter">Name:</label>
        <div class="input-field">
          <input type="text" name="commenter" id="commenter">
          
        </div>
    
        <label for="content">Comment:</label>
        <div class="input-field">
          <textarea name="content" id="content" cols="60" rows="25"></textarea>
        </div>
    <br>
        <input type="submit" value="Post Comment" class="btn-primary">
      </form>
    </div>
    `
}

function addSubmitEventToCommentForm() {
    document.getElementById("comment-form").addEventListener('submit', Api.submitComment);
}

function renderCommentForm(photo) {
    document.getElementsByClassName("comment-form")[0].innerHTML = commentFormTemplate();
    document.getElementsByClassName("add-comment-button")[0].innerHTML = "";
    console.log()
    Api.assignSelectedPhoto(photo);
    debugger;
    addSubmitEventToCommentForm();
}



document.addEventListener('DOMContentLoaded', function () {

    Api.makePhotoStrip()

    console.log("test")
});