<template>
    <h1>You are logged in!</h1>
    <button @click="handleSignOut">Sign out</button>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from '../router';

const isLoggedIn = ref(false)
let auth;
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user) {
            isLoggedIn.value = true;
        } else {
            isLoggedIn.value = false
        }
    })
});

const handleSignOut = () => {
    signOut(auth).then(() => {
        router.push("/");
    })
};

</script>