package main

import (
	"net/http"
	"github.com/go-chi/chi"
	"fmt"
	"github.com/go-chi/cors"
)

var Cors = cors.Handler(cors.Options{
	AllowedOrigins:   []string{"*"},
	AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
	AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
	ExposedHeaders:   []string{"Link"},
	AllowCredentials: true,
	MaxAge:           300,
})

var router = chi.NewRouter()

func Api(){
	fmt.Print("\nhogehoge\n");
	router.Use(Cors)
	router.Route("/api/v1", func(subRouter chi.Router) {
		subRouter.Get("/photos", photos);
	})

	http.ListenAndServe(":3030", router)
	fmt.Print("\nhogehoge\n");
}

func photos(writer http.ResponseWriter, request *http.Request){
	fmt.Print("\nphotos")
}

func main(){
	Api()
}
