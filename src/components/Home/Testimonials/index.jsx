import React, { useState } from 'react';
import BackgroundImage from "../../../assets/images/home/jwellery.jpg"
import Carousel from "../../Common/Carousel"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import j1 from "../../../assets/images/newArrivals/j1.webp";
import j2 from "../../../assets/images/newArrivals/j2.webp";
import j3 from "../../../assets/images/newArrivals/j3.webp";
import j4 from "../../../assets/images/newArrivals/j4.webp";
import j5 from "../../../assets/images/newArrivals/j5.webp";
import j6 from "../../../assets/images/newArrivals/j6.webp";
import j7 from "../../../assets/images/newArrivals/j7.webp";
import j8 from "../../../assets/images/newArrivals/j8.webp";
import j9 from "../../../assets/images/newArrivals/j9.webp";
import j10 from "../../../assets/images/newArrivals/j10.webp";
import j11 from "../../../assets/images/newArrivals/j11.webp";
import j12 from "../../../assets/images/newArrivals/j12.webp";
import j13 from "../../../assets/images/newArrivals/j13.webp";
import j14 from "../../../assets/images/newArrivals/j14.webp";
import j15 from "../../../assets/images/newArrivals/j15.webp";


  
const Testimonial = () => {


  const images = [
    { url: j1, heading: "Silver Double Stone Statement Drop Earrings", price: "$25.2"},
    { url: j2, heading: "Silver Diamante Leaf Drop Earrings", price: "$25.2"},
    { url: j3, heading: "Black Beaded Layered Necklace", price: "$25.2"},
    { url: j4, heading: "Silver Plated Classic Cubic Zirconia Stud Earrings", price: "$25.2"},
    { url: j5, heading: "Silver Plated Thick Diamante Bracelet", price: "$25.2"},
    { url: j6, heading: "Silver Pearl Stretch Bracelet 5-Pack", price: "$25.2"},
    { url: j7, heading: "Earrings6", price: "$25.2"},
    { url: j8, heading: "Earrings7", price: "$25.2"},
    { url: j9, heading: "Earrings8", price: "$25.2", },
    { url: j10, heading: "Earrings9", price: "$25.2"},
    { url: j11, heading: "Earrings10", price: "$25.2"},
    { url: j12, heading: "Earrings11", price: "$25.2"},
    { url: j13, heading: "Earrings12", price: "$25.2"},
    { url: j14, heading: "Earrings13", price: "$25.2"},
    { url: j15, heading: "Earrings14", price: "$25.2"},

];


  return (
    <>
      <Carousel images={images} />
    </>
  )
}

export default Testimonial
