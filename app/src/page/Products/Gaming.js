import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import g1 from "../../images/g1.jpg";
import g2 from "../../images/g2.jpg";
import g3 from "../../images/g3.jpg";
import g4 from "../../images/g4.jpg";
import g5 from "../../images/g5.jpg";
import g6 from "../../images/g6.jpg";
import g7 from "../../images/g7.jpg";
import g8 from "../../images/g8.jpg";
import g9 from "../../images/g9.jpg";
import g10 from "../../images/g10.jpg";
import g11 from "../../images/g11.jpg";
import g12 from "../../images/g12.jpg";
import g13 from "../../images/g13.jpg";
import g14 from "../../images/g14.jpg";
import g15 from "../../images/g15.jpg";
import g16 from "../../images/g16.jpg";
import ProductCard from '../../components/Products/ProductCard';
import SubTitle from '../../components/utility/SubTitle';
const Gaming = () => {
    const data1 = {
        ProducrData1: [
            {
                id: 57,
                img: g1,
                title: "Gaming Headphone With Mic - Black/Blue",
                price: 324,
                desc: "-73%"
            },
            {
                id: 58,
                img: g2,
                title: "Thumbstick Grip Controller Cover ",
                price: 50,
            },
            {
                id: 59,
                img: g3,
                title: "Touch Screen Pen",
                price: 50,
                desc: "-50%"
            },
            {
                id: 60,
                img: g4,
                title: "Mobile Phone Cooler Cooling Fan Game Pad Holder",
                price: 87,
            },
            {
                id: 61,
                img: g5,
                title: "Games Marvel's Spider-Man Miles Morales",
                price: 1050,
            },
            {
                id: 62,
                img: g6,
                title: "Nintendo Switch Lite Silicone Case Cover",
                price: 150,
            },
            {
                id: 63,
                img: g7,
                title: "Microsoft Xbox Series X-1TB Game Console+Extra Controller",
                price: 16499,
            },
            {
                id: 64,
                img: g8,
                title: "Dobe Protective Suit For X-Series S / X Blue ",
                price: 275,
            },
            {
                id: 65,
                img: g9,
                title: "Rockstar Games Grand Theft Auto V Ps5 Game",
                price: 874,
            },
            {
                id: 66,
                img: g10,
                title: "EA Sports FIFA 22 - PlayStation 4 - English",
                price: 734,
            },
            {
                id: 67,
                img: g11,
                title: "Deep Silver Saints Row PS5",
                price: 1450,
            },
            {
                id: 68,
                img: g12,
                title: "Sony PlayStation 5 Console – Middle East Edition",
                price: 17888,
            },
            {
                id: 69,
                img: g13,
                title: "Sony PlayStation 3 -320G Gaming Console - Black",
                price: 3999,
            },
            {
                id: 70,
                img: g14,
                title: "Colored Wood Puzzle",
                price: 150,
            },
            {
                id: 71,
                img: g15,
                title: " Cooling Stand FOR PS5-PS5 Digtal Edtion With Touch Screen",
                price: 999,
                desc: "-17%"
            },
            {
                id: 72,
                img: g16,
                title: "Sony Interactive Entertainment Sackboy™: A Big Adventure-PS4",
                price: 810,
            },

        ],
    }
    return (
        <div>
            <Container>
                <SubTitle title="Gaming&PlayStation" btntitle="" pathText="/products" />
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

export default Gaming