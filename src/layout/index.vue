<template>
    <el-container class="app-container">
        <el-aside class="side-nav-container" :class="{isCollapsed: isSidebarCollapsed}">
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
                isSidebarCollapsed: false
            }
        },
        methods: {
            toggleSidebar() {
                this.isSidebarCollapsed = !this.isSidebarCollapsed;
            }
        }
    }

</script>

<style lang="less">
    .side-nav-container {
        width: 200px !important;
        -webkit-transition: width 0.3s;
        -moz-transition: width 0.3s;
        -ms-transition: width 0.3s;
        -o-transition: width 0.3s;
        transition: width 0.3s;
    }
    .side-nav-container.isCollapsed {
        width: 64px !important;
    }
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