import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from "../utility/SubTitle";
import ProductCard from './ProductCard'



const CardProductsContainer = ({ title, btntitle, pathText, src, p, cardprice, src1, p1, cardprice1, src2, p2, cardprice2, src3, p3, cardprice3, item }) => {
    return (
        <Container>
            <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
            <Row className='my-2 d-flex justify-content-between'>


            </Row>
        </Container>
    )
}

export default CardProductsContainer 