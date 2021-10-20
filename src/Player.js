import React, { useEffect, useRef,useState} from 'react';
import ReactPlayer from 'react-player';
import SuggestionContainer from './SuggestionContainer'
import './Player.css';
import 'tachyons';




const Player =()=>{

    const urls=['http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                'https://www.youtube.com/watch?v=3Ao7chZniGE',
                'https://www.youtube.com/watch?v=HAoYDs65xvA',
                 'https://www.youtube.com/watch?v=fregObNcHC8',
                 'https://www.youtube.com/watch?v=a5uQMwRMHcs'
        ]


    const [isAboutToFinish ,setisAboutToFinish]=useState(false) ;

    const[urlPlaying,setUrlPlaying]=useState(urls[0]);
    
    const [rem,setRem]=useState(Infinity);

    const playerRef= useRef();

    useEffect(
        ()=>{
            if((rem <= 50.0)){
                setisAboutToFinish(true);
                
                
            }
        },[rem]
    );

   

    const getRemaining=()=>{
       setRem(playerRef.current.getDuration() - playerRef.current.getCurrentTime()) ;
       
    }
     

         
      
       
    
     
             return(
                <div className='window tc'>
                    <div className='rp'>
                        <ReactPlayer
                        controls={true}
                        url={urlPlaying}
                        ref= {playerRef}
                        progressInterval={500}
                        onProgress={getRemaining}
                        /> 
                        
                    </div>
                     <SuggestionContainer 
                     urls={urls} 
                     setUrlPlaying={setUrlPlaying} 
                     isAboutToFinish={isAboutToFinish} 
                     rem={rem} setRem={setRem} 
                     setisAboutToFinish={setisAboutToFinish}
                     urlPlaying={urlPlaying}
                       />
                </div>
                
                
               )
           }
       

export default Player;

