import React from 'react';
// Import Swiper styles
import { Navigation, Pagination,Lazy} from 'swiper';
import 'swiper/css';
import "swiper/css/lazy";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from "swiper/react";
import * as images from "./images/images";


const imageDataSource:string[] = [images.menu_0,images.menu_1,images.menu_2,images.menu_3,images.menu_4,images.menu_5,images.menu_6,images.menu_7,images.menu_8,images.menu_9,
    images.menu_10,images.menu_11,images.menu_12,images.menu_13,images.menu_14,images.menu_15,images.menu_16,images.menu_17,images.menu_18,images.menu_19,
    images.menu_20,images.menu_21,images.menu_22,images.menu_23,images.menu_24,images.menu_25,images.menu_26,images.menu_27,images.menu_28,images.menu_29,
    images.menu_30
]
function App() {
    const bgWidth = 907;
    const bgHeight = 1280;
    const viewportWidth = document.body.offsetWidth;
    const viewportHeight = document.body.offsetHeight;

    let imageHeight = viewportHeight;
    let imageWidth = (viewportHeight / bgHeight) * bgWidth
    if(imageWidth > viewportWidth){
        imageHeight = viewportWidth / imageWidth * imageHeight;
        imageWidth = viewportWidth;
    }
    let topMargin = 0;
    if(viewportHeight > imageHeight){
        topMargin = (viewportHeight - imageHeight) / 2;
    }
    return (<div style={{background:'black',paddingTop:topMargin,height:'100%'}}><Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
            clickable: true,
        }}
        modules={[Lazy,Pagination,Navigation]}
        lazy={{loadPrevNext:true,loadPrevNextAmount:3}}
    >
        {imageDataSource.map(value => {
            return <SwiperSlide key={value} style={{background:'black',width:imageWidth,height:imageHeight}} >
                    <img  data-src={value} alt={'Menu Rempah'} style={{width:imageWidth,height:imageHeight,borderRadius:20}} width={imageWidth} height={imageHeight} className="swiper-lazy"/>
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"/>
                    <div style={{width:imageWidth,height:imageHeight,top:0,position:'absolute',boxShadow:'0 0 2px 3px rgba(0,0,0,1) inset,0 0 30px 3px rgba(0,0,0,0.3) inset',zIndex:1,borderRadius:20}}/>
            </SwiperSlide>
        })}
    </Swiper></div>);
}

export default App;
