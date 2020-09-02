var ytdl = require("ytdl-core");
var ffmpeg = require("fluent-ffmpeg");
var express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
const trackRoute = express.Router();
app.use("/tracks", trackRoute);
const port = process.env.PORT || 8081;

trackRoute.get("/:id", (req, res) => {
  var url = `https://www.youtube.com/watch?v=${req.params.id}`;
  console.log(url);
  let stream = ytdl(url, { quality: "highestaudio" });
  let mpstream = ffmpeg(stream);

  res.set("content-type", "audio/mp3");
  res.set("accept-ranges", "bytes");
  res.set("Content-disposition", "attachment; filename=yolo.mp3");
  let i = 0;
  mpstream
    .withAudioCodec("libmp3lame")
    .audioBitrate("128k")
    .toFormat("mp3")
    .on("progress", () => {
      console.log("sending data " + i++);
    });

  var outstream = mpstream.pipe();

  outstream.on("data", (chunk) => {
    res.write(chunk);
  });

  outstream.on("error", () => {
    res.sendStatus(404);
  });

  outstream.on("end", () => {
    console.log("song completed!!");
    res.end();
  });
});

app.listen(port, () => {
  console.log(`Node audio listening at http://localhost:${port}/tracks`);
});
