<template>
    <div class="app-wrapper">
        <div>This is layout</div>
        <sidebar class="sidebar-container"/>
        <div class="main-container">
            <div>
                <!--<navbar />-->
                <tags-view />
            </div>
            <app-main />
            <!--<right-panel>-->
                <!--<settings />-->
            <!--</right-panel>-->

        </div>
    </div>
</template>

<script>
    import { AppMain , TagsView} from './components'
    export default {
        name: 'Layout',
        components: {AppMain, TagsView} // NOTE-BugFix: OBJECT !!!!
    }

</script>

<style>

</style>