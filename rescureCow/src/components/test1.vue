<template>
    <div class="container">
        {{count}}
        {{number}}
        <button @click="restart"></button>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    data () {
        return {
            count: 2 
        }
    },
    created: function() {
    }, 
    computed: {
        number: function() {
            return 3
        }
    },
    methods: {
        restart: function() {
            this.count = this.number;
            this.count += 1;
            console.log(this.number);
        }
    }
}
</script>
<style lang="scss">

</style>