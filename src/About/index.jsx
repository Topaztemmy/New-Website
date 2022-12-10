import React from "react";
import "./index.css";


export default function Body(){
  const  myMenu =(
    <div>
            <div className="images">
                <div className="pic">
                <div className="no"></div>
                <div className="titles">
                <div className="next">
                <p className="texts fw-light ">FAMILY <br /> BAKERY</p>
                <b><h1 className="image-texts fw-bolder">ORGANIC <div className="image-texts-1"> BREADS</div> </h1></b>
              
                <p className="frees fw-light ">IMAGE FROM FREEPIKS</p>
                </div>
                </div>
                </div>
                </div>
                </div>
                /* <div className="finds ">
                    <p className=""><h4 className="my-3 fw-bold "> FIND US </h4><p className="find-1"> 121 Rock Street, 21 Avenue, New York, NY <br />92103-9000</p>
                       </p>
                     <p className=""><h4 className=" fw-bold"> HOURS</h4><p className="mon"><div className="fw-bold">Monday - Saturday </div><div>
                     9am - 7pm </div><div className="fw-bold"> Sunday</div> <div>10am - 6pm</div></p></p>  
                     <p className=""><h4 className=" fw-bold"> CALL US</h4> <h5 className="fw-bold">
                        1 (234)567-891</h5> <b><h5 className="fw-bold">2 (345)333-897</h5></b></p>
                </div>  
                </div>      
                </div>
            </div>
         
             <div className="bake">
             <h1 className="fw-bolder pt-3 my-3">Delicious Baking</h1>
             <div>
                <p className="dark-bread">
                    <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/80fec7903aa257c583e3dc80/3014502.png" alt="" />
                <h3>Baked Fresh Daily</h3>
                <div>Our bread is baked fresh daily,</div>
                <div>contains no preservatives and is</div>
                <div>very high in quality. It is also</div>
                <div>especially nice and soft</div>
                </p>
             </div>
             </div>
        </div> */
 
  )
    return(
    <div className="body">
               
     <div className="bodys">{myMenu}</div>
            <div className="image">
                <div className="nothing">
                </div>
                <div className="title">
                <p className="text fw-lighter ">FAMILY BAKERY</p>
                <h1 className="image-text fw-bolder">ORGANIC <div className="image-text-1"> BREADS</div> </h1>
              
                <p className="free fs-15px fw-light ">IMAGE FROM FREEPIKS</p>
                <div className="find ">
                    <p className=""><h4 className="my-3 fw-bold "> FIND US </h4><p className="find-1 fs-20"> 121 Rock Street, 21 <br />Avenue, New York, NY <br />92103-9000</p>
                       </p>
                     <p className=""><h4 className="my-3 fw-bold"> HOURS</h4><p className="mon"><div className="fw-bold">Monday - Saturday </div><div>
                     9am - 7pm </div><div className="fw-bold"> Sunday</div> <div>10am - 6pm</div></p></p>  
                     <p className=""><h4 className="my-3 fw-bold"> CALL US</h4> <h5 className="fw-bold">
                        1 (234)567-891</h5> <br /> <b><h5 className="fw-bold">2 (345)333-897</h5></b></p>
                </div>        
                </div>
            </div>
            {/* <img className="body-img" src={Food} alt="">
                FAMILY BAKERY
            {/* <div className="boody-text">
                <p className="fs-1">F</p>
                <p className="fs-2  fw-bolder text-primary" >Bankole Temitope</p>
                <p>FrontEnd Developer</p>
                <p>I dont't know what to type yet</p>
            </div>  
            </img>
             */}
             <div className="bake">
             <h1 className="baking fw-bolder pt-3 my-3">Delicious Baking</h1>
             <div className="first">
                <p className="dark-bread">
                <div className="second">
                    <img className="bread" src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/80fec7903aa257c583e3dc80/3014502.png" alt="" />
                  <div className="daily">  
                <h3>Baked Fresh Daily</h3>
                <div>Our bread is baked fresh daily,</div>
                <div>contains no preservatives and is</div>
                <div>very high in quality. It is also</div>
                <div>especially nice and soft</div>
                </div>
                </div>
                </p>
                
                <p className="dark-bread">
                <div className="second">
                    <img className="bread" src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/3751d855c5d55e079c40bfce/4241664.png" alt="" />
                    <div className="daily"> 
                <h3>Great Value</h3>
                <div>With the most competitive prices</div>
                <div>on the market we are able to</div>
                <div>deliver great value without</div>
                <div>compromising on taste</div>
                </div>
                </div>
                </p>
             
                <p className="dark-bread">
                <div className="second">
                    <img className="bread" src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/0248c4e8fcbb5b8ba229e277/8555318.png" alt="" />
                    <div className="daily">
                <h3>Institutions</h3><br />
                <div>We serve a wide range of</div>
                <div>institutions including universities,</div>
                <div> airlines, hotels and schools. Order</div>
                <div>daily for tomorrow</div>
                </div>
                </div>
                </p>

                <p className="dark-bread">
                <div className="second">
                    <img className="bread" src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/d96402255b095df7bfecbdbe/2203124.png" alt="" />
                  <div className="daily">  
                <h3>Delivery To Your Door</h3><br />
                <div>Sample text. Click to select the text</div>
                <div>box. Click again or double click to</div>
                <div>start editing the text.</div>
                </div>
                </div>
                </p>
                
                <p className="dark-bread">
                <div className="second">
                    <img className="bread" src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/8448bd1dee395ceb93597ad5/679821.png" alt="" />
                    <div className="daily"> 
                <h3>No Order Too Large</h3><br />
                <div>Sample text. Click to select the text</div>
                <div>box. Click again or double click to</div>
                <div>start editing the text.</div>
                </div>
                </div>
                </p>
             
                <p className="dark-bread">
                <div className="second">
                    <img className="bread" src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/21fe04b547f85057aa951015/4937753.png" alt="" />
                    <div className="daily">
                <h3>Delicious Baking</h3>
                <div>Sample text. Click to select the text</div>
                <div>box. Click again or double click to</div>
                <div>start editing the text.</div>
                </div>
                </div>
                </p>
  
             </div>
            <div className="fourth">
             <h1 className="bakings fw-bolder pt-4 my-3">Our Breads</h1>
             <div className="firsts">
                <p className="dark-bread">
                <div className="seconds shadow">
                    <img className="bread-img" src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/ec7affe037995acb89f03793/ghgh.jpg" alt="" />
                  <div className="daily">  
                <h5>WHITE BREAD</h5>
              <em>  <div>Sample text. Click to select the</div>
        <div>text box. Click again or double</div>
        <div>click to start editing the text.</div> </em><br />
        <p>more</p>
                </div>
                </div>
                </p>
                
                <p className="dark-bread">
                <div className="seconds shadow">
                    <img className="bread-img" src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/60067c0411e15541880e3293/rre.jpg" alt="" />
                    <div className="daily"> 
                <h5>FARMING BREAD</h5>
              <em> <div>Sample text. Click to select the</div>
        <div>text box. Click again or double</div>
        <div>click to start editing the text.</div></em>  <br />
        <p>more</p>
                </div>
                </div>
                </p>
            
                <p className="dark-bread">
                <div className="seconds shadow">
                    <img className="bread-img" src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/8d95eb12993a55918f0eac4e/trrt.jpg" alt="" />
                  <div className="daily">  
                <h5>LOAF BREAD</h5>
              <em>  <div>Sample text. Click to select the</div>
        <div>text box. Click again or double</div>
        <div>click to start editing the text.</div> </em><br />
        <p>more</p>
                </div>
                </div>
                </p>
 
                <p className="dark-bread">
                <div className="seconds shadow">
                    <img className="bread-img" src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/c1a914846ece539fab7e5b32/j.jpg" alt="" />
                    <div className="daily"> 
                <h5>SOURDOUGH</h5>
               <em> <div>Sample text. Click to select the</div>
        <div>text box. Click again or double</div>
        <div>click to start editing the text.</div></em> <br />
        <p>more</p>
                </div>
                </div>
                </p>
             
                <p className="dark-bread">
                <div className="seconds shadow">
                    <img className="bread-img" src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/cb3211b2f42c50f19d231553/666662.jpg" alt="" />
                    <div className="daily">
                <h5>OLIVE BREAD</h5>
                <em><div>Sample text. Click to select the</div>
        <div>text box. Click again or double</div>
        <div>click to start editing the text.</div> </em> <br />
        <p>more</p>
                </div>
                </div>
                </p>

                <p className="dark-bread">
                <div className="seconds shadow">
                    <img className="bread-img" src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/a1bfe1a08d2e5336b7c1b33c/fgfgfg.jpg" alt="" />
                  <div className="daily">  
                <h5>WHOLE-GRAIN BREAD</h5>
              <em>  <div>Sample text. Click to select the</div>
        <div>text box. Click again or double</div>
        <div>click to start editing the text.</div></em> <br />
        <p>more</p>
                </div>
                </div>
                </p>
                
                <p className="dark-bread">
                <div className="seconds shadow">
                    <img className="bread-img" src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/3999a544fd6558bba9aa6896/gfgffg.jpg" alt="" />
                    <div className="daily"> 
                <h5>FARMING BREAD</h5>
              <em>  <div>Sample text. Click to select the</div>
        <div>text box. Click again or double</div>
        <div>click to start editing the text.</div> </em> <br />
        <p>more</p>
                </div>
                </div>
                </p>
             
                <p className="dark-bread">
                <div className="seconds shadow">
                    <img className="bread-img" src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/a00d0fa693a250b5ba0b9de2/fgfgr.jpg" alt="" />
                    <div className="daily">
                <h5>BAGUETTTE</h5>
              <em>   <div>Sample text. Click to select the</div>
        <div>text box. Click again or double</div>
        <div>click to start editing the text.</div> </em><br />
        <p>more</p>
                </div>
                </div>
                </p>     
                
             </div>
             <p className="freestyle ">Image from Feepiks</p>
             </div>
             <footer className="last-name">
                <div className="text-light pt-3 my-4">Sample text. Click to select the Text Element.</div><br />
                <p className="last fw-light"><div className="text-warning text-decoration-underline "> Website Design </div><div className="text-light"> created with
                </div> <div className="text-warning text-decoration-underline"> Free Website Builder.</div></p>
             </footer>
             </div>
  
     
        </div>
        
    )
}