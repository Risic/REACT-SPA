import React from 'react';
import Post from './components/Post';
import './Posts.css';

import RAY_IMAGE from "./images/Ray.jpg";
import DARTH_IMAGE from  './images/darth-vader.webp';
import ANAKIN_IMAGE from './images/anakin-race.jpeg';

// const RAY_IMAGE = RayPhoto;

let newDate = new Date('December 17, 1995 03:24:00');

const post = [{
  content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
  image: RAY_IMAGE,
  date: `${newDate.getDate()}/${newDate.getMonth() + 1}`,
  id: 1
},{
  content: "Look!",
  image: DARTH_IMAGE,
  date: `${newDate.getDate() - 2}/${newDate.getMonth() + 1}`,
  id: 2
},{
  content: "Who is this?  Yes, that's me.",
  image: ANAKIN_IMAGE,
  date: `${newDate.getDate() - 5}/${newDate.getMonth() + 1}`,
  id: 3
}];



function App() {
  return (
    <div className="Posts">
      {post.map((element) => {
        return <Post key={element.id} content={element.content} image={element.image} date={element.date}/>
      })}
    </div>
  );
}

export default App;
