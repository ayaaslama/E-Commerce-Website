import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import k1 from "../../images/kid1.jpg";
import k2 from "../../images/kid2.jpg";
import k3 from "../../images/kid3.jpg";
import k4 from "../../images/kid4.jpg";
import k5 from "../../images/kid5.jpg";
import k6 from "../../images/kid6.jpg";
import k7 from "../../images/kid7.jpg";
import k8 from "../../images/kid8.jpg";
import k9 from "../../images/kid9.jpg";
import k10 from "../../images/kid10.jpg";
import k11 from "../../images/kid11.jpg";
import k12 from "../../images/kid12.jpg";
import k13 from "../../images/kid13.jpg";
import k14 from "../../images/kid14.jpg";
import k15 from "../../images/kid15.jpg";
import k16 from "../../images/kid16.jpg";
import ProductCard from '../../components/Products/ProductCard';
import SubTitle from '../../components/utility/SubTitle';
const Kid = () => {
    const data1 = {
        ProducrData1: [
            {
                id: 73,
                img: k1,
                title: "Cutie Baby Bottle With Handle And Filter",
                price: 50,
            },
            {
                id: 74,
                img: k2,
                title: "Blankie 3 In 1 Baby Shampoo, Conditioner & Body Wash",
                price: 100,
                desc: "-50%"
            },
            {
                id: 75,
                img: k3,
                title: "Pampers Pants with lotion with Olive Oil",
                price: 94,
                desc: "-14%"
            },
            {
                id: 76,
                img: k4,
                title: "Sanosan Lotion Wipes",
                price: 135,
            },
            {
                id: 77,
                img: k5,
                title: "Hero Baby Mixed Fruits Jar",
                price: 27.75,
                desc: "-20%"
            },
            {
                id: 78,
                img: k6,
                title: "General Infant-to-Toddler Rocker For Babies",
                price: 850,
            },
            {
                id: 79,
                img: k7,
                title: "Kids Shampoo & Bath",
                price: 111,
            },
            {
                id: 80,
                img: k8,
                title: "Hero Baby Rice Cereal Without Milk",
                price: 22,
            },
            {
                id: 81,
                img: k9,
                title: "L'Oreal Paris Shampoo Kids Very Berry Strawberry ",
                price: 149,
            },
            {
                id: 82,
                img: k10,
                title: "Hero Baby Good Night Rice & Corn",
                price: 27,
            },
            {
                id: 83,
                img: k11,
                title: "Huggies Splasher Diaper",
                price: 399,
            },
            {
                id: 84,
                img: k12,
                title: "Junior Sleeveless T-shirt + Printed Pants",
                price: 250,
            },
            {
                id: 85,
                img: k13,
                title: "Junior Sleeveless T-shirt + Printed Short",
                price: 285,
            },
            {
                id: 86,
                img: k14,
                title: "Bambini Set For Girls",
                price: 220,
                desc: "-44%"
            },
            {
                id: 87,
                img: k15,
                title: "Umbrella Baby Stroller Flip Arm-red",
                price: 3250,
            },
            {
                id: 88,
                img: k16,
                title: "Penduline ِِApricot Hair Cream For Kids",
                price: 115,
            },

        ],
    }
    return (
        <div>
            <Container>
                <SubTitle title="Kids&Baby Products" btntitle="" pathText="/products" />
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

export default Kid