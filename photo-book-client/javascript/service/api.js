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

    static selectPhoto(photo) {
      fetch(Api.baseUrl + '/api/photos/${photo.id}')
      console.log(photo.id)
        .then(resp => resp.json())
        
    }
  }