curl "https://polar-savannah-31336.herokuapp.com/spots" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "spot": {
      "name": "'"${NAME}"'",
      "seen": "'"${SEEN}"'",
      "location": "'"${LOCATION}"'",
      "notes": "'"${NOTES}"'"
    }
  }'

echo
