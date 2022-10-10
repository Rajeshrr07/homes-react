import '../../css/Aboutus.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import pattern from '../images/about-us-pattern.png';
import image1 from '../images/about-us-image1.webp';
import image2 from '../images/about-us-image2.webp';
import image3 from '../images/about-us-image-3.webp';
import awards from '../images/about-us-awards.png';
import product1 from '../images/product1.jpg';
import product2 from '../images/product2.jpg';
import product3 from '../images/product3.jpg';
import how1 from '../images/how1.webp';
import how2 from '../images/how2.webp';
import how3 from '../images/how3.webp'
function Aboutus() {
	let url = 'http://kahomes.kalyaniaura.com/';

	//scrollspy//	
	//scrollspy//

	return (
		<div>
			<Navbar/>
			<div className="about-us">
			<div className="title-dynamic container">
				<span className="dynamic font-weight-bold">
					<a href={url}>Kalyanihomes </a> /
					<span className="title">About-us</span>
				</span>
			</div>
			<div className="page-title">
				<h1 className="text-center fw-bold ">
					About <span className="text-animation"> Us</span>
				</h1>
			</div>
			<div className="page-tabs ">
				<Tabs defaultActiveKey="why" id="tab" className="mb-3 aboutus-tab ">
					<Tab eventKey="why" title="The Why">
						<Container>
							<Row className="first-row">
								<Col>
									<h3 className="fw-bold why-first-row-title">
										We didn't find it for us,<br></br>
										<span className="text-animation">
											so we created it for you{' '}
										</span>
									</h3>
									<p className="mt-3 ">
										That's essentially our story in one sentence. Crammed up
										hostels or cooped up PGs - not much of a choice, is it?
										That's why we created Stanza Living - a place designed by
										people who've been in your shoes. Understand you. And are
										inspired by you.
									</p>
								</Col>
								<Col>
									<img className="pattern-image" src={pattern} alt="" />
									<img className="why-image" src={image1} alt="" />
								</Col>
							</Row>
							<Row className="second-row">
								<Col>
									<img className="why-image" src={image2} alt="" />
								</Col>
								<Col>
									<h3 className="fw-bold why-second-row-title">
										You needed a place like home,<br></br>
										<span className="text-animation">
											so we moved back home
										</span>
									</h3>
									<p className="mt-3 ">
										It was 2015. Two erstwhile IIM-A hostel roomies, Anindya and
										Sandeep, met again. Reminiscing about the 'good old hostel
										days', they realised a lot of that 'good' could've been
										better. So to give youngsters that 'better', in 2017, they
										set up a base in New Delhi, and the rest, as we say, is the
										present.
									</p>
									<img className="pattern-image" src={pattern} alt="" />
								</Col>
							</Row>
						</Container>
						<div className="secondrow-bottom"></div>

						<Container className="container scrollspy">
							<div>
								<div className="scrollspy-card">
									<div id="home" className="card">
										home
									</div>
									<div id="about" className="card">
										about
									</div>
									<div id="contact" className="card">
										contact
									</div>
								</div>
							</div>

							<section className="home">home</section>
							<section className="about">about</section>
							<section className="contact">contact</section>
						</Container>

						<Container>
							<Row className="fourth-row">
								<Col>
									<h3 className="fw-bold why-fourth-row-title ">
										You need friends in a new city,<br></br>
										<span className="text-animation">
											so 2,000+ people came together
										</span>
									</h3>
									<p className="mt-3 ">
										The dream only Anindya and Sandeep once shared has now found
										a niche in the hearts of 2,000+ individuals who wake up in
										the morning just to ensure Stanza Living delivers on the
										promise made to you.
									</p>
									<a className="fw-bold" href="#">
										Meet The Dreamweavers
									</a>
								</Col>
								<Col>
									<img
										className="pattern-image"
										src={process.env.PUBLIC_URL + 'images/about-us-pattern.png'}
										alt=""
									/>
									<img className="why-image" src={image3} alt="" />
								</Col>
							</Row>
						</Container>
						<div className="fourthrow-bottom"></div>

						<Container className="fifth-section">
							<h3 className="fw-bold why-fifth-row-title text-center mb-5">
								You inspire our work,<br></br>
								<span className="text-animation">
									so the world notices it too
								</span>
							</h3>
							<Row className="row fifth-row">
								<Col>
									<p className="fw-bold position-absolute text-center ms-5 mt-3">
										ET Now Global Real<br></br> Estate Congress<br></br> 2020
									</p>
									<img className="award-image mb-5" src={awards} alt="" />
									<p className="fw-bold position-absolute text-center ms-5 mt-3">
										Entrepreneur India's<br></br> 35 under 35, Class of<br></br>{' '}
										2018
									</p>
									<img className="award-image " src={awards} alt="" />
								</Col>
								<Col>
									<p className="fw-bold position-absolute text-center ms-5 mt-3">
										LinkedIn Top 25<br></br> Startups of India<br></br> 2019
									</p>
									<img className="award-image mb-5" src={awards} alt="" />
									<p className="fw-bold position-absolute text-center ms-5 mt-3">
										Fortune India 40<br></br> Under 40<br></br> 2021
									</p>
									<img className="award-image " src={awards} alt="" />
								</Col>
								<Col>
									<p className="fw-bold position-absolute text-center ms-5 mt-3">
										Businessworld 40<br></br> Under 40 Leaders<br></br> 2019
									</p>
									<img className="award-image mb-5" src={awards} alt="" />
									<p className="fw-bold position-absolute text-center ms-5 mt-3">
										ET Now Global Real<br></br> Estate Congress<br></br> 2020
									</p>
									<img className="award-image " src={awards} alt="" />
								</Col>
							</Row>
						</Container>
					</Tab>
					<Tab eventKey="what" title="The What">
						<Container className="container what-tabs">
							<h3 className="what-content m-auto">
								A place that feels like 'home' as soon as you enter it. A place
								where we steal away your chores and replace them with care. A
								place where you'll have technology in your pocket and your tribe
								by your side. A place that's all about you. And that is no
								wishful thinking, but our unwavering PACT with you.
							</h3>
							<Tab.Container id="left-tabs-example" defaultActiveKey="product">
								<Row>
									<Col sm={3}>
										<Nav variant="pills" className="flex-column">
											<Nav.Item>
												<Nav.Link eventKey="product">Product</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="aminities">Aminities</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="community">community</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="technology">Technology</Nav.Link>
											</Nav.Item>
										</Nav>
									</Col>
									<Col sm={9}>
										<Tab.Content>
											<Tab.Pane eventKey="product">
												<div className="card">
													<Row className="product-row">
														<Col md={6}>
															<img className="w-100" src={product1} />
														</Col>
														<Col md={6}>
															<img className="w-100" src={product2} />
														</Col>
														<img
															className="w-100 justify-content-center"
															src={product3}
														/>
													</Row>
													<p>
														The cushioning of the bed's mattress to the colour
														of the walls in the hallway and the availability of
														charging points at an arm's length - every nook and
														corner of a Stanza Living residence has been
														designed to reflect you and your current life stage.
													</p>
												</div>
											</Tab.Pane>
											<Tab.Pane eventKey="aminities">
												<div className="card">
													<Row className="product-row">
														<Col md={6}>
															<img className="w-100" src={product1} />
														</Col>
														<Col md={6}>
															<img className="w-100" src={product2} />
														</Col>
														<img
															className="w-100 justify-content-center"
															src={product3}
														/>
													</Row>
													<p>
														The cushioning of the bed's mattress to the colour
														of the walls in the hallway and the availability of
														charging points at an arm's length - every nook and
														corner of a Stanza Living residence has been
														designed to reflect you and your current life stage.
													</p>
												</div>
											</Tab.Pane>
											<Tab.Pane eventKey="community">
												<div className="card">
													<Row className="product-row">
														<Col md={6}>
															<img className="w-100" src={product1} />
														</Col>
														<Col md={6}>
															<img className="w-100" src={product2} />
														</Col>
														<img
															className="w-100 justify-content-center"
															src={product3}
														/>
													</Row>
													<p>
														The cushioning of the bed's mattress to the colour
														of the walls in the hallway and the availability of
														charging points at an arm's length - every nook and
														corner of a Stanza Living residence has been
														designed to reflect you and your current life stage.
													</p>
												</div>
											</Tab.Pane>
											<Tab.Pane eventKey="technology">
												<div className="card">
													<Row className="product-row">
														<Col md={6}>
															<img className="w-100" src={product1} />
														</Col>
														<Col md={6}>
															<img className="w-100" src={product2} />
														</Col>
														<img
															className="w-100 justify-content-center"
															src={product3}
														/>
													</Row>
													<p>
														The cushioning of the bed's mattress to the colour
														of the walls in the hallway and the availability of
														charging points at an arm's length - every nook and
														corner of a Stanza Living residence has been
														designed to reflect you and your current life stage.
													</p>
												</div>
											</Tab.Pane>
										</Tab.Content>
									</Col>
								</Row>
							</Tab.Container>
						</Container>
					</Tab>
					<Tab
						eventKey="how"
						title="The How"
						className="position-relative the-how-tab"
					>
						<Container className="the-how">
							<Card>
								<Row>
									<Col className="my-auto ps-5">
										<h3 className="fw-bold mb-5 display-6">
											We designed the backdrop of
											<span className="text-animation"> your life</span>
										</h3>
										<p className="text-secondary fw-bold">
											The sofa in the lounge will make you see your bestie and
											you arguing about whose day was more hectic. The bed in
											your room will give you a picture of where you'll be
											scrolling through insta stories. The microwave in the
											pantry will make you imagine slurping on a piping hot bowl
											of noodles in the middle of the night. Simply put, you'll
											see a bit of your life in every spot of the residence. And
											a place that does that is home
										</p>
									</Col>
									<Col>
										<img className="w-100" src={how1} />
									</Col>
								</Row>
							</Card>
							<img className="how-pattern-image" src={pattern} />
							<Card className="bg-how">
								<Row>
									<Col className="my-auto ps-5">
										<h3 className="fw-bold mb-5 display-3">
											It’s unique<br></br>
											<span className="text-white">
												It’s our signature style
											</span>
										</h3>
									</Col>
									<Col className="my-auto">
										<p className="text-white fw-bold">
											The buildings that become our residences come in different
											shapes and sizes. And aren't we glad about that? That way,
											we can retain their distinct architecture while infusing
											them with our design philosophy. So that every Stanza
											Living residence stays unique and yet is uniquely Stanza
											Living.
										</p>
									</Col>
								</Row>
							</Card>
							<Card>
								<Row>
									<Col>
										<img className="w-100" src={how2} />
									</Col>
									<Col className="my-auto ps-5">
										<h3 className="fw-bold mb-5 display-6 ">
											The inspiration behind it?
											<span className="text-animation"> You.</span>
										</h3>
										<p className="text-secondary fw-bold">
											From something as apparent as the number of drawers in
											your wardrobe, to something as neglected as the perfect
											illumination of the lights in the corridors, every aspect
											of our residence design is detailed to add comfort and
											convenience to your everyday life. That's the kind of
											thought you deserve, and we put it into it
										</p>
									</Col>
								</Row>
							</Card>
							<img className="how-pattern-image float-end" src={pattern} />
							<Card className="bg-how">
								<Row>
									<Col className="my-auto ps-5">
										<p className="text-white  fw-bold">
											A splash of teal here. A touch of yellow there. And many
											other happy shades in between. Wherever you look, you'll
											see the balance of ageless comfort with a 2020s vibe. The
											interiors here will put a smile on your face, even when
											you come back home after a stressful day
										</p>
									</Col>
									<Col className="my-auto">
										<h3 className="fw-bold mb-5 display-3">
											It reflects your colours.<br></br>
											<span className="text-white">Your stories.</span>
										</h3>
									</Col>
								</Row>
							</Card>
							<Card>
								<Row>
									<Col className="my-auto ps-5">
										<h3 className="fw-bold mb-5 display-6 ">
											There’s
											<span className="text-animation"> more room </span>
											in your room
										</h3>
										<p className="text-secondary fw-bold">
											Good news! Your belongings will no longer wrestle for the
											same space. They can happily coexist in your spacious,
											fully-furnished room. And when you venture out of your
											room, the resting area, gaming and entertainment zone and
											dining area will further add a lot of life to your daily
											life.
										</p>
									</Col>
									<Col>
										<img className="w-100" src={how3} />
									</Col>
								</Row>
							</Card>
							<span className="">
								<img
									className="how-pattern-image-right float-end position-absolute"
									src={pattern}
								/>
							</span>

							<Card className="bg-how">
								<Row>
									<Col className="my-auto ps-5">
										<h3 className="fw-bold text-white mb-5 display-3">
											Quality
											<span className="text-dark"> that speaks for itself</span>
										</h3>
									</Col>
									<Col className="my-auto">
										<p className="text-white fw-bold">
											Take it for granted that the lighting fixtures won't fail
											when you're tiptoeing to the dining area for a midnight
											snack. And we test our furniture for sturdiness,
											anticipating you slumping into it on certain days. But
											don't just go by our assurance. See and experience it for
											yourself before giving your nod of approval.
										</p>
									</Col>
								</Row>
							</Card>
						</Container>
					</Tab>
				</Tabs>
			</div>
		</div>
		<Footer/>
		</div>
	);
}

export default Aboutus;
