const routers = [{
    path: '/',
    meta: {
        title: '曝光平台-让更多的人防止被骗'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}];
export default routers;
