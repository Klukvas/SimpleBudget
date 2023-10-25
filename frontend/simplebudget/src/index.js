import React from 'react';
import ReactDOM from 'react-dom';
// import { RegistrationForm } from "./components/auth/registration-form";
import './css/index.css';
import Header from "./components/header/header";
// import AddCategory from "./components/addCategory/addCategory";
import {AddSubCategory} from './components/addSubCategory/addSubCategory'
const app = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AddSubCategory/>
        {/*<AddCategory/>*/}
        {/*<RegistrationForm />*/}
      </>
    );
  }
}

app.render(<App />);
