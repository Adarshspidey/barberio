
// import apiCall from "./apiCall";
// export default (url:string, file:File)=> apiCall(url,"POST",file,true)

const fileUpload = async (data:FormData, url:string) => {
    try {
        const response = await fetch(process.env.REACT_APP_API_URL + url, {
            method: "POST",
            body: data,
            mode: "cors"
        });
        return response.json();
    } catch (error) {
        return { networkError: true };
    }
};

export default fileUpload;