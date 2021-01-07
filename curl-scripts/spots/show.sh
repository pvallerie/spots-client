curl "https://polar-savannah-31336.herokuapp.com/spots/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
