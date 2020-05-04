import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import ResponsiveTheme from './components/responsive-theme';
import Layout from './components/layout';
function App() {
  return (<div className="App">
    <Provider store={store}>
      <ResponsiveTheme>
        <Layout/>
      </ResponsiveTheme>
    </Provider>
  </div>);
}

export default App;
