import React from "react";
import Slider from "../../components/home/Slider";
import HomeCategory from "../../components/home/HomeCategory";
import CardProductsContainer from "../../components/Products/CardProductsContainer";
import DiscountSection from "../../components/home/DiscountSection";
import a from "../../images/a.jpg";
import b from "../../images/b.jpg";
import c from "../../images/c.jpg";
import d from "../../images/d.jpg";
import sale1 from "../../images/sale1.jpg";
import sale2 from "../../images/sale2.jpg";
import sale3 from "../../images/sale3.jpg";
import sale4 from "../../images/sale4.jpg";
import ProductCard from "../../components/Products/ProductCard";
import SubTitle from "../../components/utility/SubTitle";
import { Container } from "react-bootstrap";
const HomePage = () => {
    const data1 = {
        ProducrData1: [
            {
                id: 1,
                img: a,
                title: "Pastel Colors",
                price: 15,
            },
            {
                id: 2,
                img: b,
                title: "Backpack-Waterprooff",
                price: 160,
            },
            {
                id: 3,
                img: c,
                title: "Compass",
                price: 6.5,
            },
            {
                id: 4,
                img: d,
                title: "Backpack-Sky Blue",
                price: 130,
            },

        ],
    }
    const data2 = {
        ProducrData2: [
            {
                id: 5,
                img: sale2,
                title: "NIVEA MEN Fresh",
                price: 23.90,
                desc: "-25 %",
            },
            {
                id: 6,
                img: sale1,
                title: "(4) Socks",
                price: 29.00,
                desc: "-25 %",
            },
            {
                id: 7,
                img: sale4,
                title: "Pink Canvas Trainers",
                price: 89.00,
                desc: "-56 %",
            },
            {
                id: 8,
                img: sale3,
                title: "Aldoha Flour–1Kg",
                price: 15.00,
                desc: "-32 %",
            },

        ],
    }
    return (
        <div className="font" style={{ height: '100%' }}>

            <Slider />
            <HomeCategory />
            <br />
            <br />
            <Container>
                <SubTitle title="Top Selling" btntitle="More" pathText="/products" />
                <div className='row justify-content-center'>
                    {data1.ProducrData1.map((item, index) => {
                        return (
                            <ProductCard
                                img={item.img}
                                title={item.title}
                                price={item.price}
                                key={index}
                                item={item} />

                        )
                    })}
                </div></Container>
            <DiscountSection />
            <Container>
                <SubTitle title="Flash Sale" btntitle="More" pathText="/productssale" />
                <div className='row justify-content-center'>
                    {data2.ProducrData2.map((item, index) => {
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
export default HomePage