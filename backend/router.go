package main

import (
	"fmt"
	"local.packages/cors"
	"net/http"
	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
	"bytes"
	"io/ioutil"
	"github.com/aws/aws-sdk-go/aws"
	//"github.com/aws/aws-sdk-go/aws/awserr"
	"github.com/aws/aws-sdk-go/aws/session"
	//"github.com/aws/aws-sdk-go/service/s3"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
	"database/sql"
	// "log"
	_ "github.com/go-sql-driver/mysql"
	// "github.com/kntkymt/discord_clone_server/server/model/db"
	// "gopkg.in/gorp.v2"
)

type S3Store struct {
	Bucket     string
	Uploader   *s3manager.Uploader
	Downloader *s3manager.Downloader
}


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

	fmt.Print("\n === api  start ==== \n")
	router.Use(Cors)
	router.Route("/api/v1", func(subRouter chi.Router) {
		subRouter.Post("/photos",photosPost);
	})
	
	http.ListenAndServe(":3030", router)
	fmt.Print("\n === api end ====  \n");
}

type Database struct {
    DATABASE       *sql.DB
}

func NewDatabase(user, password, host string) *Database {
	db, err := sql.Open("mysql", user+":"+password+"@tcp("+host+":3307)/photos")
	if err != nil {
		panic(err.Error())
	}
	err = db.Ping()
	if err != nil {
		panic(err.Error())
	}
	_, err = db.Exec("CREATE DATABASE IF NOT EXISTS article;")
	if err != nil {
		panic(err)
	}

	Database := new(Database)
	Database.DATABASE = db
	return Database
}

func NewS3Store(bucket, region string) (*S3Store, error) {
	s := new(S3Store)
	//bucket   = "euromarriage-agency-2021-05-23"
	s.Bucket = bucket

	sess, err := session.NewSession(&aws.Config{
			Region: aws.String(region),
	})
	if err != nil {
			return nil, err
	}

	s.Uploader = s3manager.NewUploader(sess)
	s.Downloader = s3manager.NewDownloader(sess)

	return s, nil
}


func (s *S3Store) Set(key string, body []byte) (err error) {
	params := &s3manager.UploadInput{
			Bucket: aws.String(s.Bucket),
			Key:    aws.String(key),
			Body:   bytes.NewReader(body),
	}
	_, err = s.Uploader.Upload(params)
	return
}

func photosPost(writer http.ResponseWriter, request *http.Request){

	body, err := ioutil.ReadAll(request.Body)
	newS3Store,err    := NewS3Store("euromarriage-agency-2021-05-23","ap-northeast-1")
	newS3Store.Set("hoge.png", body)

	if err != nil {
		
    }
	
	db := NewDatabase("root","P@ssw0rd","localhost")

	if db == nil {
	 	panic(err.Error())
	}
	//s  := Set("hoge",request.Body)
	
	// bucketName := "euromarriage-agency-2021-05-23"
	// auth, err := aws.EnvAuth()
	// if err != nil {
	// 	panic(err.Error())
	// }
	// 	// Open Bucket
	// s := s3.New(auth, aws.APNortheast)
	// bucket := s.Bucket(bucketName)
	
	// fmt.Print("=======\n")
	// fmt.Print(bucketName)
	// fmt.Print(request.Body)
	// fmt.Print("=======\n")
		
	// data := []byte("Hello, Goamz!!")
	// err = bucket.Put("sample2.txt", data, "text/plain", s3.BucketOwnerFull)
	// //err = bucket.Put(request.Body.name, request.Body.data, "text/plain", s3.BucketOwnerFull)
	// if err != nil {
	// 		panic(err.Error())
	// }

	// fmt.Print("\nphotos")
}

func main(){
	router.hoge()
	Api()
}
