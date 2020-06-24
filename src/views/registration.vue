<template>
    <div>
        <form @submit.prevent="submitForm">
        <input type="email" v-model="email" placeholder="email">
        <input type="text" v-model="name"  placeholder="name">
        <input type="password" v-model="password"  placeholder="password">
        <button>Register </button>
        </form>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    data: () => {
        return {
            email: null,
            name: null,
            password: null
        }
    },
    methods: {
        ...mapMutations(['setUserInfo']), //mapping mutations to be able to access it
        submitForm() {
      this.$firebase.auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(result => {
          let data = {
            name: this.name,
            email: this.email,
            id: result.user.uid,
            createdAt: Date.now()
          };
          this.$firebase.db
            .ref("users")
            .child(result.user.uid)
            .set(data)
            .then(() => {
              this.setUserInfo(data);
              this.$router.push("/borrowbooks");
            });
        })
        .catch(err => {
            console.log(err)
          let message = Object.values(err)[0];
            alert(message);
        });
    
        }
    }
}
</script>