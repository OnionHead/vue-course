<template>
<div class="col-md-12">
    <Item 
        v-for="(item, index) in items"
        v-bind:key="index"
        v-bind:passed-item="item"
        v-bind:type="type"
    />
</div>
</template>

<script>
import Item from './Item.vue';

export default {
    data() {
        return {
            type: this.$route.params.type,
            items: []
        }
    },
    components:{
        Item
    },
    watch:{
        '$route':'fetchItems'
    },
    methods:{
        fetchItems(){
            this.items = [];
            this.type  = this.$route.params.type;
            let initia_ids = [1, 13, 14];

            for(let i in initia_ids){
                let id = initia_ids[i];

                fetch('https://swapi.co/api/'+ this.type +'/'+ id +'/', {
                    method: 'GET'
                })
                .then(response => response.json())
                .then(json => {
                    this.items.push(json)
                })
            }
        }
    },
    created(){
        this.fetchItems()
    }
}
</script>