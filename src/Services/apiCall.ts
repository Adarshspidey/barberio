import apiUrl from "../Config/apiUrl";

export default async (url: string, method: string, data?:any, isFile = false)=>{
    if(isFile && data instanceof File){
        const formData = new FormData();
        formData.append("file", data);
    }
    let response = await fetch(`${apiUrl}${url}`,{
        method,
        headers: isFile
        ? undefined
        : {
           "Content-Type" : "application/json",
              "Authorization" : `Bearer ${localStorage.getItem("token")}`
         },
        body: (isFile && FormData) || data ? JSON.stringify(data) : undefined,

    });
    return response.json();

}