import React, { useState } from 'react'
import Card from './Card'

export default function Cards(props) {

  let courses = props.courses;
  let category=props.category;
  const [likedCourses, setLikedCourses]=useState([]);

  function getCourses(){
    if(category==="All"){
      let courseArr=[];
      Object.values(courses).forEach((array)=>{
      array.forEach(courseData =>{
        courseArr.push(courseData);
      })
    })
    return courseArr;
    }
    else{
      return courses[category];
    }
    
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map( (course)=>(
          <Card  key={course.id}
                 course={course} 
                 likedCourses={likedCourses}
                 setLikedCourses={setLikedCourses}/>
        ) )
      }
      
    </div>
  )
}
