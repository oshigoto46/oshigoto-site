package db

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
)


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
