import axios from "axios";
import{base_url} from "./index"

export async function getAllUsers() {
    let result;
    result = await axios(base_url +"/users").then((res)=>{
        return res.data;
    });
    return result;
}

