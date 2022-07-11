import apiCall from "./apiCall";
export default (url:string, file:File)=> apiCall(url,"POST",file,true)