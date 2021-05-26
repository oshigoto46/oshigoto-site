package main

import (
	"net/http"
	// "github.com/alexedwards/scs/mysqlstore"
	"github.com/go-chi/chi"
	// "github.com/go-chi/chi/middleware"
	"fmt"
)

func main(){

	var router = chi.NewRouter()
	
	// var photosFunc = fmt.Print("Hello world!");
	router.Route("/api/v1", func(subRouter chi.Router) {
		//fmt.Print("Hello world!")
		subRouter.Get("/photos", photos);
	})
	// router.Route("/v1/api", func(router,chi.Router)){
	// //  	router.Get("/photos",photosFunc)
    // }

	http.ListenAndServe(":3030", router)
}

func photos(writer http.ResponseWriter, request *http.Request){
	fmt.Print("\nphotos")
}
