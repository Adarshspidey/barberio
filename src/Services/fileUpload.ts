import apiCall from "./apiCall";
export default (url:string, file:string)=> apiCall(url,"POST",file,true)