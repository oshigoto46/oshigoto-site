package main

import (
	// "net/http"
	// "github.com/alexedwards/scs/mysqlstore"
	// "github.com/go-chi/chi"
	"database/sql"
	"gopkg.in/gorp.v2"
	// "github.com/go-chi/chi/middleware"
	//"fmt"
)

type DBManager struct {
	DBMap *gorp.DbMap
}

func main(){

	// var router = chi.NewRouter()
	
	// // var photosFunc = fmt.Print("Hello world!");
	// router.Route("/articles", func(router chi.Router) {
	// 	fmt.Print("Hello world!")
	// })
	// // router.Route("/v1/api", func(router,chi.Router)){
	// // //  	router.Get("/photos",photosFunc)
    // // }

	// http.ListenAndServe(":3030", router)
}