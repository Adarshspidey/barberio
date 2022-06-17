import { isSourceFile } from "typescript";
import apiUrl from "../Config/apiUrl";

export default async (url: string, method: string, data?:{}, isFile = false)=>{
    let response = await fetch(`${apiUrl}${url}`,{
        method,
        headers: isFile
        ? undefined
        : {
           "Content-Type" : "application/json",
              "Authorization" : `Bearer ${localStorage.getItem("token")}`
         },
        body: (isFile && data) || data ? JSON.stringify(data) : undefined,

    });
    return response.json();

}