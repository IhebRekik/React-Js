

import axios from "axios";

export const getCas = async()=>{

    try {
        const response = await axios.get(`https://serveurspring-hxd7d3gkc5ewcrfm.southafricanorth-01.azurewebsites.net/utilisateur/getKey`);
        return response.data;
      } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
      }

}
