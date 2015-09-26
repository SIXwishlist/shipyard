package api

import (
	"encoding/json"
	"net/http"
)

func (a *Api) volumes(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-type", "application/json")

	volumes, err := a.manager.Volumes()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	if err := json.NewEncoder(w).Encode(volumes); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
