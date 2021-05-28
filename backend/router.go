package main

import (
	"fmt"
	"local.packages/cors"
	"local.packages/db"
	"local.packages/s3"
	"net/http"
	"github.com/go-chi/chi"
	"io/ioutil"
)

var router = chi.NewRouter()

func Api(){

	fmt.Print("\n === api  start ==== \n")

	router.Use(cors.Cors)
	router.Route("/api/v1", func(subRouter chi.Router) {
		subRouter.Post("/photos",photosPost);
	})
	http.ListenAndServe(":3030", router)
	
	fmt.Print("\n === api end ====  \n");
}



func photosPost(writer http.ResponseWriter, request *http.Request){

	body, err := ioutil.ReadAll(request.Body)
	newS3Store,err    := s3.NewS3Store("euromarriage-agency-2021-05-23","ap-northeast-1")
	newS3Store.Set("hoge.png", body)
	if err != nil {
    }
	db := db.NewDatabase("root","P@ssw0rd","localhost")
	if db == nil {
	 	panic(err.Error())
	}
}

func main(){
	Api()
}
