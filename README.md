# coffee_flower_user_front
这里是咖啡花价市场的用户端前端
采用uniapp开发


已经安装dayjs       &nbsp;&nbsp;&nbsp;   npm install dayjs<br>
       scss        &nbsp;&nbsp;&nbsp;   npm install sass --save-dev<br>
       uview-plus  &nbsp;&nbsp;&nbsp;   npm install uview-plus@latest
 <br>

pages文件夹下是每个界面的路由的主文件，可以理解为每个界面的入口<br>
request文件夹是请求的api的封装文件，其中api用来写新的请求，index已经完成不用修改（除了后续的DELELE等）<br>
components是普通组件，一般是pages入口文件的组成部分，但是目前还没有细分更小的文件夹<br>
styles是全局的样式文件，需要在App.vue中引入<br>
api如何使用详见markets.vue<br>
需要先配置apifox并更改market.vue中的url为自己apifox接口的url，以及api.js中的url为自己的url<br>
