import axios from "axios";
import {base_url} from "./index"

export async function getAllProducts() {
    let result;
    result = await axios(base_url + "/products").then((res)=>{
        return res.data;
    });
    return result;
}