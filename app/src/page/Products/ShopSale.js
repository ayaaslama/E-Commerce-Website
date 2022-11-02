import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import s1 from "../../images/sale1.jpg";
import s2 from "../../images/sale2.jpg";
import s3 from "../../images/sale3.jpg";
import s4 from "../../images/sale4.jpg";
import s5 from "../../images/sale5.jpg";
import s6 from "../../images/sale6.jpg";
import s7 from "../../images/sale7.jpg";
import s8 from "../../images/sale8.jpg";
import s9 from "../../images/sale9.jpg";
import s10 from "../../images/sale10.jpg";
import s11 from "../../images/sale11.jpg";
import s12 from "../../images/sale12.jpg";
import s13 from "../../images/sale13.jpg";
import s14 from "../../images/sale14.jpg";
import s15 from "../../images/sale15.jpg";
import s16 from "../../images/sale16.jpg";
import ProductCard from '../../components/Products/ProductCard';
import SubTitle from '../../components/utility/SubTitle';
const ShopProductsPage = () => {
    const data1 = {
        ProducrData1: [
            {
                id: 5,
                img: s2,
                title: "NIVEA MEN Fresh",
                price: 23.90,
                desc: "-25 %",
            },
            {
                id: 6,
                img: s1,
                title: "(4) Socks",
                price: 29.00,
                desc: "-25 %",
            },
            {
                id: 7,
                img: s4,
                title: "Pink Canvas Trainers",
                price: " 89.00",
                desc: "-56 %",
            },
            {
                id: 8,
                img: s3,
                title: "Aldoha Flour–1Kg",
                price: " 15.00",
                desc: "-32 %",
            },
            {
                id: 165,
                img: s5,
                title: "ATA ATA 32HON - 32-inch HD TV",
                price: 2115,
                desc: "-22 %",
            },
            {
                id: 166,
                img: s6,
                title: "SunSet Blouse For Women-black",
                price: 225,
                desc: "-50 %",
            },
            {
                id: 167,
                img: s7,
                title: "Backpack With Outer Pocket-Steal Blue",
                price: " 169.00",
                desc: "-58 %",
            },
            {
                id: 168,
                img: s8,
                title: "Long Sleeves With Pattern-Multicolour",
                price: " 183.00",
                desc: "-55 %",
            },
            {
                id: 169,
                img: s9,
                title: "Long Sweatshirt-Jade",
                price: 209,
                desc: "-44 %",
            },
            {
                id: 170,
                img: s10,
                title: "Backpack With Outer Pocket-Mauve",
                price: 169,
                desc: "-58 %",
            },
            {
                id: 171,
                img: s11,
                title: "Men Casual Pant-Gray",
                price: " 295",
                desc: "-43 %",
            },
            {
                id: 172,
                img: s12,
                title: "canvas Lace Up Shoes For Men-black",
                price: " 209.00",
                desc: "-62 %",
            },
            {
                id: 173,
                img: s13,
                title: "Man Black Regular Fit Trousers",
                price: 160,
                desc: "-60 %",
            },
            {
                id: 174,
                img: s14,
                title: "Slippers For Men-Black And Blue",
                price: 49.00,
                desc: "-58 %",
            },
            {
                id: 175,
                img: s15,
                title: "Woman Yellow Dress",
                price: 160,
                desc: "-56 %",
            },
            {
                id: 176,
                img: s16,
                title: "Three Full Coverage Non-wired Cross Back Sportive Bra",
                price: 99.99,
                desc: "-32 %",
            },


        ],
    }
    return (
        <div>
            <Container>
                <SubTitle title="Flash Sale" btntitle="" pathText="/products" />
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

export default ShopProductsPage