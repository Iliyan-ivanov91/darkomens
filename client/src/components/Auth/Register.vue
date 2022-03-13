<template>
    <div class="flex flex-col items-center w-1/3 bg-gray-700 text-white rounded p-4 drop-shadow">
        <h1 class="text-4xl mb-6 text-green-300">Create an Account</h1>
        <input class="mb-4 bg-gray-300 rounded px-4 py-1" type="text" placeholder="Email" v-model="email">
        <input class="mb-4 bg-gray-300 rounded px-4 py-1" type="password" placeholder="Password" v-model="password">
        <button class="bg-green-300 px-4 py-2 rounded text-gray-700 font-bold mb-4" @click="register">Create Account</button>
        <button class="bg-green-300 px-4 py-2 rounded text-gray-700 font-bold mb-4" @click="signInWithGoogle">Sign up with Google</button>
        <p class="text-gray-400">Already have an account? <button class="text-white" @click="$emit('switch')">Log in</button></p>
    </div>
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
const emit = defineEmits(['switch'])
</script>