import Request from ".";
const request = new Request().http;
//测试的基础url，暂时用不着
let testBaseUrl = "http://127.0.0.1:4523/m1/4020303-0-default/"

//封装的get和post请求
function get(url, header, data) {
    return request({
        url: url,
        method: "GET",
        header: header,
        data: data
    })
}

function post(url, header, data) {
    return request({
        url: url,
        method: "POST",
        header: header,
        data: data
    })
}



// tag 外部结构,api的使用从这里开始
const  api = {

     //获取某个id对应天的市场信息
     async requestMarketsById(userId,data) {
        //如果有动态参数参考这里
       // var url = testBaseUrl+`CFT/${encodeURIComponent(userId)}/`;
       //目前直接写全部的url，不做分段处理
       var url = "http://127.0.0.1:4523/m1/4020303-0-default/coffee/1/getMarketsPerDay"
        //使用get方法
       return await get(url,{},data)
    },
}

export default api;