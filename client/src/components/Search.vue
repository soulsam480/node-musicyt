<template>
  <div>
    <form>
      <label for="exampleInputEmail1">Enter Search Query</label>
      <input
        type="text"
        class="form-control"
        placeholder="Enter search Query"
        v-model="vid"
        @keyup.enter="playAudio"
      />
    </form>
    <br />
    <button class="btn btn-primary" @click="playAudio">Search</button>
    <br />
    <br />
    <div v-for="item in searchRes" :key="item.id">
      <router-link
        :to="{
          name: 'Home',
          query: { id: item.id },
          params: { title: item.title, imgUrl: item.imgUrl }
        }"
      >
        <div class="row">
          <div class="col-5">
            <img class="qimg" :src="item.imgUrl" alt="" />
          </div>
          <div class="col-7">
            <h5>{{ item.title }}</h5>
            <p class="text-muted">{{ item.chanel }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;
import keys from "../miscred/keys";
export default {
  name: "Search",
  data() {
    return {
      vid: "",
      searchRes: []
    };
  },
  methods: {
    async playAudio() {
      await axios({
        method: "GET",
        url: "https://youtube-search.p.rapidapi.com/search",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "youtube-search.p.rapidapi.com",
          "x-rapidapi-key": keys.rapidkey,
          useQueryString: true
        },
        params: {
          q: this.vid,
          part: "snippet",
          key: keys.gkey
        }
      })
        .then(res => {
          document.title = `Search Results for ${this.vid}`;
          const dat = res.data.items;
          this.searchRes = [];
          dat.forEach(el => {
            this.searchRes.push({
              id: el.id.videoId,
              title: el.snippet.title,
              imgUrl: el.snippet.thumbnails.medium.url,
              chanel: el.snippet.channelTitle
            });
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {}
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
