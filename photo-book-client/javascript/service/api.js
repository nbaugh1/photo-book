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
          })
          .catch(errors => console.log('d', errors))
    }

    static getPhoto(photo) {
      console.log(photo.src)
      let selectedPhoto = Photo.all.find(p => p.imgur_link === photo.src)
      fetch(Api.baseUrl + `/api/photos/${selectedPhoto.id}`)
          .then(resp => resp.json())
          .then(photo => {
          })
        return photo.id
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

    static getComments() {
      let allComments = []
      fetch(Api.baseUrl + '/api/comments/')
        .then(resp => resp.json())
        .then(comments => {
            comments.forEach (comment =>{
              let newComment = new Comment(comment)
              allComments.push(newComment)
            })
            // Comment.renderComments();
        })
      }
}