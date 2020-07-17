<template>
    <component :is="type" v-bind="linkProps()">
        <slot></slot>
    </component>
</template>

<script>
    export default {
        props: {
            to: {
                type: String,
                required: true
            },
            isExternal: {
                type: Boolean,
                required: true
            }
        },
        computed: {
            type() {
                if (this.isExternal){
                    return 'a';
                } else {
                    return 'router-link'
                }
            }
        },
        methods: {
            linkProps() {
                if (this.isExternal) {
                    return {
                        href: this.to,
                        target: '_blank',
                        rel: 'noopener'
                    }
                } else {
                    return {
                        to: this.to
                    }
                }

            }
        }
    }
</script>

<style>

</style>