<script setup>
import Phrase from "../components/Phrase.vue";
</script>
<template>
    <div>
        <h1>WELL DONE!!</h1>
        <p>SCORE: {{ $props.results }}%</p>
        <Phrase />
        <div>
            <button><a href="/">RESTART</a></button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        results: String,
    }
};
</script>