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

///import dataProvider from './dataProvider';
/* WORKING PERFECT
import fakeDataProvider from 'ra-data-fakerest';
  const dataProvider = fakeDataProvider({
    posts: [
      { id: 1, title: 'title1', userId: 1},
      { id: 2, title: 'title2', userId: 2 },
    ],
    users: [
        { id: 1, name: 'user1' },
        { id: 2, name: 'user2' },
      ],
    comments: [
      { id: 0, post_id: 0, author: 'John Doe', body: 'Sensational!' },
      { id: 1, post_id: 0, author: 'Jane Doe', body: 'I agree' },
    ],
  })
  */


//import { RestClient } from 'aor-firebase-client';


//const dataProvider = jsonServerProvider('https://realtime-system.firebaseio.com/test_admin/.json');
/*
const firebaseConfig = {
    apiKey: "AIzaSyCKzy3naDQOtjdc5MYKO5lU7eiz96hESYg",
    authDomain: "realtime-system.firebaseapp.com",
    databaseURL: "https://realtime-system.firebaseio.com",
    projectId: "realtime-system",
    storageBucket: "realtime-system.appspot.com",
    messagingSenderId: "812332477533"
  };

const clientOptions = {
  timestampFieldNames: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  },
  trackedResources: [{
    name: 'posts', // The name reference to be used in all other places in AOR
    path: 'blog', // The path in the database. If missing will use the name
    public: true,
    uploadFields: [] // The string name of the field
  }, 'contacts'] // A single string assumes path and name as equal, non private and without upload fields
}
*/

///const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const dataProvider = jsonServerProvider('http://localhost:3001');



const App = () => (
    <Admin
    dataProvider={dataProvider}
    title="Cloud-Based Realtime Heart Rate Monitoring System"
    dashboard={Dashboard}
    >
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
        <Resource name="pulses" list={PulseList} edit={PulseEdit} create={PulseCreate} icon={PostIcon} />

    </Admin>
);

export default App;
