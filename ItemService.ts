import axios from "axios"
import IDataList from "../models/IDataList";

const getItemService = () => {
    return axios.get<IDataList[]>(`http://localhost:3001/items`)
    .then(response => response.data);
}

const pushDataFronUser = (newPurchase : Omit<IDataList, "id">)=>{
    return axios.post<IDataList>(`http://localhost:3001/items`,newPurchase,
    {
        headers:{
            'Content-Type':'application/json'
        }
    }

    )
    .then(response => response.data)
}
 
export {
    getItemService,
    pushDataFronUser
}