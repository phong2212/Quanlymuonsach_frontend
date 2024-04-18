<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
    components: {
        AppHeader,
    },
    data() {
        return {
            isLoggedIn: false,
        };
    },
    computed: {
        isHeaderVisible() {
            return this.$route.path !== '/';
        },
    },
};
</script>
<template>
    <div id="app">
        <AppHeader v-if="isLoggedIn" />
        <div class="container mt-3">
            <router-view />
        </div>
    </div>
</template>
<style>
.page {
    max-width: 400px;
    margin: auto;
}
</style>