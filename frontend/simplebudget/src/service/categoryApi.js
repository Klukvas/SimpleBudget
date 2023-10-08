import {Api} from "./api";

export class CategoryApi extends Api{
  async getCategories(){
    const config = {
      url: `${this.getMainUrl()}/category`,
      method: 'get',
      headers: {
          'Authorization': 'token DEBUG_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6LTEsImV4cCI6MTY5Njg0NjA0OH0.c11jnH2n4ej_FZcOiV2IU',
      }
    }
    return await this.sendRequest(config)
  }

  async createCategory(newCategoryData){
    const config = {
      url: `${this.getMainUrl()}/category`,
      method: 'post',
      headers: {
          'Authorization': 'token DEBUG_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6LTEsImV4cCI6MTY5Njg0NjA0OH0.c11jnH2n4ej_FZcOiV2IU',
      },
      data: newCategoryData

    }
    return await this.sendRequest(config)

  }

}