import request from '@/utils/request'

//项目列表--版本备份-删除   fromData提交方式
export function delProVersionAxios(params) {
   return request({
        url: "/job/project/projectBackupDel",
        method: 'post',
        data:Qs.stringify(params)
    })
}
//项目列表-- 添加/编辑   application/json方式
export function submitReturnAxios(params) {
   return request({
        url: "/job/project/projectBackupRestore",
        method: 'post',
        data:params
    })
}
//负载均衡(灰度发布)--列表数据
export function getGrayListData(params) {
    return request({
        url: "/gtway/list",
        method: "get",
        params: params
    });
}

