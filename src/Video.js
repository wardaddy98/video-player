import React, {useEffect, useRef,useState} from 'react';
import ReactPlayer from 'react-player';
import './Video.css'


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
const Video=({urlSuggestion,setUrlPlaying,setRem, setisAboutToFinish,urlPlaying})=>{

    const [displaySuggestions,setdisplaySuggestions] = useState(false);
    const videoRef= useRef();
    

    useEffect(
        ()=>{
            setdisplaySuggestions(true);
            
        },[displaySuggestions]
    );

    const newUrl=()=>{
        const dummy= urlPlaying;
        setUrlPlaying(urlSuggestion);
        urlSuggestion=dummy;
        setisAboutToFinish(false);
        setRem(Infinity);
    }

        return(
            <ReactPlayer
            url={urlSuggestion}
            ref= {videoRef}
            light={true} 
            height={128}
            width={144}
            controls={true}
            playing={false}
            onReady={()=>{
                console.log(displaySuggestions,'is displaying');
            }}
            onClickPreview={newUrl}
            
            />
        )
        
}





export default Video ;


