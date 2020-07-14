<template>
    <div class="login-container">
        <el-form ref="form" :model="form" :rules="loginRules" autocomplete="off" class="login-form">
            <div class="form-title">
                <h3>Login</h3>
            </div>
            <el-form-item label="Login Name" prop="username">
                <el-input v-model="form.username"
                          ref="username"
                          name="username"
                          placeholder="Please enter user name"
                          tabindex="1"
                          autocomplete="off"
                          prefix-icon="el-icon-user"></el-input>
            </el-form-item>
            <el-tooltip v-model="capsTooltip" content="Caps lock is on" placement="right" manual>
                <el-form-item label="Password" prop="password">
                    <el-input v-model="form.password"
                              ref="password"
                              name="password"
                              tabindex="2"
                              autocomplete="off"
                              prefix-icon="el-icon-key"
                              placeholder="Please enter"
                              @keyup.native="checkCapslock"
                              @blur="capsTooltip=false"
                              show-password></el-input>
                </el-form-item>
            </el-tooltip>
            <el-button :loading="isLoading" type="primary" @click.native.prevent="handleLogin" class="login-btn">Login</el-button>
        </el-form>

    </div>


</template>

<script>
    /**
     * KeyPoint: about :rules in el-form
     * Each key refers to a prop and validator can be use to customize validate rules.
     * eg. username: [{required: true, trigger: 'blur', validator: validateFunc}] --> validateFunc refers
     * to a specific validation function
     */
    /**
     * KeyPoint: about event modifiers
     *  .stop: stop propagation
     *  .prevent: prevent default behavior
     *  .capture: an event targeting an inner element is handled here before being handled
     *  .self: only trigger handler if event target is element itself
     *  .native: when listening directly to a native event on the root element of a component
     */
    /**
     * KeyPoint: $refs
     * Refs are Vue instance properties used to register or indicate a reference to HTML elements or child
     * elements in the template of the application.
     * eg. this.$refs.username --> the username is the reference name earlier created inside the element (ref='username')
     */
    /**
     * KeyPoint: lifecycle and lifecycle hooks
     *  new Vue -- (beforeCreate) -- init event and life -- (created) -- init injection and validation -- (beforeMount) --
     *  create vm.$el to replace el -- (mounted) -- finish mounting -- (beforeUpdate) -- (updated)
     *  !! NOTE: mounted does not guarantee that all child components have also been mounted.
     *          if you want to wait until the entire view has been rendered, vm.$nextTick can be used inside of mounted
     *          This hook is not called during server-side-rendering
     */
    /**
     * KeyPoint: Vue Route
     * <router-link> can be used to create anchor tags for declarative navigation
     *  router.push(location, onComplete?, onAbort?) --> by this.$router()
     *              can be used to navigate to different URL. This method pushes a new entry into the history stack
     *              so when the user clicks the browser back button they will be back to the previous URL.
     */
    export default {
        name: 'Login',
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                },
                capsTooltip: false,
                isLoading: false,
                otherQuery: {},
                loginRules: {
                    username: [
                        { required: true, message: 'This area cannot be empty', trigger: 'blur'}
                    ],
                    password: [
                        { required: true, message: 'This area cannot be empty', trigger: 'blur'}
                    ]
                }
            }
        },
        watch: {
            $route: {
                handler: function(route) {
                    const query = route.query
                    if (query) {
                        this.redirect = query.redirect
                        this.otherQuery = this.getOtherQuery(query)
                    }
                },
                immediate: true
            }
        },
        mounted() {
            if (this.form.username === '') {
                this.$refs.username.focus()
            } else if (this.form.password === '') {
                this.$refs.password.focus()
            }

        },
        methods: {
            checkCapslock(e) {
                const { key } = e
                this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
            },
            handleLogin() {
                this.$refs.form.validate(isValid => {
                    if (isValid) {
                        this.isLoading = true;
                        this.$router.push('/')
                    } else {
                        return false;
                    }
                })
            },
            getOtherQuery(query) {
                return Object.keys(query).reduce((acc, cur) => {
                    if (cur !== 'redirect') {
                        acc[cur] = query[cur]
                    }
                    return acc
                }, {})
            }

        }
    }
</script>

<style lang="less" scoped>
    .login-container {
        width: 100%;
        min-height: 100%;
        overflow: auto;
        .login-form {
            margin: 0 auto;
            width: 520px;
            padding: 160px 35px 0;
        }
        .login-btn {
            width: 100%;
            margin-top: 20px
        }

    }

</style>