import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Components/Style.css'
import{ Carousel } from 'react-bootstrap'


function Content() {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={"./assets/dubai.jpg"}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Dubai</h3>
        <p>Dubai, also spelled Dubayy, city and capital of the emirate of Dubai, one of the wealthiest of the seven emirates that constitute the federation of the United Arab Emirates, which was created in 1971 following independence from Great Britain. There are several theories about the origin of the name Dubai.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={"./assets/newyork.jpg"}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>New York City</h3>
        <p>New York, often called New York City (NYC) to distinguish it from the state of New York, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is also the most densely populated major city in the United States. Located at the southern tip of the state of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban area.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={"./assets/thailand.jpg"}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Bangkok</h3>
        <p>Bangkok, officially known in Thai as Krung Thep Maha Nakhon and colloquially as Krung Thep, is the capital and most populous city of Thailand.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
        
           
    )
    }

    export default Content