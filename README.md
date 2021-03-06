## Node Music

Node music is an Implementation of the FFmpeg framework to `stream` youtube videos as mp3.

### Setup

There are a couple of prerequisites before getting started with node-music.

- Nodejs
  Node can be installed from [nodejs.org](https://nodejs.org)
- FFmpeg 
  Can be installed from [FFmpeg.org](https://ffmpeg.org/download.html)

Then clone the repo and inside the project directory terminal

```bash
npm install 

nodemon index.js
```

- The API endpoint is `http://localhost:8081/tracks`
- API takes a single parameter `id` which is the video ID.
- For the frontend to work open `client` and inside terminal
```bash
npm install

npm run build
```
- After this the frontend will be showing on `http://localhost:8081` on browser.


For the youtube search functionality

- create a file `keys.js` inside `client/src/miscred` and add 

```javascript
const keys = {
  gkey: "GOOGLE_API_KEY", // google api key with youtube API enabled
  rapidkey: "RAPID_API_KEY" //RapidAPI key for youtube search
  // To get a Rapid API Youtube Search key and Docs go to
  // https://rapidapi.com/tarfah/api/youtube-search
  //Then follow the instructions for getting the key!!
};

export default keys;
```
- Then build  the client again 
```bash
npm run build
```

### File Structure

- `Client` > Vue frontend for the app.
- `index.js` > Express server listening on `localhos:8081`

### How it Works ?

FFmpeg is a community driven framework for to record, convert and stream audio and video. This project makes use of the `libmp3lame` audio codec library of FFmpeg to convert and stream videos to mp3 audio. Learn more about FFmpeg [here](https://ffmpeg.org)

#### Process

- Upon getting the video id [`ytdl-core`](https://www.npmjs.com/package/ytdl-core) creates a readable stream of the highest possible audio of the requested video.
- FFmpeg, converts the stream to mp3 using `libmp3lame` Audio codec library.
- The converted output stream is piped to express response and sent to the client.
- For the youtube search functionality, it uses  the youtube search API  to fetch videos and can directly play mp3.

### Improvements

This project can be improved to further extent by adding play/pause and other media controls. This was a side project of  mine created only to listen to long youtube chillpop music videos 😂.