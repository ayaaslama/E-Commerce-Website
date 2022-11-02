import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import s1 from "../../images/s1.jpg";
import s2 from "../../images/s2.jpg";
import s3 from "../../images/s3.jpg";
import s4 from "../../images/s4.jpg";
import s5 from "../../images/s5.jpg";
import s6 from "../../images/s6.jpg";
import s7 from "../../images/s7.jpg";
import s8 from "../../images/s8.jpg";
import s9 from "../../images/s9.jpg";
import s10 from "../../images/s10.jpg";
import s11 from "../../images/s11.jpg";
import s12 from "../../images/s12.jpg";
import s13 from "../../images/s13.jpg";
import s14 from "../../images/s14.jpg";
import s15 from "../../images/s15.jpg";
import s16 from "../../images/s16.jpg";
import SubTitle from '../../components/utility/SubTitle';
import ProductCard from '../../components/Products/ProductCard';
const Sport = () => {
    const data1 = {
        ProducrData1: [
            {
                id: 177,
                img: s1,
                title: "SPORT SHOES FOR MEN IN COLOR BLACK ",
                price: 935,
            },
            {
                id: 178,
                img: s2,
                title: "Adidas REAL MADRID HOME MINI FOOTBALL",
                price: 339,
            },
            {
                id: 179,
                img: s3,
                title: "Anta Backpack Cross Training In Color Black Printing",
                price: 799,
            },
            {
                id: 180,
                img: s4,
                title: "FITNESS & TRAINING SWEATSHIRT ",
                price: 903,
            },
            {
                id: 181,
                img: s5,
                title: "Strappy Back Longline Sports",
                price: 150,
                desc: "-80%"
            },
            {
                id: 182,
                img: s6,
                title: "Training Marimekko Techfit Long Tights",
                price: 800,
            },
            {
                id: 183,
                img: s7,
                title: "Stores Canvas Gym Bag-Brand Stores",
                price: 110,
            },
            {
                id: 184,
                img: s8,
                title: "Energizer Universal Plus LED Battery-powered Headlamp",
                price: 164,
            },
            {
                id: 185,
                img: s9,
                title: "Aolikes Carpal Tunnel Wrist Brace",
                price: 180,
            },
            {
                id: 186,
                img: s10,
                title: "Jawsercise And Jaw Lift Jawline Fitness Device",
                price: 250,
            },
            {
                id: 187,
                img: s11,
                title: "Fitness Exercises Resistance Bands Set-Yoga Pilates ",
                price: 165,
            },
            {
                id: 188,
                img: s12,
                title: "Spurt Silicone Swim Cap - Multicolor",
                price: 75,
            },
            {
                id: 189,
                img: s13,
                title: "No Band Baseball Bat Made Of Beech Wood",
                price: 120,
            },
            {
                id: 190,
                img: s14,
                title: "Adult Roller Skates Brakes Pads Inline Roller Skate Shoes",
                price: 288,
                desc: "-94%"
            },
            {
                id: 191,
                img: s15,
                title: "Water Bottle",
                price: 79,
            },
            {
                id: 192,
                img: s16,
                title: "Icon Fitness Treadmill Dk42 With Blue Screen",
                price: 7800,
            },

        ],
    }
    return (
        <div>
            <Container>
                <SubTitle title="Sports Essentials" btntitle="" pathText="/products" />
                <div className='row justify-content-center'>
                    {data1.ProducrData1.map((item, index) => {
                        return (
                            <ProductCard
                                img={item.img}
                                title={item.title}
                                price={item.price}
                                desc={item.desc}
                                key={index}
                                item={item} />

                        )
                    })}
                </div></Container>
        </div>
    )
}

export default Sport