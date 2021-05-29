module router

go 1.15

require (
	github.com/aws/aws-sdk-go v1.38.50 // indirect
	github.com/go-chi/chi v1.5.4
	github.com/go-chi/cors v1.2.0 // indirect
	github.com/go-sql-driver/mysql v1.6.0 // indirect
	local.packages/cors v0.0.0
	local.packages/db v0.0.0
	local.packages/s3 v0.0.0
)

replace local.packages/cors => ./cors

replace local.packages/db => ./db

replace local.packages/s3 => ./s3
