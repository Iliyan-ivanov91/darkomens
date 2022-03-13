<template>
    <div class="flex items-center justify-center h-full min-h-screen custom-bg">
        <div class="container flex items-center justify-center">
            <component :is="tab.isRegister ? Register : Login" @switch="tab.isRegister=!tab.isRegister"/>
        </div>
    </div>
</template>

<script setup>
import Login from "../components/Auth/Login.vue";
import Register from "../components/Auth/Register.vue";
import {reactive} from 'vue'

const tab = reactive({isRegister : true});
</script>

<style>
.custom-bg {
    background: url("../assets/lobby/1.jpg");
    background-size: cover;
}
.custom-2-bg {
    background: url("../assets/lobby/2.jpg");
    background-size: cover;
}
</style>