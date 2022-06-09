import apiCall from "./apiCall";

export default (url:string, data:{}) => apiCall (url, "POST", data);