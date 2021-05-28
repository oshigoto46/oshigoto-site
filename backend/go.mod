module router

go 1.15


require ( 
    local.packages/cors v0.0.0
	github.com/aws/aws-sdk-go v1.38.50 // indirect
	github.com/go-chi/chi v1.5.4 // indirect
	github.com/go-chi/cors v1.2.0 // indirect
	github.com/go-sql-driver/mysql v1.6.0 // indirect
)

replace local.packages/cors => ./cors
