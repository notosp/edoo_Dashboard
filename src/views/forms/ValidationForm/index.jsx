import React, { Component } from 'react';
import Content from '../../../components/Content';
import ValidationForm from './Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: {
        first_name: 'clark',
        last_name: 'kent',
        email: 'clark@kent.com',
        phone_no: '+62'
      }
    };
    this.handleUpdateModel = this.handleUpdateModel.bind(this);
  }

  handleUpdateModel = (model) => {
    this.setState((state) => ({ ...state, model }));
  }

  render() {
    return (
      <Content>
        <ValidationForm model={this.state.model} update={this.handleUpdateModel} />
      </Content>
    );
  }
}

export default App;
