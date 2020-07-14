<template>
    <section class="app-main">
        <div> this is app main</div>
        <transition name="fade-transform" mode="out-in">
            <router-view :key="key"></router-view>
        </transition>
    </section>
</template>

<script>
    export default {
        name: 'AppMain',
        computed: {
            key() {
                return this.$route.path
            }
        }
    }
</script>

<style lang="less" scoped>
    .app-main {
        background: lightblue;
    }
</style>