<template>
<div id="app">
    <h3>Got Jokes?</h3>
    <button v-on:click="initJokes" class="btn btn-primary">Get 10 random jokes</button>
    <br/>
    <br/>
    <div class="col-md-12">
        <Joke
            v-for="(joke, index) in $store.state.jokes"
            :joke="joke"
            :key="index"
        />
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import Joke from './Joke.vue'

export default {
    methods: mapActions([
        'initJokes'
    ]),
    components:{
        Joke
    }
}
</script>