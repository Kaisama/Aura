import React from 'react';
import Carousel from "../../Common/Carousel"
import j1 from "../../../assets/images/jewelleryBoxImages/b1.webp";
import j2 from "../../../assets/images/jewelleryBoxImages/b2.webp";
import j3 from "../../../assets/images/jewelleryBoxImages/b3.webp";
import j4 from "../../../assets/images/jewelleryBoxImages/b4.webp";
import j5 from "../../../assets/images/jewelleryBoxImages/b5.webp";
import j6 from "../../../assets/images/jewelleryBoxImages/b6.webp";
import j7 from "../../../assets/images/jewelleryBoxImages/b7.webp";
import j8 from "../../../assets/images/jewelleryBoxImages/b8.webp";
import j9 from "../../../assets/images/jewelleryBoxImages/b9.webp";
import j10 from "../../../assets/images/jewelleryBoxImages/b10.webp";
import j11 from "../../../assets/images/jewelleryBoxImages/b11.webp";
import j12 from "../../../assets/images/jewelleryBoxImages/b12.webp";
import j13 from "../../../assets/images/jewelleryBoxImages/b13.webp";
import j14 from "../../../assets/images/jewelleryBoxImages/b14.webp";
import j15 from "../../../assets/images/jewelleryBoxImages/b15.webp";


  
const JewelleryBoxCards = () => {


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

export default JewelleryBoxCards
