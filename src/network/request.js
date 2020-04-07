import axios from 'axios'

export function request(config){
    //1.创建axios的实例
       const instance = axios.create({
            baseURL: "http://106.54.54.237:8000/api/h8",
            timeout: 5000
    })

    //2.axios拦截器
    //2.1请求拦截的作用
    axios.interceptors.request.use(config => {
        console.log(config)
        //1.不如说config中的一些信息不符合服务器的要求
        //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
        //3.某些网络请求（比如登陆（token）），必须携带一些特殊的信息
        return config
    },err => {
        console.log(err)
    })

    //2.2 相应拦截的作用
    axios.interceptors.response.use(res => {
        console.log(res)
    },err => {
        console.log(err)
    })
    //3.发送真正的网络请求
    return instance(config)   
}


// export function request(config, success, failure){
//     //1.创建axios的实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })

//     //发送真正的网络请求
//     instance(config)
//         .then(res => {
//             //console.log(res)
//             success(res)
//         })
//         .catch(err => {
//             //console.log(err)
//             failure(err)
//         })
// }