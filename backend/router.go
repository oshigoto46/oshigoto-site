package myrouter

import (
	"net/http"
	"github.com/go-chi/chi"
	"fmt"
)

func Api(){

	var router = chi.NewRouter()

	router.Use(Cors)
	router.Route("/api/v1", func(subRouter chi.Router) {
		subRouter.Get("/photos", photos);
	})

	http.ListenAndServe(":3030", router)
}

func photos(writer http.ResponseWriter, request *http.Request){
	fmt.Print("\nphotos")
}
