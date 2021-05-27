package main

import (
	"flag"
    "fmt"
	"launchpad.net/goamz/aws"
	"launchpad.net/goamz/s3"
)

var (
	bucketName string
	fileName   string
)

func init() {
	flag.StringVar(&bucketName, "b", "", "euromarriage-agency-2021-05-23")
}

func main() {

	flag.Parse()
    bucketName = "euromarriage-agency-2021-05-23"
	// The AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY environment variables are used.
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
	err = bucket.Put("sample.txt", data, "text/plain", s3.BucketOwnerFull)
	if err != nil {
		panic(err.Error())
	}
}
