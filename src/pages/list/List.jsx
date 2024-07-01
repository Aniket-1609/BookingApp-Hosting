import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch.js";


const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  // const [dates, setDates] = useState(location.state.dates);
  // const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  // const [min, setMin] = useState(undefined);
  // const [max, setMax] = useState(undefined);

  const {data,loading,error,refetch}=useFetch(`/hotels?city=${destination}`);

  
 const handleClick=()=>{
  refetch();
 };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          
            
            
          <div className="listResult">
            {loading?("Loading"):(
              <>
                {
                  data.map(item=>(
                    
                    <SearchItem  item={item} key={item._id}/>
                ))}
              </>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
