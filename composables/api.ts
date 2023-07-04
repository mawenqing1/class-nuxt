import { $fetch } from 'ohmyfetch'
import type { FetchRequest, FetchOptions } from 'ohmyfetch'

export const baseUrl = 'http://127.0.0.1:8081'

const _useApi = $fetch.create({
    baseURL: baseUrl,
    async onRequest() {

    },
    async onResponse() {

    }
})

export const useApi = async function(request: FetchRequest, options?: FetchOptions<'json'>) {
    return await _useApi(request, options)
}