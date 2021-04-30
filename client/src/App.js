import './App.css';
import Appnavbar from './componets/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import Shoppinglist from './componets/Shoppinglist';
import {Provider} from 'react-redux'
import store from "./store"
import ItemModal from "./componets/AddButton";

class App extends React.Component{
  render(){

    return (
      <Provider store={store}>
        <div className="App">
       <Appnavbar/>
       <ItemModal/>
       <Shoppinglist/>
      </div>
      </Provider>
      
    );
  }
}

export default App;
