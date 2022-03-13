<template>
    <div class="flex flex-col items-center w-1/3 bg-gray-700 text-white rounded p-4 drop-shadow">
        <h1 class="text-4xl mb-6 text-green-300">Login to an Account</h1>
        <input class="mb-4 bg-gray-300 rounded px-4 py-1" type="text" placeholder="Email" v-model="email">
        <input class="mb-4 bg-gray-300 rounded px-4 py-1" type="password" placeholder="Password" v-model="password">
        <p v-if="errMsg">{{ errMsg }}</p>
        <button class="bg-green-300 px-4 py-2 rounded text-gray-700 font-bold mb-4" @click="register">Login</button>
        <hr>
        <button class="bg-green-300 px-4 py-2 rounded text-gray-700 font-bold mb-4" @click="signInWithGoogle">Sign in with Google</button>
        <p class="text-gray-400">Don't have an account? <button class="text-white" @click="$emit('switch')">Register</button></p>
    </div>
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

const emit = defineEmits(['switch'])
const signInWithGoogle = () => {

};
</script>

<style>
</style>