import {Api} from "./api";

export class SubCategoryApi extends Api{
  async getSubCategories(id){
    const url = id ? `${this.getMainUrl()}/subcategory/${id}` : `${this.getMainUrl()}/subcategory`
    const config = {
      url: url,
      method: 'get',
      headers: {
          'Authorization': 'token DEBUG_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6LTEsImV4cCI6MTY5Njg0NjA0OH0.c11jnH2n4ej_FZcOiV2IU',
      }
    }
    return await this.sendRequest(config)
  }
}