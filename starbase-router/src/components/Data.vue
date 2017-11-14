<template>
<div class="">
    Type: {{type}}
</div>
</template>

<script>
export default {
    data() {
        return {
            type: this.$route.params.type
        }
    },
    watch:{
        '$route':'changeType'
    },
    methods:{
        changeType(){
            this.type = this.$route.params.type
        }
    }
}
</script>