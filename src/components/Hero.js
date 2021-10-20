import React from "react";
import Container from "./Container";
import Search from "./Search";
import Card from "./Card";

const Hero = (props) =>{
    const {inputVal,setInputVal,handleSearch,images,newImages} = props;

    return(
        <section className="hero">
            <Search inputVal = {inputVal} setInputVal ={setInputVal} handleSearch={handleSearch}/>
            <Container>
        <Card images={images}/>
        {images.length===0 ? (
            <h1>No images found....</h1>
        ) : ( 
            <div className="btnContainer">
            <button onClick={ () => newImages("previous")}>Previous</button>
            <button onClick={ () => newImages("next")}>Next</button>
        </div>
        )}
      
            </Container>
        </section>
    )
}
export default Hero;