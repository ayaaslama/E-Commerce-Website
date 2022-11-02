import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../images/slider1.png";
import slider2 from "../../images/slider2.png";
import slider3 from "../../images/slider3.png";
const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="slider-background" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "250px", width: "350px" }}
                        className=""
                        src={slider1}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title">Get a Discoun Now</h3>
                        <p className="slider-text">There is Discount  Up to 70% </p>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background3" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "250px", width: "350px" }}
                        className=""
                        src={slider2}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title">Get a Discoun Now</h3>
                        <p className="slider-text">There is Discount  Up to 70% </p>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background4" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "250px", width: "350px" }}
                        className=""
                        src={slider3}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title">Get a Discoun Now</h3>
                        <p className="slider-text">There is Discount  Up to 70% </p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;