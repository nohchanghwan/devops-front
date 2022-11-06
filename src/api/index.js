import axios from 'axios';

const config = {
    // baseUrl: 'http://localhost:1337/api/'
    baseUrl: 'http://43.200.122.157:1337/api/'
}

function getApiListTest(){
    return axios.get(config.baseUrl + 'apilisttests');
    // return axios.get(`${config.baseUrl}apilisttests`);
}

function getApiBasic(){
    return axios.get(config.baseUrl + 'api-basics');
}

function getApiBasicId(id){
    return axios.get(config.baseUrl + `api-basics/?filters[apiNm][$eq]=` + `${id}`);
}

function getApiBasicProviderId(id){
    return axios.get(config.baseUrl + `api-basics/?filters[providerID][$eq]=` + `${id}`);
}

function getApiDetails(id){
    return axios.get(config.baseUrl + `api-details/?filters[apiNm][$eq]=` + `${id}`);
}

function getApiDetailsReq(id){
    return axios.get(config.baseUrl + `api-details/?filters[apiNm][$eq]=` + `${id}` + `&filters[inputDistcd][$eq]=1`);
}

function getApiDetailsRes(id){
    return axios.get(config.baseUrl + `api-details/?filters[apiNm][$eq]=` + `${id}` + `&filters[inputDistcd][$eq]=2`);
}

function getProviderList(){
    return axios.get(config.baseUrl + 'providers')
}
function getProviderSearch(id){
    return axios.get(config.baseUrl + `api-basics?_q=` + `${id}`)
}

function getApiDetailCode(data){
    return axios.get(config.baseUrl + `api-detail-codes/?filters[instanceCode][$eq]=` + `${data}`)
}

function postLogin(data){
    return axios.post(config.baseUrl + 'auth/local', data);
}

function postRegister(data){
    return axios.post(config.baseUrl + 'auth/local/register', data);
}

function getApiUsingRequestStatuses(){
    return axios.get(config.baseUrl + 'api-using-request-statuses');
}

function postApiUsingRequestStatuses(data){
    return axios.post(config.baseUrl + 'api-using-request-statuses', {
        data: data
    });
}

function updateApiUsingRequestStatuses(id,data){
    return axios.put(config.baseUrl + 'api-using-request-statuses/'+ `${id}`,{
        data: data
    });
}

export {
    getApiListTest,
    getApiBasic,
    postLogin,
    postRegister,
    getApiBasicId,
    getApiDetails,
    getApiDetailsReq,
    getApiDetailsRes,
    getApiUsingRequestStatuses,
    getProviderList,
    getProviderSearch,
    postApiUsingRequestStatuses,
    getApiBasicProviderId,
    getApiDetailCode,
    updateApiUsingRequestStatuses
}


