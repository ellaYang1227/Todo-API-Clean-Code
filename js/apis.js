const API_ROOT = 'https://todolist-api.hexschool.io/';
const axiosRequest = axios.create({
    baseURL: API_ROOT,
    timeout: 1000
});

async function fetchAPI (url, { method = 'get', body, isAuthorization }) {
    try {
        if (isAuthorization) {
            const token = localStorage.getItem('token');
            axiosRequest.defaults.headers.common['Authorization'] = token;
        }

        const { data: apiResponseData } = await axiosRequest[method](url, body);
        return apiResponseData;
    } catch ({ response: errorResponse }) {
        const defaultErrorMessage = { status: false, message: '發生不明錯誤' };
        throw(errorResponse?.data ? errorResponse.data :  defaultErrorMessage);
    }
}

export {
    fetchAPI
}