import { message } from 'ant-design-vue';
import { $fetch } from 'ohmyfetch'
import type { FetchRequest, FetchOptions } from 'ohmyfetch'
import { IApiBase } from '~~/types/api';

export const baseUrl = 'http://127.0.0.1:8081/api'

const _useApi = $fetch.create({
    baseURL: baseUrl,
    async onRequest({ options }) {
        const { token } = $(useUser())
        options.headers = new Headers(options.headers)
        if (token) options.headers.set('authorization', token)
    },
    async onResponse({ response }) {
        const data = response._data;
        if (data.code !== 1) {
            if (data.code === 270004) return;
            if (data.code === 250004) return;
            if (data.code === 280001) return;
            message.error(data.msg);
        }
    }
})

export const useApi = async <T = any>(request: FetchRequest, options?: FetchOptions<'json'>) => {
    return await _useApi<IApiBase<T>>(request, options)
}