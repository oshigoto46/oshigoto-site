package main

import (
	"fmt"
	"net/http"
	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
	"launchpad.net/goamz/aws"
	"launchpad.net/goamz/s3"
	// "database/sql"
	// "log"
	// _ "github.com/go-sql-driver/mysql"
	// "github.com/kntkymt/discord_clone_server/server/model/db"
	// "gopkg.in/gorp.v2"
)

var Cors = cors.Handler(cors.Options{
	AllowedOrigins:   []string{"*"},
	AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
	AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
	ExposedHeaders:   []string{"Link"},
	AllowCredentials: true,
	MaxAge:           300,
})

// type DBManager struct {
// 	DBMap *gorp.DbMap
// }

// //mysql -u root  -h 127.0.0.1 -P 3307 -pP@ssw0rd

// func CreateManager(user string, password string) *DBManager {
// 	var source = user + ":" + password + "@tcp(localhost:3307)/photos?parseTime=true"
// 	var db, error = sql.Open("mysql", source)
// 	if error != nil {
// 		log.Fatal("error connecting to database:", error)
// 	}

// 	var gorpDialect = gorp.MySQLDialect{}
// 	var dbMap = &gorp.DbMap{Db: db, Dialect: gorpDialect}

// 	var manager = &DBManager{DBMap: dbMap}
// 	manager.setup()

// 	return manager
// }

var router = chi.NewRouter()

func Api(){

	fmt.Print("\n === api  start ==== \n")
	router.Use(Cors)
	router.Route("/api/v1", func(subRouter chi.Router) {
		subRouter.Post("/photos",photosPost);
	})
	
	http.ListenAndServe(":3030", router)
	fmt.Print("\n === api end ====  \n");
}

func photosPost(writer http.ResponseWriter, request *http.Request){

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
	fmt.Print(request.Body)
	fmt.Print("=======\n")
		
	data := []byte("Hello, Goamz!!")
	err = bucket.Put("sample2.txt", data, "text/plain", s3.BucketOwnerFull)
	//err = bucket.Put(request.Body.name, request.Body.data, "text/plain", s3.BucketOwnerFull)
	if err != nil {
			panic(err.Error())
	}

	fmt.Print("\nphotos")
}

func main(){
	Api()
}
