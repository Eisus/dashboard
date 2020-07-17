<template>
    <div v-if="!item.hidden">
        this is sidebar item
        <template v-if="hasOnlyOneChild(item.children, item)">
            this is applink
            <app-link :to="resolvePath(currentItem.path)" :isExternal="isExternal">
                <span>{{ currentItem.name }}</span>
            </app-link>

        </template>
        <span v-else>hidden</span>
        <!--<el-submenu v-else>-->
            <!--<span>hidden</span>-->
        <!--</el-submenu>-->


    </div>
</template>

<script>
    import AppLink from './Link'
    import { isExternal } from '@/utils/validate.js'
    export default {
        name: 'SidebarItem',
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        components: { AppLink },
        data() {
            return {
                currentItem: null,
                isExternal: false
            }
        },
        methods: {
            hasOnlyOneChild(children, item) {
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
                    return true;
                }
                return false;
            },
            resolvePath(routePath) {
                const basePath = this.item.path;
                // const routePath = this.currentItem.path;
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

<style></style>