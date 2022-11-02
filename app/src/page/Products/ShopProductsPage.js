import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import a from "../../images/a.jpg";
import b from "../../images/b.jpg";
import c from "../../images/c.jpg";
import d from "../../images/d.jpg";
import s4 from "../../images/sell4.jpg";
import s5 from "../../images/sell5.jpg";
import s6 from "../../images/sell6.jpg";
import s7 from "../../images/sell7.jpg";
import s9 from "../../images/sell9.jpg";
import s10 from "../../images/sell10.jpg";
import s11 from "../../images/sell11.jpg";
import s12 from "../../images/sell12.jpg";
import s13 from "../../images/sell13.jpg";
import s14 from "../../images/sell14.jpg";
import s15 from "../../images/sell15.jpg";
import s16 from "../../images/sell16.jpg";
import SubTitle from '../../components/utility/SubTitle';
import ProductCard from '../../components/Products/ProductCard';



const ShopProductsPage = () => {
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
            {
                id: 153,
                img: s9,
                title: "Metal Frame Sunglasses",
                price: 189,
            },
            {
                id: 154,
                img: s10,
                title: "Cross Town Backpack",
                price: 350,
            },
            {
                id: 155,
                img: s11,
                title: "Corset Belt",
                price: 102,
            },
            {
                id: 156,
                img: s12,
                title: "Sport Leggings Pants",
                price: 130,
            },
            {
                id: 157,
                img: s4,
                title: "New York Volum'Mascara-Black",
                price: 110,
            },
            {
                id: 158,
                img: s5,
                title: "Knorr Chicken Stock–8 Cubes",
                price: 5.75,
            },
            {
                id: 159,
                img: s6,
                title: "Fern Pure Natural Butter Ghee-1.4Kg",
                price: 294,
            },
            {
                id: 160,
                img: s7,
                title: "Sensodyne Multi Care-Buy 2 Get 1 Free",
                price: 115,
            },
            {
                id: 161,
                img: s13,
                title: "Sweatshirt - Fuchsia",
                price: 400,
            },
            {
                id: 162,
                img: s14,
                title: "Fresh Electric Kettle",
                price: 302,
            },
            {
                id: 163,
                img: s15,
                title: "Lazord Granite Crepe Pan",
                price: 135,
            },
            {
                id: 164,
                img: s16,
                title: "Tornado TH-C18ZEE Digital Air Conditioner",
                price: 10099,
            },

        ],
    }
    return (
        <div>
            <Container>
                <SubTitle title="Top Selling" btntitle="" pathText="/products" />
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