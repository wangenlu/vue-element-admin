import request from '@/utils/request'
export function getRedisValue(query) {
  return request({
    url: '/service/test/redis',
    method: 'get'
  })
}
