<template>
    <el-container class="app-container">
        <el-aside style="width: 200px">
            <sidebar :isCollapsed="isSidebarCollapsed"/>
        </el-aside>
        <el-main class="main-container">
            <el-header class="head-container">
                <navbar @toggleSidebar="toggleSidebar" />
                <!--<tags-view />-->
            </el-header>
            <el-container>
                <!--<right-panel>-->
                <!--<settings />-->
                <!--</right-panel>-->
                <el-main>
                    <app-main />
                </el-main>
            </el-container>

        </el-main>

    </el-container>
</template>

<script>
    /**
     * KeyPoint: about layout container
     * <el-container> : !! when nested with a <el-header> or <el-footer>, all its elements will be vertically
     *                  arranged. Otherwise horizontally.
     *
     *
     */
    import { AppMain , Sidebar, Navbar } from './components'
    export default {
        name: 'Layout',
        components: {AppMain,  Sidebar, Navbar}, // NOTE-BugFix: OBJECT !!!!,
        data() {
            return {
                isSidebarCollapsed: {
                    type: Boolean,
                    default: false
                }
            }
        },
        methods: {
            toggleSidebar() {
                this.isSidebarCollapsed = !this.isSidebarCollapsed;
            }
        }
    }

</script>

<style lang="less" scoped>
    .app-container {
        height: 100%;
        background-color: #f0f2f5;
        .el-aside {
            height: 100%;
            background: #fff;
        }
        .el-header {
            background: #fff;
        }
    }
    .main-container {
        padding: 0;
    }

</style>