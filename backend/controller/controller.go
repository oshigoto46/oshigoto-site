package controller

import (
	"local.packages/dao"
)

type PhotoController struct {}


func (userController *PhotoController) HandlePhotoPostController(writer http.ResponseWriter, request *http.Request) {
	
	var body, bodyError = ioutil.ReadAll(request.Body)
	if bodyError != nil && bodyError != io.EOF {
		//log.Print(bodyError)
		http.Error(writer, "bad request. no body.", http.StatusBadRequest)
		return
	}
	var requestBody requests.PostUserRequest

	// Byte形式のBodyをパース
	if error := json.Unmarshal(body, &requestBody); error != nil {
		//log.Print(error)
		http.Error(writer, "bad request. body json is invalid", http.StatusBadRequest)
		return
	}
	
// commit rollback的な何かを書く !!!!!
// commit rollback的な何かを書く !!!!!
// commit rollback的な何かを書く !!!!!
// commit rollback的な何かを書く !!!!!
// commit rollback的な何かを書く !!!!!

	dao.AddPhotoDao(photoName,binaryData)

}

