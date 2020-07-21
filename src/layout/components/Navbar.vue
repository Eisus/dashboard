<template>
    <div class="nav-bar">
        <hamburger @toggleClick="toggleSidebar" :isActive="isActive" class="sidebar-toggle" />


    </div>
</template>

<script>
    import Hamburger from '@/components/Hamburger';
    export default {
        name: 'Navbar',
        components: { Hamburger },
        data() {
            return {
                isActive: true
            }
        },
        methods: {
            toggleSidebar() {
                this.isActive = !this.isActive;
                console.log('toggle', this.isActive)

            }
        }
    }
</script>

<style lang="less" scoped>
    .sidebar-toggle {
        padding: 23px 18px;
        margin-left: -20px;
    }

</style>