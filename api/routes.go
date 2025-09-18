package main

import (
	"fmt"
	"net/http"
)

func initRoutes(mux *http.ServeMux) {
	mux.HandleFunc("POST /blog/posts", createPost)
}

func createPost(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Create post")
}
