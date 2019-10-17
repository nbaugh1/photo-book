class Api {
    static baseUrl = "http://localhost:3000"

    static makePhotoStrip() {
        fetch(Api.baseUrl + '/api/photos/')
          .then(resp => resp.json())
          .then(photos => {
            photos.forEach(photo => {
              let newPhoto = new Photo(photo)
              newPhoto.displayPhotoInStrip()
            })
          })
          
          .catch(errors => console.log('d', errors))
    }
   

    static assignSelectedPhoto(photo) {
      debugger;
      fetch(Api.baseUrl + `/api/photos/${photo.id}`)
        .then(resp => resp.json())
        .then(photo => {
          let selectedPhoto = photo
          return selectedPhoto
        })
       
    }

    static submitComment(event) {
      event.preventDefault();
      let data = createData(); 
      debugger;
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
          let comment = new Comment(data.commenter, data.content);
    
        })
    }
    
  
  }