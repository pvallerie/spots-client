curl "https://polar-savannah-31336.herokuapp.com/" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'"
  }
}'
