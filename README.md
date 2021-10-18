### Steps to run blackpearl-backend
```
git clone https://github.com/bradley101/blackpearl-backend.git
cd blackpearl-backend

# Copy your firebase config file to the working directory
cp ~/config.json .

npm i
npm run main
```

Now `POST /notify` to `http://localhost:3443` with the data params.

The notification will be sent to the app users.
