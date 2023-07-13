<template>
  <blockquote class="phrase-container">
    <h2 class="phrase">{{ phrase?.quote }}</h2>
    <h4 class="phrase-author">
      {{ phrase?.author }}
    </h4>
  </blockquote>
</template>

<script>
import axios from 'axios';

const API_PHRASE_URL = import.meta.env.VITE_API_PHRASE_URL
const API_PHRASE_KEY = import.meta.env.VITE_API_PHRASE_KEY

export default {
  data() {
    return {
      phrase: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(API_PHRASE_URL, { headers: { 'X-Api-Key': API_PHRASE_KEY } });
      const [data] = res.data || [];
      this.phrase = data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style scoped>
.phrase-container {
  text-align: center;
  margin-top: 4rem;
  padding: 0 20%;
  font-style: italic;
}

.phrase-container::before {
  content: open-quote;
  color: white;
  font-size: 4rem;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}

.phrase-container::after {
  content: close-quote;
  color: white;
  font-size: 4rem;
  line-height: 0.1em;
  margin-left: 0.25em;
  vertical-align: -0.4em;
}

.phrase-container p {
  display: inline;
}

.phrase {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.phrase-author {
  list-style: none;
  padding: 0;
}

.phrase-author::before,
.phrase-author::after {
  content: '"-"';
  color: white;
  line-height: '0.1em';
  margin: '0 0.5em';
}
</style>