<template>
    <div>
        <div v-for='(person, index) in fetchBorrowers' :key="index">{{person.name}}</div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters(['fetchBorrowers'])
    },
    mounted() {
        this.$store.dispatch('getBorrowers',  this)
    }
}
</script>