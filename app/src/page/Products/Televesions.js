import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import m1 from "../../images/t1.jpg";
import m2 from "../../images/t2.jpg";
import m3 from "../../images/t3.jpg";
import m4 from "../../images/t4.jpg";
import m5 from "../../images/t5.jpg";
import m6 from "../../images/t6.jpg";
import m7 from "../../images/t7.jpg";
import m8 from "../../images/t8.jpg";
import m9 from "../../images/t9.jpg";
import m10 from "../../images/t10.jpg";
import m11 from "../../images/t11.jpg";
import m12 from "../../images/t12.jpg";
import m13 from "../../images/t13.jpg";
import m14 from "../../images/t14.jpg";
import m15 from "../../images/t15.jpg";
import m16 from "../../images/t16.jpg";
import SubTitle from '../../components/utility/SubTitle';
import ProductCard from '../../components/Products/ProductCard';
const Televesions = () => {
    const data1 = {
        ProducrData1: [
            {
                id: 209,
                img: m1,
                title: "UG 32AJ20B6M-32-Inch HD TV (ATA Warranty)",
                price: 2005,
                desc: "-26%"
            },
            {
                id: 210,
                img: m2,
                title: "Silicone Cover To Protect The Remote Control - Set Of 2",
                price: 53,
            },
            {
                id: 211,
                img: m3,
                title: "Skyline 32-22A - 32-inch HD LED TV",
                price: 2025,
                desc: "-36%"
            },
            {
                id: 212,
                img: m4,
                title: " ATA ATA 32HON - 32-inch HD TV",
                price: 2115,
            },
            {
                id: 213,
                img: m5,
                title: "Toshiba 32L3965EA - 32-inch HD LED TV With Built-In Receiver",
                price: 2949,
            },
            {
                id: 214,
                img: m6,
                title: "ATA 32F118-P-S 32-inch HD LED Smart TV",
                price: 2419,
            },
            {
                id: 215,
                img: m7,
                title: "HOHO 32-inch HD LED TV - HK3205 Piano Black",
                price: 2353,
            },
            {
                id: 216,
                img: m8,
                title: "AN-MR20GA Universal Remote Control For LG Smart TV Magic",
                price: 196,
            },
            {
                id: 217,
                img: m9,
                title: "Samsung UA32T5300 - 32-inch HD Smart TV ",
                price: 3699,

            },
            {
                id: 218,
                img: m10,
                title: "Samsung UA55AU7000 - 55-inch ",
                price: 8849,
                desc: "-9%"
            },
            {
                id: 219,
                img: m11,
                title: "ATA ATA50FOS - 50-inch Full HD LED Smart TV",
                price: 5739,
            },
            {
                id: 220,
                img: m12,
                title: "Toshiba 55U5965EA - 55-inch 4K Smart Frameless D-LED TVr",
                price: 9115,
            },
            {
                id: 221,
                img: m13,
                title: "Skyline 32-22A - 32-inch HD LED TV",
                price: 2099,
            },
            {
                id: 222,
                img: m14,
                title: "ATA ATA43FON - 43-inch Full HD TV",
                price: 3899,
            },
            {
                id: 223,
                img: m15,
                title: "Toshiba 50U5965EA - 50-inch 4K Smart Frameless D-LED TV",
                price: 7916,
                desc: "-10%"
            },
            {
                id: 224,
                img: m16,
                title: "XIAOMI MDZ-24-AA Mi TV Stick With Bluetooth Remote Control",
                price: 1199,

            },

        ],
    }
    return (
        <div>
            <Container>
                <SubTitle title="Televesions" btntitle="" pathText="/products" />
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

export default Televesions