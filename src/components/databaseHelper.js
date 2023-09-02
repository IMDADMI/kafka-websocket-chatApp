import axios from "axios";
export const request = async (method,url,data)=>{
    // data : {q:a,q:a}
    return await axios({
        method:method,
        url:url,
        data:data
    });

} 
