import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import m1 from "../../images/sup1.jpg";
import m2 from "../../images/sup2.jpg";
import m3 from "../../images/sup3.jpg";
import m4 from "../../images/sup4.jpg";
import m5 from "../../images/sup5.jpg";
import m6 from "../../images/sup6.jpg";
import m7 from "../../images/sup7.jpg";
import m8 from "../../images/sup8.jpg";
import m9 from "../../images/sup9.jpg";
import m10 from "../../images/sup10.jpg";
import m11 from "../../images/sup11.jpg";
import m12 from "../../images/sup12.jpg";
import m13 from "../../images/sup13.jpg";
import m14 from "../../images/sup14.jpg";
import m15 from "../../images/sup15.jpg";
import m16 from "../../images/sup16.jpg";
import SubTitle from '../../components/utility/SubTitle';
import ProductCard from '../../components/Products/ProductCard';
const Supermarket = () => {
    const data1 = {
        ProducrData1: [
            {
                id: 193,
                img: m1,
                title: "Zamzam Premium Egyptian White Rice - 5 kg",
                price: 90,
            },
            {
                id: 194,
                img: m2,
                title: "Harniva Flower Honey 850g",
                price: 180,
            },
            {
                id: 195,
                img: m3,
                title: "Daria White Basmati Rice -1 Kg",
                price: 57,
                desc: "-36%"
            },
            {
                id: 196,
                img: m4,
                title: " Mr. Food Golden Basmati Rice - 1 Kg",
                price: 42,
            },
            {
                id: 197,
                img: m5,
                title: "Tahbisha Natural and Milled Table Salt with Cumin - 100 grams",
                price: 12,
            },
            {
                id: 198,
                img: m6,
                title: "Daria Thai Golden Rice – 1 Kg ",
                price: 50,
            },
            {
                id: 199,
                img: m7,
                title: "Kohinoor Kohinoor Extra Basmati Rice Gold - 1K",
                price: 82,
                desc: "-6%"
            },
            {
                id: 200,
                img: m8,
                title: "shana Basmati Golden Rice - 1 KG",
                price: 51,
            },
            {
                id: 201,
                img: m9,
                title: "HAND WASH Powder Detergent - 10 Kg ",
                price: 205,

            },
            {
                id: 202,
                img: m10,
                title: "Abu Bint Abu Bint Golden Parboiled Rice – 2Kg",
                price: 99,
            },
            {
                id: 203,
                img: m11,
                title: "Derma Turkish Coffee Medium 250",
                price: 48,
            },
            {
                id: 204,
                img: m12,
                title: "Chefy Mix Mexican Rice Mix - 150g",
                price: 14.50,
            },
            {
                id: 205,
                img: m13,
                title: "Nahrain Indian White Basmati Rice Extra Long Grain - 1 kg",
                price: 99,
            },
            {
                id: 206,
                img: m14,
                title: "Alsuhagy White Flour – 1 Kg",
                price: 16,
            },
            {
                id: 207,
                img: m15,
                title: "Dettol Healthy Bathroom Power Cleaner Spray",
                price: 132.25,
                desc: "-20%"
            },
            {
                id: 208,
                img: m16,
                title: "Temmys Choco Rice - 375gm",
                price: 62,

            },

        ],
    }
    return (
        <div>
            <Container>
                <SubTitle title="Supermarket" btntitle="" pathText="/products" />
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

export default Supermarket