<template>
    <div class="sidebar-container">
        <!--<logo :collapse="isCollapse"></logo>-->
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <!-- collapse-transition=true 会出现导航栏文字闪现的问题-->
            <el-menu class="el-menu-container"
                     :background-color="sidebarStyle.bg"
                     :text-color="sidebarStyle.textColor"
                     :active-text-color="sidebarStyle.activeTextColor"
                     :collapse-transition="false"
                     :collapse="isCollapsed"
            >
                <sidebar-item v-for="route in allRoutes" :item="route" :key="route.path" :base-path="route.path"> </sidebar-item>
            </el-menu>

        </el-scrollbar>
    </div>
</template>

<script>
    import { constantRoutes as allRoutes} from "@/router";
    import SidebarItem from './SidebarItem';
    export default {
        name: 'Sidebar',
        components: { SidebarItem },
        props: {
            isCollapsed: {
                type: Boolean,
            }
        },
        data() {
            console.error('test', allRoutes);
            return {
                // isCollapse: false,
                allRoutes: allRoutes,
                sidebarStyle: {
                    bg: '#304156',
                    textColor: '#BFCBD9',
                    activeTextColor: '#409EFF'


                }
            }
        }
    }

</script>

<style lang="less" scoped>
    .sidebar-container {
        height: 100%;
        /*border-right: 1px solid #e6e6e6;*/
        background: #304156;
    }
    .el-menu-container{
        border-right: 0;
    }

</style>