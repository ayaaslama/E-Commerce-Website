import React from 'react'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import { Col, Container, Row } from 'react-bootstrap'
import k1 from "../../images/k1.jpg";
import k2 from "../../images/k2.jpg";
import k3 from "../../images/k3.jpg";
import k4 from "../../images/k4.jpg";
import k5 from "../../images/k5.jpg";
import k6 from "../../images/k6.jpg";
import k7 from "../../images/k7.jpg";
import k8 from "../../images/k8.jpg";
import k9 from "../../images/k9.jpg";
import k10 from "../../images/k10.jpg";
import k11 from "../../images/k11.jpg";
import k12 from "../../images/k12.jpg";
import k13 from "../../images/k13.jpg";
import k14 from "../../images/k14.jpg";
import k15 from "../../images/k15.jpg";
import k16 from "../../images/k16.jpg";
import SubTitle from '../../components/utility/SubTitle';
import ProductCard from '../../components/Products/ProductCard';
const Kitchen = () => {
    const data1 = {
        ProducrData1: [
            {
                id: 89,
                img: k1,
                title: "Stainless Steel Kettle – 1.8 L",
                price: 150,
                desc: "-40%"
            },
            {
                id: 90,
                img: k2,
                title: "Digital Kitchen Scales",
                price: 139,
            },
            {
                id: 91,
                img: k3,
                title: "Digital Food Scale - 10Kg",
                price: 98,
                desc: "-67%"
            },
            {
                id: 92,
                img: k4,
                title: " Nescafe Racket, Foam Maker",
                price: 299,
            },
            {
                id: 93,
                img: k5,
                title: "Kenwood HM330 Hand Mixer",
                price: 509,
            },
            {
                id: 94,
                img: k6,
                title: "BLACK+DECKER AF300 Airfryer - 4 L",
                price: 2554,
            },
            {
                id: 95,
                img: k7,
                title: "Electric Nescafe Racket,Foam Maker Sokany",
                price: 278,
            },
            {
                id: 96,
                img: k8,
                title: "Fresh Electric Kettle-1.7L-Black",
                price: 169,
                desc: "-60%"
            },
            {
                id: 97,
                img: k9,
                title: "Silicone Collapsible Funnel",
                price: 311,
            },
            {
                id: 98,
                img: k10,
                title: "Media Tech MT-H233 Hand Mixer-500 W",
                price: 10.99,
            },
            {
                id: 99,
                img: k11,
                title: "Plastic Colander Set–3 Pieces",
                price: 295,
            },
            {
                id: 100,
                img: k12,
                title: "Healthy Air Fryer 5.5 Liters 2.4KG",
                price: 49,
                desc: "-38%"
            },
            {
                id: 101,
                img: k13,
                title: "1Pcs Kitchen Baking Glass Oil Sprayer",
                price: 3857,
            },
            {
                id: 102,
                img: k14,
                title: "Stainless Steel Deep Fry Strainer- 3 Pcs",
                price: 59,
            },
            {
                id: 103,
                img: k15,
                title: "Organizer Shelf For Towels And Other Kitchen Utensils",
                price: 65,
            },
            {
                id: 104,
                img: k16,
                title: "Garlic Mincer Pull",
                price: 57,
                desc: "-32%"
            },


        ],
    }
    return (
        <div>
            <Container>
                <SubTitle title="Kitchen Essentials" btntitle="" pathText="/products" />
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

export default Kitchen