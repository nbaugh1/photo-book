class Api {
    static baseUrl = "http://localhost:3000"

    static getPhotos() {
        fetch(Api.baseUrl + '/api/photos/')
          .then(resp => resp.json())
          .then(photos => {
            photos.forEach(photo => {
              let newPhoto = new Photo(photo)
            })
            Photo.renderAll();
            addClickToThumbnails();

          })
          .catch(errors => console.log('d', errors))
    }

    static getComments() {
      fetch(Api.baseUrl + '/api/comments/')
        .then(resp => resp.json())
        .then(comments => {
            comments.forEach (comment =>{
              let newComment = new Comment(comment)
            })
          })
        }

    static submitComment(event) {
      event.preventDefault();
      let data = createData(); 
      fetch(Api.baseUrl + '/api/comments', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          let newComment = new Comment(data);
          clearForm();
          alert(`New Comment on Photo Number ${newComment.photo_id}: ${newComment.commenter} - ${newComment.content}`);
          newComment.displayNewComment()
          })
    }
  }