import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import SearchBar from './SearchBar';

function App() {

       const [videos,setVideos] = useState([]);
       const [selectedVideo, setSelectedVideo]= useState(null);

       const updateSelectedVideo = (selectedVideoByUser) =>{
                   setSelectedVideo(selectedVideoByUser);
       }

       const makeAPICall =async (query) => {
        var response = await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+query+"&type=video&key=AIzaSyDjJJzQ3ZZfHvh0bvzv2LYVyAjX56fUQbg")
              console.log("response", response);
              setVideos(response.data.items);
              setSelectedVideo(response.data.items[0]);
       }

    useEffect(
           () =>{
              makeAPICall("Java");
          },[]
    )

  return (
    <div className="App">
      <SearchBar queryCollector = { (query) =>{
                 makeAPICall(query);
      }}></SearchBar> 

      <div style={{display:"flex", marginTop:"20px"}}>
  <div style={{  float:"left;"}}>
  <VideoPlayer selectedVideo={selectedVideo}></VideoPlayer>
  </div>
  <div style={{ float:"right;"}}> <VideoList updateSelectedVideo={(input) =>{
              updateSelectedVideo(input)
             }} videos={videos}></VideoList>
</div>
</div>
{/* <div style="clear: both;"></div> */}
       <br></br>
       
            
             
             
    </div>
  );
}

export default App;
