import React from "react";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../utility/SubTitle";
import CategoryCard from "../Category/CategoryCard";
import clothe1 from "../../images/clothe1.png";
import clothe2 from "../../images/clothe2.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";
import MenShop from "../../page/Products/MenShop";
const HomeCategory = () => {
    return (
        <Container>
            <SubTitle title=" Products" btntitle="More" pathText="/allcategory" />
            <Row className="my-2 d-flex  justify-content-between">
                <CategoryCard pathText="/menshop" title="Men's Fashion" img={clothe1} background="#cc8400" />
                <CategoryCard title="Beauty Essentials" pathText="/beautyshop" img={cat2} background="#0034FF" />
                <CategoryCard title="Electronics" pathText="/electronicsshop" img={labtop} background="#FFD3E8" />
                <CategoryCard title="Women's Fashion" pathText="/womenshop" img={clothe2} background="#cc8400" />
                <CategoryCard title="Flash Sales" pathText="/productssale" img={sale} background="#FF6262" />
                <CategoryCard title="Kitchen Essentials" pathText="/kitchen" img={pic} background="#F4DBA5" />
            </Row>
        </Container>
    );
};

export default HomeCategory;