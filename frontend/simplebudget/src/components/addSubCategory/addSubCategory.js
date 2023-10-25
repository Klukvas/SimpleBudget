import React, { Component } from 'react';

import '../../css/addSubCategory.css';
import '../../css/components/table.css';
import '../../css/components/button.css';

import {CategoryApi} from "../../service/categoryApi";
import {SubCategoryApi} from "../../service/subCategoryApi";


export class AddSubCategory extends Component {
  constructor(props) {
    super(props);
    this.categoryApi = new CategoryApi();
    this.subCategoryApi = new SubCategoryApi();
    this.state = {
      availableCategories: [],
      subCategories: [],

      newCategory: '',
      newName: '',
      newDescription: '',

      loading: true
    }
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value });
  };

  handleDescriptionChange = (event) => {
    this.setState({ newDescription: event.target.value });
  };

  handleCategoryChange = (event) => {
    this.setState({newCategory: event.target.value})
  }

  async getSubCatWithCategory(){
    const subCategories = await this.subCategoryApi.getSubCategories()
    try{
      const subCatWithCategories = await Promise.all(
          subCategories.map(async (subCat) => {
            const category = await this.categoryApi.getCategories(subCat.category)

            subCat.category = {id: category.id, name: category.name}
            return subCat
          })
      )
      this.setState({
        subCategories: subCatWithCategories
      })
      return subCatWithCategories
    }catch (error){
      this.setState({ loading: false });
    }
  }

  async componentDidMount() {
    await this.getSubCatWithCategory()
    const availableCategories = await this.categoryApi.getCategories();
    this.setState({
      availableCategories: availableCategories,
      categoriesLoad: false
    })
  }
  

  render() {
    const { availableCategories, categoriesLoad, subCatLoad, subCategories } = this.state;
    return (
        <div className="sub-category">
    {categoriesLoad ? (
      <p className="loading-text">Loading...</p>
    ) : (
      availableCategories.length === 0 ? (
        <p className="add-category-text">Add categories first</p>
      ) : (
        <div className="subcat-container">
          <div className="create-container">
          <div className="choose-cat-container">
             <select name="" id="category-dropdown" className="categories" onChange={this.handleCategoryChange}>
               <option value="">Choose category</option>
            {availableCategories.map((item, index) => (
              <option value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          </div>
          <div className="subcategory-name">
            <input type="text" placeholder="Name" className="input-field" onClick={this.handleNameChange} />
          </div>
          <div className="subcategory-description">
            <input type="text" placeholder="Description" className="input-field" onClick={this.handleDescriptionChange}/>
          </div>
          <div className="create-subcat-container">
            <button className="create-subcat">Create new sub-category</button>
          </div>
        </div>
          <div className="existed-subcat">
            {subCategories.length === 0 ? (
                <p>Create your first SubCategory!</p>
            ): (
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subCategories.map((item, index) => (
                      <tr key={index}>
                        <td>
                          {item.name}
                        </td>
                        <td>{item.description}</td>
                        <td>
                          {item.category.name}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

            )}
          </div>

        </div>

      )
    )}
  </div>
    );
  }
}
