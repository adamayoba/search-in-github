import axios from 'axios';
import React, {useState} from 'react';
import { View } from 'react-native';


const Users = () => {

  const [data,setData] =  useState([]);
  const [userName,setUserName] =  useState("");
  
  
   const getData = (username) =>{
       
        axios
            .get(`https://localhost/user/getuser/:${username}`)
            .then((res) => setData(res.data));
            
            
            
   };

   const handleSubmit=(e) =>{
       e.preventDefault();
        getData(userName);
       
      // console.log(userName);
       
      
      
   };

   const listItems =  data
                        .map((user) => (
                            <li>{user.id}</li>,
                            <li>{user.node_id}</li>,
                            <li>{user.avatar_url}</li>,
                            <img src="avatar_url" alt="Image User" />,
                            <li>{user.gravatar_id}</li>,
                            <li>{user.url}</li>,
                            <li>{user.html_url}</li>,
                            <li>{user.followers_url}</li>,
                            <li>{user.following_url}</li>,
                            <li>{user.gists_url}</li>,
                            <li>{user.starred_url}</li>,
                            <li>{user.subscriptions_url}</li>,
                            <li>{user.organizations_url}</li>,
                            <li>{user.repos_url}</li>,
                            <li>{user.events_url}</li>,
                            <li>{user.received_events_url}</li>,
                            <li>{user.type}</li>,
                            <li>{user.site_admin}</li>,
                            <li>{user.name}</li>,
                            <li>{user.company}</li>,
                            <li>{user.blog}</li>,
                            <li>{user.location}</li>,
                            <li>{user.email}</li>,
                            <li>{user.hireable}</li>,
                            <li>{user.bio}</li>,
                            <li>{user.twitter_username}</li>,
                            <li>{user.public_repos}</li>,
                            <li>{user.public_gists}</li>,
                            <li>{user.followers}</li>,
                            <li>{user.following}</li>,
                            <li>{user.created_at}</li>,
                            <li>{user.updated_at}</li>
            
                  
                    
                )
  );
    return (
        <div className ="news-container">
            
            
            <h1>Search the informations from username</h1>

            <form onSubmit = {(e) => handleSubmit(e)}>
                <input 
                onChange={(e) => setUserName(e.target.value)}
                type="text" 
                placeholder="User Name" 
                value={userName}/>
                
                <input type="submit" value="Search" />
                
            </form>

            <ul>{listItems}</ul>
            

            

        </div>

        
    )
 
};


export default Users;