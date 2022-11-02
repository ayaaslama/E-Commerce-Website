import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import men1 from "../../images/men1.jpg";
import men2 from "../../images/men2.jpg";
import men3 from "../../images/men3.jpg";
import men4 from "../../images/men4.jpg";
import men5 from "../../images/men5.jpg";
import men6 from "../../images/men6.jpg";
import men7 from "../../images/men7.jpg";
import men8 from "../../images/men8.jpg";
import men10 from "../../images/men10.jpg";
import men11 from "../../images/men11.jpg";
import men12 from "../../images/men12.jpg";
import men13 from "../../images/men13.jpg";
import men14 from "../../images/men14.jpg";
import men15 from "../../images/men15.jpg";
import men16 from "../../images/men16.jpg";
import men9 from "../../images/men9.jpg";
import SubTitle from '../../components/utility/SubTitle';
import ProductCard from '../../components/Products/ProductCard';
const MenShop = () => {
    const data1 = {
        ProducrData1: [
            {
                id: 105,
                img: men1,
                title: "Super Soft Graphic Ringer T-Shirt",
                price: 240,
                desc: "-70%"
            },
            {
                id: 106,
                img: men2,
                title: "Hand Wallet For Men - Camel",
                price: 110,
            },
            {
                id: 107,
                img: men3,
                title: "Super Soft Graphic T-Shirt",
                price: 240,
            },
            {
                id: 108,
                img: men4,
                title: " Solid Wallet & Card Holders - Baellarry",
                price: 125,
            },
            {
                id: 109,
                img: men5,
                title: "Man Black Sweatshirt",
                price: 160,
                desc: "-40%"
            },
            {
                id: 110,
                img: men6,
                title: "Men Regular Classic Jeans - Dark Blue",
                price: 299,
            },
            {
                id: 111,
                img: men7,
                title: "Man Beige Blazer",
                price: 599,
            },
            {
                id: 112,
                img: men8,
                title: "Cap Fashionable Cotton",
                price: 75,
                desc: "-30%"
            },
            {
                id: 113,
                img: men9,
                title: "Short Sleeves T-shirt - Blue",
                price: 180,
            },
            {
                id: 114,
                img: men10,
                title: "Bundle Of (6) Basic Socks - High Quality.",
                price: 63,
                desc: "-20%"
            },
            {
                id: 115,
                img: men11,
                title: "Collar T-Shirt - Mustard",
                price: 159,
            },
            {
                id: 116,
                img: men12,
                title: "Pocket Hoodie - Petroleum & Heather Charcoal",
                price: 144,
                desc: "-74%"
            },
            {
                id: 117,
                img: men13,
                title: "Man Knitted Slim Fit Hoodie Cardigan - Black",
                price: 299,
            },
            {
                id: 118,
                img: men14,
                title: "US POLO SWEAT SHIRT For MAN,BLACK",
                price: 870,
            },
            {
                id: 119,
                img: men15,
                title: "American Eagle Slim Fit Oxford Button-Up Shirt",
                price: 425,
            },
            {
                id: 120,
                img: men16,
                title: "Black Men' Coat 2022",
                price: 599,
                desc: "-53%"
            },

        ],
    }
    return (
        <div>
            <Container>
                <SubTitle title="Men's Fashion" btntitle="" pathText="/products" />
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

export default MenShop