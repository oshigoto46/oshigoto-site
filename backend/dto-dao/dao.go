package dao

import(

	"local.packages/db"
	"local.packages/s3"

)


type Dao struct{
	db *db
	s3 s3.S3Store
}

func NewDao(){


}

