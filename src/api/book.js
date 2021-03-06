import request from '@/utils/request';

export const createBook = (data) => {
  return request({
    url:'/book/create',
    method:'post',
    data
  })
}

export const updateBook = (data) => {
  return request({
    url:'/book/update',
    method:'post',
    data
  })
}

export const getBook = (fileName) => {
  return request({
    url:'/book/get',
    method:'get',
    params: { fileName },
  })
}

export const getCategory = () => {
  return request({
    url:'/book/category',
    method:'get'
  })
}

export const listBook = (query) => {
  return request({
    url:'/book/list',
    method: 'post',
    params: query,
  })
}

export const deleteBook = (fileName) => {
  return request({
    url:'/book/delete',
    method: 'get',
    params: { fileName },
  })
}