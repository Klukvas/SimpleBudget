import React, {Component} from 'react';
import '../../css/addCategory.css';
import {CategoryApi} from "../../service/categoryApi";
import {SubCategoryApi} from "../../service/subCategoryApi";
import settingsImg from '../../images/settings.png'


class MyTableComponent extends Component {
  constructor(props) {
    super(props);

    this.categoryApi = new CategoryApi();
    this.subCategoryApi = new SubCategoryApi();

    this.state = {
      categories: [],
      newName: '',
      newDescription: '',
      loading: true,
      showAlert: false
    };
  }

  async getCategoriesWithNames(){
    const categories = await this.categoryApi.getCategories()
    try{
      const categoriesWithSubNames = await Promise.all(
        categories.map(async (category) => {
          category.subCategories = await Promise.all(
              category.subCategories.map(async (subCategoryId) => {
                const subCategory = await  this.subCategoryApi.getSubCategories(subCategoryId)
                return {id: subCategory.id, name: subCategory.name }
              })
          )
          return category
        })
      )
      this.setState({
        categories: categoriesWithSubNames,
        loading: false
      })
    }catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ loading: false });
    }
  }


  async componentDidMount() {
    await this.getCategoriesWithNames()
  }

  async handleAddClick(){
    console.log('Click state', this.state)

    const { newName, newDescription } = this.state;
    if (newName) {
      newDescription ?
      await this.categoryApi.createCategory({name: newName, description: newDescription})
      :
      await this.categoryApi.createCategory({name: newName})
      await this.getCategoriesWithNames();
    }
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value });
  };

  handleDescriptionChange = (event) => {
    this.setState({ newDescription: event.target.value });
  };

  openCategorySettings(){

  }

  render() {
    const { categories, loading, showAlert } = this.state;
    return (
      <div className="MyTableComponent">
        <h3>Add more categories</h3>
        <div className="input-container">
          <input
            type="text"
            placeholder="Name"
            value={this.state.newName}
            onChange={this.handleNameChange}
          />
          <input
            type="text"
            placeholder="Description"
            value={this.state.newDescription}
            onChange={this.handleDescriptionChange}
          />
          <button onClick={this.handleAddClick.bind(this)}>Add new category</button>
        </div>
        <h2>Available categories</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          categories.length === 0 ? (
            <p>No data</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Sub-Categories</th>
                </tr>
              </thead>
              <tbody>
              {categories.map((item, index) => (
                <tr key={index}>
                  <td>
                    {item.name}
                  </td>
                  <td>{item.description}</td>
                  <td>
                    <div className={'subCategoryItems'}>
                      {item.subCategories ? (
                        item.subCategories.map((subcategory, subIndex) => (
                          <div id={subcategory.id} className={'subCategoryName'} key={subIndex}>{subcategory.name}</div>
                        ))
                      ) : (
                        'N/A'
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

            </table>
          )
        )}
      </div>
    );
  }
}

export default MyTableComponent;
