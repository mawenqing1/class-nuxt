import { message } from 'ant-design-vue';
import { $fetch } from 'ohmyfetch'
import type { FetchRequest, FetchOptions } from 'ohmyfetch'

export const baseUrl = 'http://127.0.0.1:8081/api'

const _useApi = $fetch.create({
    baseURL: baseUrl,
    async onRequest() {

    },
    async onResponse({response}) {
        const data = response._data;
        if (data.code !== 1) {
            message.error(data.msg)
        }
    }
})

export const useApi = async function(request: FetchRequest, options?: FetchOptions<'json'>) {
    return await _useApi(request, options)
}