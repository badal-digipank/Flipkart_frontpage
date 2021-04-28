import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import "./Header.css";
// import Tippy from'@tippyjs/react'
// import 'tippy.js/dist/tippy.css';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import ThumbUpTwoToneIcon from '@material-ui/icons/ThumbUpTwoTone';
// import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Header = () => {
    return (
       <div class="grid-container"> 

       <div className="item1">
        <div className='header'>
         
        <div className="header_first">
            <img width="10"src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png
" alt="Flipkart logo"/>
            <div className="header_first1">
               <span style={{
                   fontSize:"11px",
                   color:"white",
                   fontStyle:"italic"

            }}>Explore</span>
               <span style={{
                   fontSize:"11px",
                   color:"f9e107",
                   fontStyle:"italic"
               }}>Plus</span>
               <span><img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="Flipkart plus"/></span>

            </div>
        </div>
        <div className="header_second">
            <input placeholder="Search for products" type="text"/>
            <SearchIcon/>
        </div>

        <div className="header_third">
     <button>login</button>
        </div>

        <div className="header_four">
            <span>More</span>
        <ExpandMoreIcon />
        </div>
        <div className="header_five">
          <ShoppingCartRoundedIcon/>
       <span>Cart</span>
        </div></div>
    
        <div className="header2">
            <div className="header2_one">
                <span>Electronics</span>
                <ExpandMoreIcon />
            </div>

            <div className="header2_two">
            <span>TV & Appliances</span>
                <ExpandMoreIcon /> 
            </div>
            <div className="header2_three">
            <span>Men</span>
                <ExpandMoreIcon />
            </div>
            <div className="header2_four">
            <span>Women</span>
                <ExpandMoreIcon />
            </div>
            <div className="header2_five">
                <span>Baby & Kids</span>
                <ExpandMoreIcon/>
            </div>
            <div className="header2_six">
                <span>Home & Funiture</span>
                <ExpandMoreIcon/>
            </div>
            <div className="header2_seven">
                <span>Sports, Books & More</span>
                <ExpandMoreIcon/>
            </div>
            <div className="header2_eight">
                <span>Flights</span>
                <ExpandMoreIcon/>
            </div>
            <div className="header2_nine">
                <span>Offer Zone</span>
                <ExpandMoreIcon/>
            </div>
            
        </div>
       
        
        </div>
       {/* //for menu and main */}

       <div class="item2">
        <div className="leftcorner">
         <div className="paddingleft">Filters</div>
         <div  className="paddingleft">Categories</div>
         <div  className="paddingleft">
             <span>sy</span>
             <span>Mobile & Accessories</span>
         </div >
         <div  className="paddingleft">PRICE</div>

         <div  className="paddingleft">------------</div>
         <div  className="paddingleft">
             <span><button>Min</button></span>
             <span>to</span>
             <span><button>$50000</button></span>

         </div>
         <div className="paddingleft"><img src="abc.jpg" alt ="fassured"/></div>
         <div className="paddingleft"><hr/></div>
         <div  className="paddingleft"style={{display:"flex",
                                              flexDirection:"row",
                                              justifyContent:"space-between"}}>
             <span>Ram</span>
             <span><ExpandLessIcon/></span>
         </div>
         
            <div >
                {/* <span><CheckBoxOutlineBlankIcon/></span>
                <span >6 GB & Above</span> */}
                
            </div>
            
            <div>
                <span><CheckBoxOutlineBlankIcon/></span>
                <span>4 GB </span>
            </div>
            <div>
                <span><CheckBoxOutlineBlankIcon/></span>
                <span>3GB </span>
            </div>
            <div>
                <span><CheckBoxOutlineBlankIcon/></span>
                <span>2 GB</span>
            </div>
            <div>
                <span><CheckBoxOutlineBlankIcon/></span>
                <span>1GB </span>
            </div>
            <div>
                <span><CheckBoxOutlineBlankIcon/></span>
                <span>512 MB-1 GB</span>
            </div>
            <div>
                <span><CheckBoxOutlineBlankIcon/></span>
                <span>Less than 512 MB</span>
            </div>
            <hr/>
            <div style={{display:"flex",
                        flexDirection:"row",
                    justifyContent:"space-between"}}>
                <span>Brand</span>
                <span> <ExpandLessIcon/></span>
            </div>
            <div  style={{diplay:"flex",flexDirection:"row"}}className="leftsides">
                <span><SearchIcon/></span>
                <span> 
                <input type="text" placeholder="search brand" ></input>
                </span>
            </div>
            <div>
                <span><CheckBoxOutlineBlankIcon/></span>
                <span>POCO </span>
            </div>
            <div>
                <span><CheckBoxOutlineBlankIcon/></span>
                <span>Realme</span>
            </div>
            <div>
                <span><CheckBoxOutlineBlankIcon/></span>
                <span>Infinix</span>
            </div>
            <div>
                <span><CheckBoxOutlineBlankIcon/></span>
                <span>Motorola</span>
            </div>
            <div>
                <span><CheckBoxOutlineBlankIcon/></span>
                <span>Samsung</span>
            </div>
            <div>
                <span><CheckBoxOutlineBlankIcon/></span>
                <span>Mi</span>
            </div>

       </div></div>

       <div className="item3">
           <div className="main">
           <container className="smargin">
               <div className="mainfront">
                   <span>Home</span>
                   <span><ChevronRightIcon/></span>
                   
                   <span>Mobile & AC</span>
                   <span><ChevronRightIcon/></span>
                   <span>.Mobiles</span>
               </div>
               <div className="mainflex">Showing 1-24 if 11,214 results for "mobiles"</div>
               <div className="mainflex">
                     <div>Sort By</div>
                     <div>Relevance</div>
                     <div>Popularity</div>
                     <div>Price-Low to High</div>
                     <div>Newest First</div>
               </div>
           </container>

           <container className="mobile1">
               <div><img  src="c12n.jpeg" width="130" height="220" alt="c12"/> </div>
               <div className="specification">
                   
                


                   <div style={{textAlign:"left"}}>
                   <div >
                       <span style={{paddingRight:"20px",marginTop:"20px"}}><FavoriteTwoToneIcon /></span>
                       <span ><b>Realme c12(power silver,32GB)</b></span>
                       </div>
                   <div style={{paddingLeft:"20px"}}>
                       <span><ThumbUpTwoToneIcon/></span>
                       <span>89,093 Ratings & 4,938 Reviews</span>
                   </div>
                    <ul>
                     <li>3 GB RAM |32 GB ROM|Expandable Upto 256 GB</li>
                     <li>16.56(6.52 inch) HD + Display</li>
                     <li>13MP + 2MP |5MP Front Camera</li>
                     <li>6000 mAh Lithium-ion Battery</li>
                     <li>Mediatek Hello G35 Processor</li>
                     <li>Brand Warranty of 1 Year Avilable for Mobile and 6months for Accessories</li>
                   </ul>
                
                  </div>
               </div>
               <container className="price">
                     <div>
                         <span><img src="rupee.png"height="15" width="20"alt="rupee"/></span>
                         <span style={{fontSize:"25px"}}>8,999</span>
                         
                         
                         
                     </div>
                     <div><span>18% off</span></div>
                     <div><span>No Cost EMI</span></div>
                     <div><span>UPto 8,450 Off on Exchange</span></div>
               </container>
           </container>
           <container style={{
               display:"flex",paddingLeft:"25px"}}>
               <span><CheckBoxOutlineBlankIcon/></span>
               <span style={{paddingTop:"5px",paddingLeft:"5px"}}>Add to compare</span>
           </container>
           <hr/>
           <container className="mobile1">
               <div><img  src="Realme.webp" width="130" height="220" alt="c12"/> </div>
               <div className="specification">
                   
                


                   <div style={{textAlign:"left"}}>
                   <div >
                       <span style={{paddingRight:"20px",marginTop:"20px"}}><FavoriteTwoToneIcon /></span>
                       <span ><b>Realme c12(power silver,32GB)</b></span>
                       </div>
                   <div style={{paddingLeft:"20px"}}>
                       <span><ThumbUpTwoToneIcon/></span>
                       <span>89,093 Ratings & 4,938 Reviews</span>
                   </div>
                    <ul>
                     <li>3 GB RAM |32 GB ROM|Expandable Upto 256 GB</li>
                     <li>16.56(6.52 inch) HD + Display</li>
                     <li>13MP + 2MP |5MP Front Camera</li>
                     <li>6000 mAh Lithium-ion Battery</li>
                     <li>Mediatek Hello G35 Processor</li>
                     <li>Brand Warranty of 1 Year Avilable for Mobile and 6months for Accessories</li>
                   </ul>
                
                  </div>
               </div>
               <container className="price">
                     <div>
                         <span><img src="rupee.png"height="15" width="20"alt="rupee"/></span>
                         <span style={{fontSize:"25px"}}>8,999</span>
                         
                         
                         
                     </div>
                     <div><span>18% off</span></div>
                     <div><span>No Cost EMI</span></div>
                     <div><span>UPto 8,450 Off on Exchange</span></div>
               </container>
           </container>
           <container style={{
               display:"flex",paddingLeft:"25px"}}>
               <span><CheckBoxOutlineBlankIcon/></span>
               <span style={{paddingTop:"5px",paddingLeft:"5px"}}>Add to compare</span>
           </container>
           <hr/>
           <container className="mobile1">
               <div><img  src="Realme.webp" width="130" height="220" alt="c12"/> </div>
               <div className="specification">
                   
                


                   <div style={{textAlign:"left"}}>
                   <div >
                       <span style={{paddingRight:"20px",marginTop:"20px"}}><FavoriteTwoToneIcon /></span>
                       <span ><b>Realme c12(power silver,32GB)</b></span>
                       </div>
                   <div style={{paddingLeft:"20px"}}>
                       <span><ThumbUpTwoToneIcon/></span>
                       <span>89,093 Ratings & 4,938 Reviews</span>
                   </div>
                    <ul>
                     <li>3 GB RAM |32 GB ROM|Expandable Upto 256 GB</li>
                     <li>16.56(6.52 inch) HD + Display</li>
                     <li>13MP + 2MP |5MP Front Camera</li>
                     <li>6000 mAh Lithium-ion Battery</li>
                     <li>Mediatek Hello G35 Processor</li>
                     <li>Brand Warranty of 1 Year Avilable for Mobile and 6months for Accessories</li>
                   </ul>
                
                  </div>
               </div>
               <container className="price">
                     <div>
                         <span><img src="rupee.png"height="15" width="20"alt="rupee"/></span>
                         <span style={{fontSize:"25px"}}>8,999</span>
                         
                         
                         
                     </div>
                     <div><span>18% off</span></div>
                     <div><span>No Cost EMI</span></div>
                     <div><span>UPto 8,450 Off on Exchange</span></div>
               </container>
           </container>
           <container style={{
               display:"flex",paddingLeft:"25px"}}>
               <span><CheckBoxOutlineBlankIcon/></span>
               <span style={{paddingTop:"5px",paddingLeft:"5px"}}>Add to compare</span>
           </container>
           
           
           </div>
           </div>  
      

        </div>

        
    );
}

export default Header
