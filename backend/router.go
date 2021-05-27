package main

import (
	"fmt"
	"net/http"
	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
	"launchpad.net/goamz/aws"
	"launchpad.net/goamz/s3"
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

	bucketName := "euromarriage-agency-2021-05-23"
	auth, err := aws.EnvAuth()
	if err != nil {
		panic(err.Error())
	}
		// Open Bucket
	s := s3.New(auth, aws.APNortheast)
	bucket := s.Bucket(bucketName)
	
	fmt.Print("=======\n")
	fmt.Print(bucketName)
	fmt.Print("=======\n")
		
	data := []byte("Hello, Goamz!!")
	err = bucket.Put("sample2.txt", data, "text/plain", s3.BucketOwnerFull)
	if err != nil {
			panic(err.Error())
	}

	fmt.Print("\nphotos")
}

func main(){
	Api()
}
