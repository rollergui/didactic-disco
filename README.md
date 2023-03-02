# didactic-disco

## Running:

- run `npm install`
- run `npm run start`
- make the following http request, filling the payload field values:
  ```curl
  curl --request POST \
  --url http://localhost:3000/fetch-benefit-numbers \
  --header 'Content-Type: application/json' \
  --data '{
	  "username": "",
	  "password": "",
	  "cpf": ""
  }'
  ```