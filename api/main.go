package main

import (
	"log"
	"net/http"
	"database/sql"

	_ "github.com/lib/pq"
)

var db *sql.DB

func initDatabase() *sql.DB {
	connStr := "user=postgres password=postgres dbname=postgres sslmode=verify-full"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
	
	db.Exec(`
		CREATE TABLE IF NOT EXISTS posts (
			id SERIAL PRIMARY KEY,
			title VARCHAR(500) NOT NULL,
			body TEXT NOT NULL,
			creation_date TIMESTAMP
		);

		CREATE TABLE IF NOT EXISTS comments (
			id SERIAL PRIMARY KEY,
			post_id INT NOT NULL,
			body VARCHAR(500) NOT NULL
		);
	`)

	return db
}

func main() {
	db = initDatabase()

	mux := http.NewServeMux()
	initRoutes(mux)

	err := http.ListenAndServe(":8080", mux)
	if err != nil {
		log.Fatal(err)
	}
}
