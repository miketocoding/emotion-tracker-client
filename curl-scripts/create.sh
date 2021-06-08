URL_PATH="/emotions"

curl "${apiUrl}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "emotion": {
      "emotionName": "'"${EMOTIONNAME}"'",
      "description": "'"${DESCRIPTION}"'"
    }
  }'

echo
