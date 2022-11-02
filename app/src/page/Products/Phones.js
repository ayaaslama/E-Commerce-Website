import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import m1 from "../../images/m1.jpg";
import m2 from "../../images/m2.jpg";
import m3 from "../../images/m3.jpg";
import m4 from "../../images/m4.jpg";
import m5 from "../../images/m5.jpg";
import m6 from "../../images/m6.jpg";
import m7 from "../../images/m7.jpg";
import m8 from "../../images/m8.jpg";
import m9 from "../../images/m9.jpg";
import m10 from "../../images/m10.jpg";
import m11 from "../../images/m11.jpg";
import m12 from "../../images/m12.jpg";
import m13 from "../../images/m13.jpg";
import m14 from "../../images/m14.jpg";
import m15 from "../../images/m15.jpg";
import m16 from "../../images/m16.jpg";
import ProductCard from '../../components/Products/ProductCard';
import SubTitle from '../../components/utility/SubTitle';
const Phones = () => {
    const data1 = {
        ProducrData1: [
            {
                id: 121,
                img: m1,
                title: "Protection Cover With Camera Protection For Samsung A52 / A52s ",
                price: 99,
                desc: "-67%"
            },
            {
                id: 122,
                img: m2,
                title: "Celebrat Stereo Sound Earphone Celebrat G 6",
                price: 50,
            },
            {
                id: 123,
                img: m3,
                title: "Mobile Game Controller ",
                price: 89,
                desc: "-20%"
            },
            {
                id: 124,
                img: m4,
                title: "Huawei P50 Pocket – 6.9-inch 256GB/8GB Dual SIM 4G Mobile Phone",
                price: 32999,
            },
            {
                id: 125,
                img: m5,
                title: "Apple iPhone 12 mini with FaceTime - 64GB",
                price: 19999,
            },
            {
                id: 126,
                img: m6,
                title: "Iphone 13 Pro Max Cover (6.7 Inch) ",
                price: 49,
            },
            {
                id: 127,
                img: m7,
                title: "Nokia 106 - 1.8-inch Dual SIM Mobile Phone",
                price: 419,
                desc: "-20%"
            },
            {
                id: 128,
                img: m8,
                title: "Nokia 130 - 1.8-inch Dual SIM Mobile Phone",
                price: 519,
            },
            {
                id: 129,
                img: m9,
                title: "XIAOMI Redmi Buds 3 - White",
                price: 1099,

            },
            {
                id: 130,
                img: m10,
                title: "XIAOMI MI Smart Band 6 - Black",
                price: 870,
            },
            {
                id: 131,
                img: m11,
                title: "Huawei FreeBuds Pro Wireless",
                price: 3450,
            },
            {
                id: 132,
                img: m12,
                title: "Sport Earphone Perfect Stereo Sound",
                price: 36,
                desc: "-67%"
            },
            {
                id: 133,
                img: m13,
                title: "Touch Bluetooth 5.0 Earphones Wireless 4D",
                price: 82,
            },
            {
                id: 134,
                img: m14,
                title: "Tempered Glass Screen Protector For Xiaomi Redmi Note 9s",
                price: 99,
            },
            {
                id: 135,
                img: m15,
                title: "Mr Cable IPhone Fast White",
                price: 60,
                desc: "-20%"
            },
            {
                id: 136,
                img: m16,
                title: "Multi-angle Adjust Mobile Phone Holders",
                price: 49,
                desc: "-74%"

            },

        ],
    }
    return (
        <div>
            <Container>
                <SubTitle title="Phones&Accessories" btntitle="" pathText="/products" />
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

export default Phones