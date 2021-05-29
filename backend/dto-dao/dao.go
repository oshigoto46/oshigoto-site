package dao

import(
	"local.packages/db"
	"local.packages/s3"
)


type Dao struct{
	db db.Database
	s3 s3.S3Store
}

func (d *Dao) NewDao() Dao{

	db := db.NewDatabase("root","P@ssw0rd","localhost")
	if db == nil {
	 	panic(err.Error())
	}

	s3 := s3.NewS3Store("euromarriage-agency-2021-05-23","ap-northeast-1")
	if s3 == nil {
		panic(err.Error())
   }
   
}


func (d *Dao) AddPhotoDao(photoName,binaryData){

	dao = NewDao()

	//こんな感じ
	dao.db.addColumn(photoName)
	dao.s3.addS3(binaryData)
	
}