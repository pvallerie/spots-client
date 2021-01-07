curl "https://polar-savannah-31336.herokuapp.com/" \
--include \
--request PATCH \
--header "Authorization: Bearer ${TOKEN}" \
--header "Content-Type: application/json" \
--data ''
--data '{
  "passwords": {
    "old": "'"${OLDPW}"'"
    "new": "'"${NEWPW}"'"
  }
}'
