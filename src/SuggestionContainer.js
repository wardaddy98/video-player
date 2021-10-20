import React from "react";
import Video  from './Video';
import './SuggestionContainer.css';

function SuggestionContainer({isAboutToFinish,setUrlPlaying,urls, setRem, setisAboutToFinish,urlPlaying}){
    return(
        <div className={(isAboutToFinish)?'container-visible':'container-not-visible'}>
            <div className='item1'><Video urlSuggestion={urls[1]}  urlPlaying={urlPlaying} setUrlPlaying={setUrlPlaying}  setRem={setRem} setisAboutToFinish={setisAboutToFinish}/></div>
            <div className='item2'><Video urlSuggestion={urls[2]} urlPlaying={urlPlaying} setUrlPlaying={setUrlPlaying} setRem={setRem} setisAboutToFinish={setisAboutToFinish}/></div>
            <div className='item3'><Video urlSuggestion={urls[3]} urlPlaying={urlPlaying} setUrlPlaying={setUrlPlaying}  setRem={setRem} setisAboutToFinish={setisAboutToFinish}/></div>
        </div>
) 
}


export default SuggestionContainer  ;

