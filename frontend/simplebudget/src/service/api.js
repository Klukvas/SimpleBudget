import axios from "axios";

export class Api{


  async sendRequest(config){

    try{
      const response = await axios(config)
      if (response.status === 200){
        return response.data
      }
    }catch{
      console.log(`Something went wrong with: ${config}`)
    }
  }

  getMainUrl(){
    return 'http://127.0.0.1:8000/api'
  }

}