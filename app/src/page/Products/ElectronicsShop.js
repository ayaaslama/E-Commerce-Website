import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import e1 from "../../images/e1.jpg";
import e2 from "../../images/e2.jpg";
import e3 from "../../images/e3.jpg";
import e4 from "../../images/e4.jpg";
import e5 from "../../images/e5.jpg";
import e6 from "../../images/e6.jpg";
import e7 from "../../images/e7.jpg";
import e8 from "../../images/e8.jpg";
import e9 from "../../images/e9.jpg";
import e10 from "../../images/e10.jpg";
import e11 from "../../images/e11.jpg";
import e12 from "../../images/e12.jpg";
import e13 from "../../images/e13.jpg";
import e14 from "../../images/e14.jpg";
import e15 from "../../images/e15.jpg";
import e16 from "../../images/e16.jpg";
import ProductCard from '../../components/Products/ProductCard';
import SubTitle from '../../components/utility/SubTitle';
const ElectronicsShop = () => {
    const data1 = {
        ProducrData1: [
            {
                id: 41,
                img: e1,
                title: "U12 Smart Voice Remote Control - Gyroscope - Black",
                price: 169,
                desc: "-30%"
            },
            {
                id: 42,
                img: e2,
                title: "Protective Silicone For Apple AirPods 3 2021 Case Head",
                price: 94,
            },
            {
                id: 43,
                img: e3,
                title: "TB Replacement Rubber Conductive Pad For PlayStation",
                price: 25,
            },
            {
                id: 44,
                img: e4,
                title: "Ring Fill Light For Professional Photography ",
                price: 179,
                desc: "-46%"
            },
            {
                id: 45,
                img: e5,
                title: "Leotec Radio - Black Color - Lt.2008+ Gift Bag From Dukan",
                price: 270,
            },
            {
                id: 46,
                img: e6,
                title: "Elmaghraby Multi Plug Extension Electrical Socket  ",
                price: 192,
            },
            {
                id: 47,
                img: e7,
                title: "Philips Clock-Radio Philips TAR3306 + Azwaaa Bag",
                price: 1899,
                desc: "-62%"
            },
            {
                id: 48,
                img: e8,
                title: "Toshiba Smart VIDAA LED TV 43 Inch",
                price: 6298,
            },
            {
                id: 49,
                img: e9,
                title: "LG 32LM637BPVA Series HD Smart LED TV-32Inch",
                price: 3899,
                desx: "-34%"
            },
            {
                id: 50,
                img: e10,
                title: "Canon F-718SGA Calculator",
                price: 300,
            },
            {
                id: 51,
                img: e11,
                title: "HDMI Video Capture With Loop Out",
                price: 999,
            },
            {
                id: 52,
                img: e12,
                title: "Anker Soundcore 3i Noise Cancelling Water +32GB",
                price: 1625,
            },
            {
                id: 53,
                img: e13,
                title: "Samsung QLED TV(1.5 M HDMI 2.1 Cable)",
                price: 1970,
            },
            {
                id: 54,
                img: e14,
                title: "Kingjoy VX103 Dollly Wheel.",
                price: 405,
            },
            {
                id: 55,
                img: e15,
                title: "XIAOMI ZBW4354TY In-Ear Headphones",
                price: 139,
                desc: "-30%"
            },
            {
                id: 56,
                img: e16,
                title: "Touch Control Wireless Bluetooth Led Speaker - White",
                price: 119,
                desc: "-12%"
            },

        ],
    }
    return (
        <div>
            <Container>
                <SubTitle title="Electronics" btntitle="" pathText="/products" />
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

export default ElectronicsShop