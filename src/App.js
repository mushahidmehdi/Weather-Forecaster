import React, { Component } from 'react';
import './sass/main.scss';
import { fetchData } from './api';

import {Cart, Navbar } from './components'

class App extends Component {
  state = {
    data: {}
  }
  async componentDidMount () {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData});
  }
  render() {
    const { data } = this.state;
    return (
      <>
      <Navbar />
      <Cart data={data}/>
      </>
    )
  }
}

export default App
