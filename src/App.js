import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import FormComponent from './component/formComponent';
import Table from './component/userTable';
import TableData from './TableData';

import { Layout } from 'antd';
const { Header, Content } = Layout;

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user : TableData
    }
  }
 
  render() { 
      return (
        <div className="App">
          <Layout>
            <Header className="App-header">
              <h1 className="App-h1">User Form</h1>
            </Header>
            <Content className = "App-content">
              <FormComponent data={this.state} />
              <Table key={Table.key} data={TableData} />; 
            </Content>
          </Layout>
        </div>
      );
  }
}

export default App;
