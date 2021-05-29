package main  

import (
    "fmt" 
    "github.com/go-chi/chi"
    "local.packages/dao"
    "local.packages/cors"
    "local.packages/controller"
)

var router = chi.NewRouter()


func Api(){

	fmt.Print("\n === api  start ==== \n")

	router.Use(cors.Cors)
	router.Route("/api/v1", func(subRouter chi.Router) {
        // controllerにpostのデータを送る
		subRouter.Post("/photos",controller.HandlePhotoPostController);
	})
	http.ListenAndServe(":3030", router)
	
	fmt.Print("\n === api end ====  \n");
}


func main() {
    Api()
}