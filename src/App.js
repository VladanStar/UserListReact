import React, {useState, useEffect} from 'react';
import {Fragment} from "react"
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Users } from './components/Users/Users.js';
import {User} from "./components/Users/User/User"
import { UsersGrid } from './components/UsersGrid/UsersGrid.js';

function App() {
   const [data, setData] = useState();
  const [dataCopy, setCopy]=useState()
  const fetchData = () =>
    fetch('https://randomuser.me/api/?results=15').then(response => {
      return response.json();
    }).then(response => {
      let userData = response.results.map(user => new User(`${user.name.first} ${user.name.last}`, user.email, user.dob, user.picture));
      setData(userData);
      setCopy(userData);
    })

  useEffect(() => {
    fetchData();
  }, []);

  const refresh = () => {
    fetchData();
  }

  const filterList = (event) => {
    
    let filtered = [];
    if(event.target.value) {
      filtered = dataCopy.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase()));
    } else {
      filtered = dataCopy;
    }
    setData(filtered);
  }


  return (
    <div className="App">
    <Fragment>
        <Header />
      <button onClick={refresh}>Refresh</button>
      <input type="text" onChange={filterList} placeholder="Search users by name" />
      <Users />
      <UsersGrid  data={data}/>
      <Footer />
      </Fragment>
    </div>
  );
}

export default App;