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

Or 

Import `db_helper.py` into your Python 2.x working directory
```
from db_helper import sendNotification

sendNotification("Some msg", "1", 89987532343223, "4")
```

The notification will be sent to the app users.
