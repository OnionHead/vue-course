<template>
<div id="app">
    <h3>Got Jokes?</h3>
    <button @click="initJokes" class="btn btn-primary">Add 10 random jokes</button>
    <button @click="addJoke" class="btn btn-primary">Add one random joke</button>
    <br/>
    <span v-for="(type, index) in types">
        <input 
            type="checkbox" 
            :key="index" 
            :value="type"
            v-model="checkedTypes"
            checked
        />
        <label>{{type}}</label>&nbsp;
    </span>
    <br/>
    <div class="col-md-12">
        <Joke
            v-for="(joke, index) in $store.state.jokes"
            v-show="checkedTypes.includes(joke.type)"
            :joke="joke"
            :index="index"
            :key="index"
        />
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import Joke from './Joke.vue'

export default {
    data(){
        return {
            types:['general', 'knock-knock', 'programming'],
            checkedTypes:['general', 'knock-knock', 'programming']
        }
    },
    methods: mapActions([
        'initJokes',
        'addJoke'
    ]),
    components:{
        Joke
    }
}
</script>