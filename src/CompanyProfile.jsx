import React from "react";
import { Container, Row, Col, Card, Button, Navbar, Nav } from "react-bootstrap"; 

const products = [
  { name: "Brake Pads", image: "GamingMouse.jpg", price: "$50" },
  { name: "Oil Filter", image: "Bluetooth Speaker.jpg", price: "$15" },
  { name: "Spark Plug", image: "Smartwacth.jpg", price: "$10" },
  { name: "Air Filter", image: "Wireless HP.jpg", price: "$20" }, 
];

const CompanyProfile = () => {
  return (
    <>  
      <Container className="my-4" style={{ paddingTop: '70px' }}> 

{/* carousel */}
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel"> 

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
                </div>
 
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <div className="d-block w-100" style={{height: "300px", backgroundColor: "#0078D7"}}>
                            <h2 className="text-white text-center pt-5">Parts #1</h2>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <div className="d-block w-100" style={{height: "300px", backgroundColor: "#107C10"}}>
                            <h2 className="text-white text-center pt-5">Parts #2</h2>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="d-block w-100" style={{height: "300px", backgroundColor: "#FFB900"}}>
                            <h2 className="text-white text-center pt-5">Parts #3</h2>
                        </div>
                    </div>

                </div>
 
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
{/* end of carousel */}

        <div className="my-5 hero-section text-white text-center d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-dark mb-3 ">Quality Spare Parts for Every Vehicle</h1>
            <p className=" text-dark  mb-4 ">Reliable, affordable, and delivered fast.</p>
            <Button variant="warning" size="lg" className="shadow-sm animate__pulse">Shop Now</Button>
        </div>    
        <h2 className="text-center mb-5">Featured Products</h2>
        <Row>
          {products.map((product, idx) => (
            <Col key={idx} md={3} sm={6} className="mb-4">
              <Card className="h-100 shadow product-card">
                <Card.Img variant="top" src={product.image} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="mt-auto fw-bold">{product.price}</Card.Text>
                  <Button variant="primary" className="mt-2">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* moving infinitely */}
        <div className="overflow-hidden">
            <div className="scrolling-track d-flex">
                {Array(10).fill(products).flat().map((product, idx) => (
                <Card key={idx} className="shadow product-card me-3" style={{ minWidth: "200px" }}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body className="d-flex flex-column">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className="mt-auto fw-bold">{product.price}</Card.Text>
                    <Button variant="primary" className="mt-2">Buy Now</Button>
                    </Card.Body>
                </Card>
                ))}
            </div>
        </div>

 

<div className="bg-light py-5 text-center">
  <h2>What Our Customers Say</h2>
  <Row className="mt-4">
    <Col md={4}>
      <Card className="p-3">
        <p>"Great products and super fast delivery!"</p>
        <h6>- Alice W.</h6>
      </Card>
    </Col>
    <Col md={4}>
      <Card className="p-3">
        <p>"Excellent quality and easy to order."</p>
        <h6>- John D.</h6>
      </Card>
    </Col>
    <Col md={4}>
      <Card className="p-3">
        <p>"Customer service was very helpful."</p>
        <h6>- Maria S.</h6>
      </Card>
    </Col>
  </Row>
</div>  















      </Container>

      {/* Services Section */}
      <div className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-5">Our Services</h2>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <i className="bi bi-truck fs-1 mb-3 text-warning"></i>
              <h5>Fast Delivery</h5>
              <p>Get your spare parts delivered quickly and safely.</p>
            </Col>
            <Col md={4} className="mb-4">
              <i className="bi bi-gear fs-1 mb-3 text-warning"></i>
              <h5>Quality Assurance</h5>
              <p>All parts are tested and certified for reliability.</p>
            </Col>
            <Col md={4} className="mb-4">
              <i className="bi bi-headset fs-1 mb-3 text-warning"></i>
              <h5>24/7 Support</h5>
              <p>Our team is always here to help you find the right part.</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer */}
        <footer className="footer bg-dark text-white py-4 mt-5">
            <Container className="text-center">
                <p className="mb-1">
                &copy; {new Date().getFullYear()} SparePartCo. All rights reserved.
                </p>
                <p className="mb-0">
                This website was created on 31/3/2025.
                </p>
            </Container>
        </footer>
    </>
  );
};

export default CompanyProfile;