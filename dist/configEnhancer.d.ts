import { AxiosRequestConfig } from 'axios';
import { IDestinationData, IHTTPDestinationConfiguration } from 'sap-cf-destconn';
export default function enhanceConfig(config: AxiosRequestConfig, destination: IDestinationData<IHTTPDestinationConfiguration>): Promise<{
    baseURL: string;
    url?: string | undefined;
    method?: string | undefined;
    transformRequest?: import("axios").AxiosRequestTransformer | import("axios").AxiosRequestTransformer[] | undefined;
    transformResponse?: import("axios").AxiosResponseTransformer | import("axios").AxiosResponseTransformer[] | undefined;
    headers?: import("axios").AxiosRequestHeaders | undefined;
    params?: any;
    paramsSerializer?: ((params: any) => string) | undefined;
    data?: any;
    timeout?: number | undefined;
    timeoutErrorMessage?: string | undefined;
    withCredentials?: boolean | undefined;
    adapter?: import("axios").AxiosAdapter | undefined;
    auth?: import("axios").AxiosBasicCredentials | undefined;
    responseType?: import("axios").ResponseType | undefined;
    responseEncoding?: string | undefined;
    xsrfCookieName?: string | undefined;
    xsrfHeaderName?: string | undefined;
    onUploadProgress?: ((progressEvent: any) => void) | undefined;
    onDownloadProgress?: ((progressEvent: any) => void) | undefined;
    maxContentLength?: number | undefined;
    validateStatus?: ((status: number) => boolean) | null | undefined;
    maxBodyLength?: number | undefined;
    maxRedirects?: number | undefined;
    beforeRedirect?: ((options: Record<string, any>, responseDetails: {
        headers: Record<string, string>;
    }) => void) | undefined;
    socketPath?: string | null | undefined;
    httpAgent?: any;
    httpsAgent?: any;
    proxy?: false | import("axios").AxiosProxyConfig | undefined;
    cancelToken?: import("axios").CancelToken | undefined;
    decompress?: boolean | undefined;
    transitional?: import("axios").TransitionalOptions | undefined;
    signal?: AbortSignal | undefined;
    insecureHTTPParser?: boolean | undefined;
    env?: {
        FormData?: (new (...args: any[]) => object) | undefined;
    } | undefined;
}>;
