import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../../components/Products/CardProductsContainer'

import beauty1 from "../../images/beauty1.jpg";
import beauty2 from "../../images/beauty2.jpg";
import beauty3 from "../../images/beauty3.jpg";
import beauty4 from "../../images/beauty4.jpg";
import beauty5 from "../../images/beauty5.jpg";
import beauty6 from "../../images/beauty6.jpg";
import beauty7 from "../../images/beauty7.jpg";
import beauty8 from "../../images/beauty8.jpg";
import beauty9 from "../../images/beauty9.jpg";
import beauty10 from "../../images/beauty10.jpg";
import beauty11 from "../../images/beauty11.jpg";
import beauty12 from "../../images/beauty12.jpg";
import beauty13 from "../../images/beauty13.jpg";
import beauty14 from "../../images/beauty14.jpg";
import beauty15 from "../../images/beauty15.jpg";
import beauty16 from "../../images/beauty6.jpg";
import SubTitle from '../../components/utility/SubTitle';
import ProductCard from '../../components/Products/ProductCard';
const BeautyShop = () => {
    const data1 = {
        ProducrData1: [
            {
                id: 9,
                img: beauty1,
                title: "Baby Skin Instant Pore Eraser Foundation Primer - 22ml",
                price: 190.00,
            },
            {
                id: 10,
                img: beauty2,
                title: "Matte & Poreless Foundation - 128 Warm Nude",
                price: 159.50,
                desc: "-13%"
            },
            {
                id: 11,
                img: beauty3,
                title: "L'Oreal Paris Tissue Mask",
                price: 44.00,
                desc: "-12%"
            },
            {
                id: 12,
                img: beauty4,
                title: " Sensodyne Multi Care + Whitening Toothpaste For Sensitive Teeth ",
                price: 115.00,
            },
            {
                id: 13,
                img: beauty5,
                title: "NIVEA MEN Invisible Black & White Spray",
                price: 42.00,
            },
            {
                id: 14,
                img: beauty6,
                title: "Luna Super Emollient Moisturizing Cream Kit",
                price: 86.75,
            },
            {
                id: 15,
                img: beauty7,
                title: "NIVEA Cocoa Butter Body Cream, Vitamin E, Dry Skin ",
                price: 16,
                desc: "-11%"
            },
            {
                id: 16,
                img: beauty8,
                title: "Eyeshadow Professional Palette - 18 Colors",
                price: 99,
            },
            {
                id: 17,
                img: beauty9,
                title: "Karimed SNOW SHINE Micellar Water Makeup Remover Rose 100ML",
                price: 20,
                desc: "-49%"
            },
            {
                id: 18,
                img: beauty10,
                title: "HM Collection Attractive - EDT - For Women",
                price: 35,
            },
            {
                id: 19,
                img: beauty11,
                title: "SIME HAIR Leave In Bonding Cream - 100ml",
                price: 41,
            },
            {
                id: 20,
                img: beauty12,
                title: "Eyeshadow Stick Color Strike - 15 Tempt",
                price: 120,
            },
            {
                id: 21,
                img: beauty13,
                title: "L'Oreal Paris Hyaluron Expert 1.5% Hyaluronic Acid Serum",
                price: 255,
            },
            {
                id: 22,
                img: beauty14,
                title: "Garnier Skin Active Micellar Brightening With Vitamin C",
                price: 150,
            },
            {
                id: 23,
                img: beauty15,
                title: "L'Oreal Paris Hyaluron Expert Repluming Moisturizing Eye Cream",
                price: 112,
            },
            {
                id: 24,
                img: beauty16,
                title: "L'oreal Elvive Dream Long Straight",
                price: 33.5,
                desc: "-13%"
            },

        ],
    }
    return (

        <div>
            <Container>
                <SubTitle title="Beauty Essential" btntitle="" pathText="/products" />
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

export default BeautyShop