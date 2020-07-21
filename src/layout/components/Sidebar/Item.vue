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
     * no lifecycle methods can be marked as functional.It means these components are stateless
     * and instanceless.
     * Vue.component('my-component', {
        functional: true,
        props: {},
        render: function(createElement, context) {}
       })
     * Note: it is stateless and instanceless. To compensate for the lack of an instance, context is provided.
     *       Everything the component needs is passed through context.
     * Use: cheaper to render so they're useful as wrapper components:
     *      eg.programmatically choose one of several other components
     *      eg.manipulate children, props, or data before passing them on to a child component
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
        render (createElement, context) {
            const {icon, title} = context.props;
            const vnodes = [];
            if (icon) {
                vnodes.push(<i class={icon}></i>)
            }
            if (title) {
                vnodes.push(<span slot='title'>{(title)}</span>)
            }
            return vnodes;
        }
    }
</script>