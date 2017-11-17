<template>
<div id="app">
    <h3>Got Jokes?</h3>
    <button @click="initJokes" class="btn btn-primary">Add 10 random jokes</button>
    <button @click="addJoke" class="btn btn-primary">Add one random joke</button>
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
        'initJokes',
        'addJoke'
    ]),
    components:{
        Joke
    }
}
</script>