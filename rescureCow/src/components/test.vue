<template>
    <div class="container">
        {{person1}}
        {{person2}}
        <button @click="restart"></button>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    data () {
        return {
            person1: [{name: 'lizhixiang'}]
        }
    },
    created: function() {
    }, 
    computed: {
        person2: function() {
            return [{name: 'lisi'}];
        }
    },
    methods: {
        restart: function() {
            let person2 = [{name: 'lisi'}];
            this.person1 = person2.slice(0);
            // this.person1 = this.person2.slice(0);
            this.person1[0].name = 'wanger'
            console.log(this.person2);
        }
    }
}
</script>
<style lang="scss">

</style>