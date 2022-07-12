import apiUrl from "../Config/apiUrl";

export default async (url: string, method: string, data?:any, isFile = false)=>{
    const formData = new FormData();
    if(isFile && data instanceof File){
        formData.append("file", data);
    }
    const headers = new Headers();

    if(!isFile)
        headers.append("Content-Type", "application/json");

    if(localStorage.getItem("token"))
        headers.append("Authorization", `Bearer ${localStorage.getItem("token")}`);
    
    let response = await fetch(
        `${apiUrl}${url}`,
        {
        method,
        headers,
        body: isFile? formData : data ? JSON.stringify(data) : undefined,
        }
    );
    return response.json();

}