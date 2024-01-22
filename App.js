import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Spinner from "./Components/Spinner";
import Filter from "./Components/Filter";
import {filterData,apiUrl} from "./data";
import Cards from "./Components/Cards";
import { toast } from "react-toastify";

const App = () => {

  const [courses, setCourses]=useState([])
  const [loading, setLoading]=useState(true)
  const [category, setCategory] = useState(filterData[0].title)

  async function fetchData() {
    setLoading(true)
    try{
    let response = await fetch(apiUrl);
    let output = await response.json(); 
    setCourses(output.data);
    }
    catch{
      toast.error("error in apicall");
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar></Navbar>
      </div>

      <div >
        <div>
          <Filter 
          filterData={filterData}
          category={category}
          setCategory={setCategory}
          ></Filter>
        </div>
        <div className="w-11/12 max-w-[80vw] mx-auto flex flex-wrap justify-center items-center min-h-[50pvh]">
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
        }
        </div>

      </div>

      
    </div>
  );
};

export default App;
