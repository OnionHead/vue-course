<template>
<div class="">
    <h3>Events Dashboard</h3>
    <button class="btn btn-danger btn-sm signtout-btn" @click="signOut">Sign Out</button>
    Dashboard Component

    {{$store.state}}
</div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'

export default {
    methods:{
        signOut(){
            this.$store.dispatch('signOut')
            firebaseApp.auth().signOut();
        }
    }
}
</script>