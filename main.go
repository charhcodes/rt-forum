package main

import (
	"fmt"
	"net/http"
	"os"
	forum "rt-forum/go"
)

func main() {
	http.HandleFunc("/", serveHTML)
	http.HandleFunc("/home", serveHome)
	http.HandleFunc("/login", forum.ServeLogin)
	http.HandleFunc("/register", forum.ServeRegister)

	fmt.Println("Server listening on :8080...")
	http.ListenAndServe(":8080", nil)
}

func serveHTML(w http.ResponseWriter, r *http.Request) {
	content, err := os.ReadFile("index.html")
	if err != nil {
		http.Error(w, "Error reading HTML file", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "text/html")
	w.Write(content)
}

func serveHome(w http.ResponseWriter, r *http.Request) {
	content := "<h1>Welcome to A Better Forum!</h1>"
	w.Header().Set("Content-Type", "text/html")
	w.Write([]byte(content))
}
