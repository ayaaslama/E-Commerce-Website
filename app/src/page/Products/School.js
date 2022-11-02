import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import sc1 from "../../images/sc1.jpg";
import sc2 from "../../images/sc2.jpg";
import sc3 from "../../images/sc3.jpg";
import sc4 from "../../images/sc4.jpg";
import sc5 from "../../images/sc5.jpg";
import sc6 from "../../images/sc6.jpg";
import sc7 from "../../images/sc7.jpg";
import sc8 from "../../images/sc8.jpg";
import sc9 from "../../images/sc9.jpg";
import sc10 from "../../images/sc10.jpg";
import sc11 from "../../images/sc11.jpg";
import sc12 from "../../images/sc12.jpg";
import sc13 from "../../images/sc13.jpg";
import sc14 from "../../images/sc14.jpg";
import sc15 from "../../images/sc15.jpg";
import sc16 from "../../images/sc16.jpg";
import ProductCard from '../../components/Products/ProductCard';
import SubTitle from '../../components/utility/SubTitle';
const School = () => {
    const data1 = {
        ProducrData1: [
            {
                id: 137,
                img: sc1,
                title: "Men Women Chef Uniform",
                price: 389,
            },
            {
                id: 138,
                img: sc2,
                title: "Set Suits Blouses ",
                price: 520,
            },
            {
                id: 139,
                img: sc3,
                title: "Girl's Black Leather Flat Shoes",
                price: 355,
            },
            {
                id: 140,
                img: sc4,
                title: "Fashion Girls' Leather Shoes",
                price: 844,
            },
            {
                id: 141,
                img: sc5,
                title: "Set Short-Sleeve Lab Tunic Healthcare Suit",
                price: 320,
            },
            {
                id: 142,
                img: sc6,
                title: "Notebook A5 - Cream Paper - Soft ",
                price: 76,
            },
            {
                id: 143,
                img: sc7,
                title: "Unisex School Polo - Rose",
                price: 160,
                desc: "-60%"
            },
            {
                id: 144,
                img: sc8,
                title: "Printed A5 Notebook ",
                price: 49,
            },
            {
                id: 145,
                img: sc9,
                title: "MG Bottle Glitter Liquid Glue Slime",
                price: 35,
            },
            {
                id: 146,
                img: sc10,
                title: "Bravo Stylus Pen",
                price: 25,
            },
            {
                id: 147,
                img: sc11,
                title: "Bow Pants For School",
                price: 375,
            },
            {
                id: 148,
                img: sc12,
                title: "School Shoes For Girls - Black",
                price: 300,
            },
            {
                id: 149,
                img: sc13,
                title: "Boy's Black Leather Flat Sneakers Shoes",
                price: 299,
            },
            {
                id: 150,
                img: sc14,
                title: "School Backpack New , 33*45 Cm , Beige",
                price: 330,
                desc: "-27$"
            },
            {
                id: 151,
                img: sc15,
                title: "4Pcs/set School Bags",
                price: 325,
            },
            {
                id: 152,
                img: sc16,
                title: "Glue Gun + 10 Pcs / Hot Melt Glue Stick + Azwaaa Bag",
                price: 85,
            },

        ],
    }
    return (
        <div>
            <Container>
                <SubTitle title="School Essentials" btntitle="" pathText="/products" />
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

export default School