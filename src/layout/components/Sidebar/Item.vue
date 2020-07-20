<script>
    /**
     * KeyPoint: vm.$slots
     * -- programmatically access content distributed by slots
     * -- each named slot has its own corresponding property, eg. v-slot:foo will be found at vm.$slots.foo
     * -- the default properties contain either nodes not included in a named slot or contents of v-slot:default
     * -- vm.slots is most useful when writing a component with a render function
     */
    /**
     * KeyPoint: render function
     *  -- render(createElement)
     *  -- render (h) use JSX with vue, make it closer to templates
     *      aliasing createElement to h is a common convention in Vue ecosystem and
     *      it is actually required for JSX
     */
    /**
     * KeyPoint: functional components
     * for the components that don't manage any state, watch any state passed to it, and have
     * no lifecycle methods can be marked as functional.It means these compo
     */
    export default {
        name: 'MenuItem',
        functional: true,
        props: {
            icon: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            }
        },
        render(createElement, context) {
            const {icon, title} = context.props;
            console.log('render', icon, title)
            return createElement('h1', title)
        }
    }
</script>