<template src="./index.html"></template>
<script>
import bus from '../../util/bus';
export default {
    data() {
        return {
            collapse: false,
            items: [],
            routes: {}
        };
    },
    computed: {
        onRoutes(e) {
            return this.$route.path.replace('/', '');
        }
    },
    methods: {
        //unique-opened
        meautree(userobj) {
            var meau = [
                {
                    icon: 'el-icon-s-home',
                    resName: '首页',
                    resCode: 'homePage'
                },
            ];
            return meau;
        },
        forchangeMeau() {
            this.collapse = !this.collapse;
            bus.$emit('collapse-content', this.collapse);
        }
    },
    created() {
        this.items = this.meautree();
    }
};
</script>

<style scoped lang="less">
@import url('./index.less');
</style>
