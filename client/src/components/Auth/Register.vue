<template>
    <h1>Create an Account</h1>
    <input type="text" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="register">Create Account</button>
    <hr>
    <button @click="signInWithGoogle">Sign in with Google</button>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from 'vue-router'; // import router
const email = ref("");
const password = ref("");
const router = useRouter() // get a reference to our vue router 

const register = () => {
    // need .value because ref()
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log("Successfully registered!")
        router.push('/game') // redirect to the game
    })
    .catch((error) => {
        console.log(error.code);
        alert(error.message)
    })
};
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result) => {
        console.log(result.user)
        router.push("/game")
    })
    .catch((error) => {

    });
};
</script>