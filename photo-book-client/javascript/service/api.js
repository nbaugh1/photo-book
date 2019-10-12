class Api {
    static baseUrl = "http://localhost:3000"

    static makePhotos() {
        fetch(Api.baseUrl + '/api/photos/')
          .then(resp => resp.json())
          .then(photos => {
            photos.forEach(photo => {
              let newPhoto = new Photo(photo)
              newPhoto.display()
            })
          })
          
          .catch(errors => console.log('d', errors))
    }
  }