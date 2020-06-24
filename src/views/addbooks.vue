<template>
    <div>
        <input type="file" @change="uploadFile" class="file">
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    methods: {
        ...mapActions(['getFile']), // a mapped action
        uploadFile() {
        const fileInput = document.querySelector(".file");
        const file = fileInput.files[0];
        this.$firebase.storage
        .child('library book')
          .put(file)
          .then(() => {
              console.log('good')
            this.getFile(this); //how to access an action
        }).catch(err => {console.log(err)})
    }
    }
}
</script>