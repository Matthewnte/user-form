import React from "react";
import ReactDOM from 'react-dom'
import App from '../App'

import { Form, Input, Button } from 'antd';
import { DatePicker } from 'antd';

class FormComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      birthday: '',
      age: null,      
      hobby: '',
    }
  }
  
  handleSubmit = e => {
    e.preventDefault();
    const data = (this.state);
    
    this.props.data.user.push(data);
    this.setState(this.props.data.user)
    ReactDOM.render(<App />, document.getElementById('root'));
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onChange = (date, dateString) => {
    this.setState({
      birthday: dateString
    })
  }

  render() {

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 9 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
        <Form.Item label="First Name">
            <Input
              type="text"
              placeholder="Enter First Name"
              name='firstName'
              onChange={this.handleInputChange}
            />
        </Form.Item>
        <Form.Item label="Last Name">
          <Input
            type="text"
            placeholder="Enter Last Name"
            name='lastName'
            onChange={this.handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Birthday">
        <DatePicker style={{width: '100%'}}
          name='birthday'
          onChange={this.onChange} 
          />
        </Form.Item>
        <Form.Item label="Age">
          <Input
            type="number"
            placeholder="Enter Your Age"
            name='age'
            onChange={this.handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Hobby">
          <Input
            type="text"
            placeholder="Enter your hobby"
            name='hobby'
            onChange={this.handleInputChange}
          />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default FormComponent
