<template>
    <h1>Login to an Account</h1>
    <input type="text" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <p v-if="errMsg">{{ errMsg }}</p>
    <button @click="register">Create Account</button>
    <hr>
    <button @click="signInWithGoogle">Sign in with Google</button>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'; // import router
const email = ref("");
const password = ref("");
const errMsg = ref() //Error Message
const router = useRouter() // get a reference to our vue router 

const register = () => {
    // need .value because ref()
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log("Successfully registered!")
        router.push('/game') // redirect to the game
    })
    .catch((error) => {
        console.log(error.code);
        switch (error.code) {
            case "auth/invalid-email":
                errMsg.value = "Invalid email";
                break;
            case "auth/user-not-found":
                errMsg.value = "No account with that email was found";
                break;
            case "auth/wrong-password":
                errMsg.value = "Incorrect password";
                break;
            default:
                errMsg.value = "Error code 504: Something went wrong";
                break;
        }
    })
};
const signInWithGoogle = () => {

};
</script>