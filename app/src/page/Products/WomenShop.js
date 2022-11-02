import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import w1 from "../../images/w1.jpg";
import w2 from "../../images/w2.jpg";
import w3 from "../../images/w3.jpg";
import w4 from "../../images/w4.jpg";
import w5 from "../../images/w5.jpg";
import w6 from "../../images/w6.jpg";
import w7 from "../../images/w7.jpg";
import w8 from "../../images/w8.jpg";
import w9 from "../../images/w9.jpg";
import w10 from "../../images/w10.jpg";
import w11 from "../../images/w11.jpg";
import w12 from "../../images/w12.jpg";
import w13 from "../../images/w13.jpg";
import w14 from "../../images/w14.jpg";
import w15 from "../../images/w15.jpg";
import w16 from "../../images/w16.jpg";
import ProductCard from '../../components/Products/ProductCard';
import SubTitle from '../../components/utility/SubTitle';
const WomenShop = () => {
    const data1 = {
        ProducrData1: [
            {
                id: 225,
                img: w1,
                title: "Bundle OF ( 12 ) Cat Women Socks",
                price: 59,
                desc: "-26%"
            },
            {
                id: 226,
                img: w2,
                title: "SHEIN Arrow & Circle Bracelet Set 4pcs-6802",
                price: 79,
            },
            {
                id: 227,
                img: w3,
                title: "Long Cardiagn - Rose & Black",
                price: 90,
                desc: "-67%"
            },
            {
                id: 228,
                img: w4,
                title: " Tarso Handbag - Black",
                price: 161,
            },
            {
                id: 229,
                img: w5,
                title: "A Special Dress, Suitable For All Occasions",
                price: 297,
            },
            {
                id: 230,
                img: w6,
                title: "10pcs Faux Pearl Decor Ring-0500",
                price: 79,
            },
            {
                id: 231,
                img: w7,
                title: "Fashion S925 Sterling Silver Ring For Women",
                price: 278,
            },
            {
                id: 232,
                img: w8,
                title: "Flat Fashion Sneakers - White & Pink",
                price: 179,
            },
            {
                id: 233,
                img: w9,
                title: "Lama Wide Leg Pants, Black Color",
                price: 180,

            },
            {
                id: 234,
                img: w10,
                title: "Paita Backpack - Havan",
                price: 165,
                desc: "-9%"
            },
            {
                id: 235,
                img: w11,
                title: "Leather Ankle Boot - Black",
                price: 196,
            },
            {
                id: 236,
                img: w12,
                title: "Black And White Klosh Skirt",
                price: 175,
            },
            {
                id: 237,
                img: w13,
                title: "Cross Town Backpack - Sedona Sun",
                price: 250,
            },
            {
                id: 238,
                img: w14,
                title: "Bundle OF ( 12 ) Creative Women Socks",
                price: 69,
            },
            {
                id: 239,
                img: w15,
                title: "Sport Leggings Pants With Pocket",
                price: 195,
                desc: "-30%"
            },
            {
                id: 240,
                img: w16,
                title: "Tortoiseshell Frame Sunglasses-0386",
                price: 175,

            },

        ],
    }
    return (
        <div>
            <Container>
                <SubTitle title="Women's Fashion" btntitle="" pathText="/products" />
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

export default WomenShop