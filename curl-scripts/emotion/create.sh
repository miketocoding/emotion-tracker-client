URL_PATH="/emotions"

curl "${apiUrl}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "emotion": {
      "emotionName": "'"${EMOTIONNAME}"'",
      "description": "'"${DESCRIPTION}"'"
    }
  }'

echo
