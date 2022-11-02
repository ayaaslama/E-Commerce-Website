import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import m1 from "../../images/c1.jpg";
import m2 from "../../images/c2.jpg";
import m3 from "../../images/c3.jpg";
import m4 from "../../images/c4.jpg";
import m5 from "../../images/c5.jpg";
import m6 from "../../images/c6.jpg";
import m7 from "../../images/c7.jpg";
import m8 from "../../images/c8.jpg";
import m9 from "../../images/c9.jpg";
import m10 from "../../images/c10.jpg";
import m11 from "../../images/c11.jpg";
import m12 from "../../images/c12.jpg";
import m13 from "../../images/c13.jpg";
import m14 from "../../images/c14.jpg";
import m15 from "../../images/c15.jpg";
import m16 from "../../images/c16.jpg";
import SubTitle from '../../components/utility/SubTitle';
import ProductCard from '../../components/Products/ProductCard';
const Computing = () => {
    const data1 = {
        ProducrData1: [
            {
                id: 25,
                img: m1,
                title: "Kingston 480GB - A400 SSD 2.5-inch SATA III Internal Solid State Drive",
                price: 865,
                desc: "-33%"
            },
            {
                id: 26,
                img: m2,
                title: "DELL Inspiron 5410 2",
                price: 21522,
                desc: "-6%"
            },
            {
                id: 27,
                img: m3,
                title: "Lenovo Ideapad Gaming 3 Laptop",
                price: 18134,
                desc: "-9%"
            },
            {
                id: 28,
                img: m4,
                title: "Razer Bundle Of Cynosa Lite Keyboard + Abyssus Lite Mouse",
                price: 1666,
            },
            {
                id: 29,
                img: m5,
                title: "Razer Gigantus V2 Soft Gaming Mouse",
                price: 777,
            },
            {
                id: 30,
                img: m6,
                title: "HP 8DX48AA Wired Backlit Gaming Mouse - Black",
                price: 309,
            },
            {
                id: 31,
                img: m7,
                title: "HP 6VY95AA X200 Wireless Mouse - Black",
                price: 223,
                desc: "-25%"
            },
            {
                id: 32,
                img: m8,
                title: "ZERO Screen Cleaner Kit For Pc&Laptop ",
                price: 65,
            },
            {
                id: 33,
                img: m9,
                title: "Lenovo Ideapad Gaming 3 Laptop ",
                price: 18699,

            },
            {
                id: 34,
                img: m10,
                title: "Foldable Tablet Stand Bracket Laptop Holder",
                price: 50,
            },
            {
                id: 35,
                img: m11,
                title: "HP 240 G7-1L3L4Ea Notebook Laptop ",
                price: 7766,
            },
            {
                id: 36,
                img: m12,
                title: "High Definition HDMI Male To Male Cable - 1.20 Meter",
                price: 30,
                desc: "-40%"
            },
            {
                id: 37,
                img: m13,
                title: "Kingston 16GB DDR4 2666MHZ SODIMM Laptop Memory Module",
                price: 1399,
            },
            {
                id: 38,
                img: m14,
                title: "Ugreen Ultra Slim Ethernet Cable 10gbps Cat 6a Od2.8mm Utp Round",
                price: 150,
            },
            {
                id: 39,
                img: m15,
                title: "Computer Monitor Stand",
                price: 199,
                desc: "-50%"
            },
            {
                id: 40,
                img: m16,
                title: "Wooden Table For Laptops",
                price: 350,

            },

        ],
    }
    return (
        <div>
            <Container>
                <SubTitle title="Computing" btntitle="" pathText="/products" />
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

export default Computing