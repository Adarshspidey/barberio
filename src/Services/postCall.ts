import apiCall from "./apiCall";

export default (url:string, data:string) => apiCall (url, "POST", data);