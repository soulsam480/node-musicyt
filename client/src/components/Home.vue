<template>
  <div>
    <br />
    <br />
    <h3 class="text-center text-info">Welcome to Node Music</h3>
    <br />

    <form>
      <label for="exampleInputEmail1">Enter video ID</label>
      <input
        type="text"
        class="form-control"
        placeholder="Enter Video ID"
        v-model="vid"
      />
    </form>
    <br />
    <button class="btn btn-primary" @click="playAudio">Play</button>
    <br />
    <br />
    <audio id="audbar" autoplay controls style="width:100%" @ended="newSong">
      <source :src="aud" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    <div v-if="this.$route.params.title">
      <h6 class="text-center text-danger">Playing Please Wait!</h6>
      <div class="row">
        <div class="col-5">
          <img class="qimg" :src="this.$route.params.imgUrl" alt="" />
        </div>
        <div class="col-7">
          <h5>{{ this.$route.params.title }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      vid: "",
      aud: null
    };
  },
  methods: {
    playAudio() {
      this.aud = `http://localhost:8081/tracks/${this.vid}`;
      let audiobar = document.getElementById("audbar");
      audiobar.load();
      audiobar.play();
    },
    newSong() {
      this.$router.replace({ path: "/search" });
    }
  },
  mounted() {
    if (this.$route.query.id) {
      document.title = `Playing ${this.$route.params.title}`;
      this.aud = `http://localhost:8081/tracks/${this.$route.query.id}`;
      let audiobar = document.getElementById("audbar");
      audiobar.load();
      audiobar.play();
    }
  }
};
</script>

<style scoped>
.qimg {
  max-width: 100%;
}
.row {
  padding: 10px;
}
</style>
