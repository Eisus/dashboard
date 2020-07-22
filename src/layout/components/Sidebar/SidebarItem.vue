<template>
    <div v-if="!item.hidden">
        <template v-if="hasOnlyOneChild(item.children, item)">
            <app-link :to="resolvePath(currentItem.path)" :isExternal="isExternal">
                <el-menu-item :index="resolvePath(currentItem.path)">
                    <item :icon="currentItem.meta.icon" :title="currentItem.meta.title"></item>
                </el-menu-item>
            </app-link>
        </template>
        <el-submenu v-else index="resolvePath(item.path)" popper-append-to-body>
            <template slot="title">
                <item v-if="item.meta" :icon="item.meta.icon" :title="item.meta.title"></item>
            </template>
            <sidebar-item v-for="child in item.children"
                          :key="child.path"
                          :base-path="resolvePath(child.path)"
                          :item="child"
                          :isNest="true"
                          class="nest-menu"></sidebar-item>
        </el-submenu>
    </div>
</template>

<script>
    import AppLink from './Link'
    import Item from './Item'
    import { isExternal } from '@/utils/validate.js'
    export default {
        name: 'SidebarItem',
        props: {
            item: {
                type: Object,
                required: true
            },
            basePath: {
                type: String,
                required: true
            },
            // true when the nav is nested
            isNest: {
                type: Boolean,
                required: false
            }
        },
        components: { AppLink, Item },
        data() {
            return {
                currentItem: null,
                isExternal: false
            }
        },
        methods: {
            hasOnlyOneChild(children=[], item) {
                const showingItem =  children.filter(child => {
                    if (child.hidden) {
                        return false;
                    } else {
                        return true;
                    }
                });
                if (showingItem.length === 0) {
                    this.currentItem = item;
                    return true;
                } else if (showingItem.length === 1) {
                    this.currentItem = children[0];
                    console.log(this.currentItem);
                    return true;
                }
                return false;
            },
            resolvePath(routePath) {
                const basePath = this.basePath;
                if (this.isNest) {
                    return basePath;
                }
                if (isExternal(routePath)) {
                    this.isExternal = true;
                    return routePath;
                } else {
                    if (basePath === '/') {
                        return (basePath + routePath)
                    } else {
                        return (basePath + '/' + routePath)
                    }
                }
            }
        }
    }
</script>

<style lang="less">
    /**
    Note:
    <el-menu> 根据 :collapse 自动隐藏导航栏文字部分，留下icon，但隐藏条件为：
    .el-menu--collapse>.el-submenu>.el-submenu__title span
    在生成组件的过程中破坏了该匹配规则，故应自己书写相应规则

     */
    .el-menu--collapse > div > .el-submenu > .el-submenu__title span {
        display: none;
    }
    .el-menu--collapse > div > .el-submenu > .el-submenu__title .el-submenu__icon-arrow {
        display: none;
    }

</style>