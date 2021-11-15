import { request } from './request';

// 首页所有数据
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

// 商品数据
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}