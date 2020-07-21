<template>
    <el-button :icon="iconType" @click="toggleClick" class="hamburger-btn"></el-button>
</template>

<script>
    export default {
        name: 'Hamburger',
        props: {
            isActive: {
                type: Boolean,
            }
        },
        methods: {
            toggleClick() {
                this.$emit('toggleClick')
            }
        },
        computed: {
            iconType() {
                return this.isActive ?  'el-icon-s-fold':'el-icon-s-unfold';
            }
        }

    }
</script>

<style lang="less" scoped>
    .hamburger-btn {
        background: transparent;
        border: none;
        color: #333;
        &:hover {
            background: rgba(0,0,0,0.025);
        }
    }
</style>