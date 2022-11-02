import React from 'react'
import { Container, Row } from 'react-bootstrap'
import clothe1 from "../../images/clothe1.png";
import clothe2 from "../../images/clothe2.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";
import supermarket from "../../images/supermarket.png";
import televesions from "../../images/televesions_&_electronics.png";
import Computing from "../../images/Computing.png";
import Phones from "../../images/Phones_&_Accessories.png";
import Gaming from "../../images/Gaming_&_PlayStation.png";
import Kids from "../../images/Kids_&_Baby_Products.png";
import school from "../../images/Back_to_school.png";
import sport from "../../images/Sports_Essentials.png";
import CategoryCard from './CategoryCard';
const CategoryContainer = () => {
    return (
        <div>
            <Container>
                <br />
                <h3 >All Category</h3>
                <Row className="my-2 d-flex  justify-content-between">
                    <CategoryCard title="Men's Fashion" pathText="/menshop" img={clothe1} background="#cc8400" />
                    <CategoryCard title="Beauty Essentials" pathText="/beautyshop" img={cat2} background="#0034FF" />
                    <CategoryCard title="Electronics" pathText="/electronicsshop" img={labtop} background="#FFD3E8" />
                    <CategoryCard title="Women's Fashion" pathText="/womenshop" img={clothe2} background="#cc8400" />
                    <CategoryCard title="Flash Sales" pathText="/productssale" img={sale} background="#FF6262" />
                    <CategoryCard title="Kitchen Essentials" pathText="/kitchen" img={pic} background="#F4DBA5" />
                    <CategoryCard title="Sports Essentials" pathText="/sport" img={sport} background="#cc8400" />
                    <CategoryCard title="School Essentials" pathText="/school" img={school} background="#0034FF" />
                    <CategoryCard title="Kids-Baby Products" pathText="/Kid" img={Kids} background="#FFD3E8" />
                    <CategoryCard title="Gaming&PlayStation" pathText="/gaming" img={Gaming} background="#cc8400" />
                    <CategoryCard title="Phones&Accessories" pathText="/phones" img={Phones} background="#FF6262" />
                    <CategoryCard title="Computing" pathText="/computing" img={Computing} background="#F4DBA5" />
                    <CategoryCard title="Televesions" pathText="/televesions" img={televesions} background="#cc8400" />
                    <CategoryCard title="Supermarket" pathText="/supermarket" img={supermarket} background="#0034FF" />



                </Row>
            </Container>

        </div>
    )
}
export default CategoryContainer