// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import { PostList, PostEdit, PostCreate } from './posts';
import { PulseList, PulseEdit, PulseCreate } from './heart_rate/Pulse'
import { UserList } from './users';
import authProvider from './authProvider';

var dataProvider = jsonServerProvider('http://localhost:3001');
//var dataProvider = jsonServerProvider('http://35.232.234.165:3001');



const App = () => (
    <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    title="Cloud-Based Realtime Heart Rate Monitoring System"
    dashboard={Dashboard}
    >
        <Resource name="users" list={UserList} icon={UserIcon} />
        <Resource name="pulses" list={PulseList} edit={PulseEdit} create={PulseCreate} icon={PostIcon} />

    </Admin>
);

export default App;
