package s3

import (
	"bytes"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3/s3manager"
)

type S3Store struct {
	Bucket     string
	Uploader   *s3manager.Uploader
	Downloader *s3manager.Downloader
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
