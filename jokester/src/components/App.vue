<template>
<div id="app">
    <h3>Got Jokes?</h3>
    <button v-on:click="initJokes" class="btn btn-primary">Get 10 random jokes</button>
    <div class="">
        {{$store.state}}
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: mapActions([
        'initJokes'
    ])
}
</script>