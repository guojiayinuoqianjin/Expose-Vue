<style scoped>
.index {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    text-align: center;
}

.index h1 {
    height: 50px;
}

.index h1 img {
    height: 100%;
}

.index h2 {
    color: #666;
    margin-bottom: 200px;
}

.index h2 p {
    margin: 20px 0 50px;
}

.index .ivu-row-flex {
    height: 100%;
}
img{
    width: 120px;
    height: 120px;
}
</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
            <h1>
                曝光平台
            </h1>
            <div class="demo-avatar">
               <img src="http://api.bbaaoo.cn/public/image/bao.png" alt="">
            </div>

            <h2>
                <p>曝光吧,让更多的人防止被骗,打击举报骗子！</p>
                <Button type="ghost" @click="handleStart">下载app </Button>
            </h2>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    methods: {
        handleStart() {
            window.location.href = "http://api.bbaaoo.cn/public/download.html";
        }
    }
};
</script>