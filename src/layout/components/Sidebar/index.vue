<template>
    <div class="sidebar-container">
        <!--<logo :collapse="isCollapse"></logo>-->
        this is side bar
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu default-active="1" class="el-menu-container" :collapse="isCollapse">
                <sidebar-item v-for="route in allRoutes" :item="route" :key="route.path" :base-path="route.path"> </sidebar-item>
            </el-menu>

        </el-scrollbar>
    </div>
</template>

<script>
    import { constantRoutes as allRoutes} from "@/router";
    import SidebarItem from './SidebarItem'
    export default {
        name: 'Sidebar',
        components: { SidebarItem },
        data() {
            console.error('test', allRoutes);
            return {
                isCollapse: false,
                allRoutes: allRoutes
            }
        }
    }

</script>

<style>

</style>