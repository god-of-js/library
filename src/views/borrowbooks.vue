<template>
    <div>
        <button @click="borrowDoc()">Borrow Document</button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState(['doc', 'user']) //mapped user and doc so it could me accessible in this component
    },
    methods: {
        borrowDoc() {
            let data = {
                name: 'this.user.name', // mapping state makes this accessible 
                doc: 'link'
            }
            this.$firebase.db
            .ref("borrowers")
            .set(data) 
        }
    }
}
</script>