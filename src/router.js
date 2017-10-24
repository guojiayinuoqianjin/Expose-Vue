const routers = [{
    path: '/',
    meta: {
        title: '曝光吧,让更多的人防止被骗,打击举报骗子！'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}];
export default routers;
