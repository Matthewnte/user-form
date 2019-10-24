import React from "react";

import { Table } from 'antd';
const { Column } = Table;

function UserTable (props) {
    return (
        <Table dataSource={props.data}>
            <Column title="First Name" dataIndex='firstName' key='firstName' />
            <Column title="Last name" dataIndex='lastName' key='lastName' />
            <Column title="Birthday" dataIndex='birthday' key='birthday' />
            <Column title="Age" dataIndex='age' key='age' />
            <Column title="hobby" dataIndex='hobby' key='hobby' />
        </Table>
    )
}

export default UserTable