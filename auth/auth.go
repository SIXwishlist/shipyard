package auth

import (
	"errors"
	"time"

	"code.google.com/p/go.crypto/bcrypt"
)

var (
	ErrUnauthorized = errors.New("unauthorized")
)

type (
	Account struct {
		ID        string       `json:"id,omitempty" gorethink:"id,omitempty"`
		FirstName string       `json:"first_name,omitempty" gorethink:"first_name,omitempty"`
		LastName  string       `json:"last_name,omitempty" gorethink:"last_name,omitempty"`
		Username  string       `json:"username,omitempty" gorethink:"username"`
		Password  string       `json:"password,omitempty" gorethink:"password"`
		Tokens    []*AuthToken `json:"-" gorethink:"tokens"`
		Roles     []string     `json:"roles,omitempty" gorethink:"roles"`
	}
	AuthToken struct {
		Token     string `json:"auth_token,omitempty" gorethink:"auth_token"`
		UserAgent string `json:"user_agent,omitempty" gorethink:"user_agent"`
	}
	Authenticator struct {
		salt []byte
	}
	ServiceKey struct {
		Key         string `json:"key,omitempty" gorethink:"key"`
		Description string `json:"description,omitempty" gorethink:"description"`
	}
)

func NewAuthenticator(salt string) *Authenticator {
	return &Authenticator{
		salt: []byte(salt),
	}
}

func (a *Authenticator) Hash(password string) (string, error) {
	h, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	return string(h[:]), err
}

func (a *Authenticator) Authenticate(password, hash string) bool {
	if err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(password)); err == nil {
		return true
	}
	return false
}

func (a *Authenticator) GenerateToken() (string, error) {
	return a.Hash(time.Now().String())
}
