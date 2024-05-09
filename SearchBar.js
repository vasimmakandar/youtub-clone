import {useState} from 'react';
function SearchBar(props){

       const [query,setQuery] = useState('java');

       const captureQuery = (event)=>{
               var value = event.target.value;
               setQuery(value);
       }
       const submitSearch = () =>{
            console.log("query", query);
            props.queryCollector(query);
       }

    return(
        <div>
            <input style={{width:"600px",height:"40px",border:"2px solid red", fontSize:"20px"}} onChange={captureQuery} type="text" name="query"></input> &nbsp;&nbsp;
             <button onClick={submitSearch}
             style={{height:"46px", width:"100px",border:"2px solid red", backgroundColor:"red", fontSize:"20px", fontWeight:"bolder", color:"white"}}
             >Search</button>
        </div>
    )

}
export default SearchBar;