# Express/React chat-app project

This simple repo shows how to easily add chat functionality into an Express / React project with [Chat Engine](https://chatengine.io).

To understand the code, please watch [this video]()!

## Setup Steps

Setup this chat-app in 4 steps:

### 1 - Setup a Chat Engine server

Go to [Chat Engine](https://chatengine.io) to setup your own chat server.

- Click "New Project" and follow the steps
- Your `Project ID` and `Private Key` will be required

### Connect your code to Chat Engine

We will connect to your Chat Engine server with environment varibles. Replace the UUIDs below with your own.

In `frontend/.env` write:

```
CHAT_ENGINE_PROJECT_ID=5d498a31-cd23-42b7-b367-4fcc9463bd2f
```

In `backend/.env` write:

```
CHAT_ENGINE_PROJECT_ID=5d498a31-cd23-42b7-b367-4fcc9463bd2f
CHAT_ENGINE_PRIVATE_KEY=49a46286-91c3-4f9c-92bf-284ae51b7628
```

### `npm run start`

Start the React frontend with the following script:

```
cd frontend
npm install
npm run start
```

Start the Express backend with the following script:

```
cd backend
npm install
npm run start
```

Done!! Your Express server is on `localhost:3001` and your React chat app is on `localhost:3000`.

To understand the code, please watch [this video]()!
