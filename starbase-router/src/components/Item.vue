<template>
<div class="col-md-4">
    <div class="item-card" @click="switchItem">
        <div class="card-block">
            <h4 class="card-title">{{item.name}}</h4>
            <div v-for="(value, ckey, index) in item">
                <div v-if="index < 5">
                    <strong>{{ckey}}</strong>: {{value}}
                </div>
            </div>
        </div>
    </div>    
</div>
</template>

<script>
export default {
    props:['passedItem', 'type'],
    data(){
        return {
            item:{}
        }
    },
    methods:{
        switchItem(){
            let random_id = Math.floor(Math.random() * 63) + 1;

            fetch('https://swapi.co/api/'+ this.type +'/'+ random_id +'/', {
                method:'GET'
            })
            .then(response => response.json())
            .then(json => this.item = json)
        }
    },
    created(){
        this.item = this.passedItem
    }
}
</script>