import React from 'react';
import ReactDOM from 'react-dom';
import { RegistrationForm } from "./components/auth/registration-form";
import './css/index.css';
import Header from "./components/header/header";
import AddCategory from "./components/addCategory/addCategory";

const app = ReactDOM.createRoot(document.getElementById('root'));

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <AddCategory/>
        {/*<RegistrationForm />*/}
      </>
    );
  }
}

app.render(<App />);
