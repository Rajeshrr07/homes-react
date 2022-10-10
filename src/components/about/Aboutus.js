import '../../css/Aboutus.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React from 'react';
import pattern from '../images/about-us-pattern.png';
import image1 from '../images/about-us-image1.webp';
import image2 from '../images/about-us-image2.webp';
import image3 from '../images/about-us-image-3.webp';
import awards from '../images/about-us-awards.png';
function Aboutus() {
	let url = 'http://kahomes.kalyaniaura.com/';

	//scrollspy//	
	//scrollspy//

	return (
		<div>
			<Navbar/>
		<div class="about-us">
			<div class="title-dynamic container">
				<span class="dynamic font-weight-bold">
					<a href={url}>Kalyanihomes </a> /<span class="title">About-us</span>
				</span>
			</div>
			<div class="page-title">
				<h1 class="text-center fw-bold ">
					About <span class="text-animation"> Us</span>
				</h1>
			</div>
			<div class="page-tabs ">
				<Tabs defaultActiveKey="why" id="tab" className="mb-3 aboutus-tab ">
					<Tab eventKey="why" title="The Why">
						<div className="container">
							<div className="row first-row">
								<div className="col-md-6">
									<h3 class="fw-bold why-first-row-title">
										We didn't find it for us,<br></br>
										<span class="text-animation">
											so we created it for you{' '}
										</span>
									</h3>
									<p class="mt-3 ">
										That's essentially our story in one sentence. Crammed up
										hostels or cooped up PGs - not much of a choice, is it?
										That's why we created Stanza Living - a place designed by
										people who've been in your shoes. Understand you. And are
										inspired by you.
									</p>
								</div>
								<div className="col-md-6">
									<img
										className="pattern-image"
										src={pattern}
										alt=""
									/>
									<img
										className="why-image"
										src={image1}
										alt=""
									/>
								</div>
							</div>
							<div className="row second-row">
								<div className="col-md-6">
									<img
										className="why-image"
										src={image2}
										alt=""
									/>
								</div>
								<div className="col-md-6">
									<h3 class="fw-bold why-second-row-title">
										You needed a place like home,<br></br>
										<span class="text-animation">so we moved back home</span>
									</h3>
									<p class="mt-3 ">
										It was 2015. Two erstwhile IIM-A hostel roomies, Anindya and
										Sandeep, met again. Reminiscing about the 'good old hostel
										days', they realised a lot of that 'good' could've been
										better. So to give youngsters that 'better', in 2017, they
										set up a base in New Delhi, and the rest, as we say, is the
										present.
									</p>
									<img
										className="pattern-image"
										src={pattern}
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="secondrow-bottom"></div>

						<div className="container scrollspy">
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

							<section class="home">home</section>
							<section class="about">about</section>
							<section class="contact">contact</section>
						</div>

						<div className="container">
							<div className="row fourth-row">
								<div className="col-md-6">
									<h3 class="fw-bold why-fourth-row-title ">
										You need friends in a new city,<br></br>
										<span class="text-animation">
											so 2,000+ people came together
										</span>
									</h3>
									<p class="mt-3 ">
										The dream only Anindya and Sandeep once shared has now found
										a niche in the hearts of 2,000+ individuals who wake up in
										the morning just to ensure Stanza Living delivers on the
										promise made to you.
									</p>
									<a class="fw-bold" href="#">
										Meet The Dreamweavers
									</a>
								</div>
								<div className="col-md-6">
									<img
										className="pattern-image"
										src={pattern}
										alt=""
									/>
									<img
										className="why-image"
										src={
										image3
										}
										alt=""
									/>
								</div>
							</div>
						</div>
						<div className="fourthrow-bottom"></div>
						
						<div className="container fifth-section">
							<h3 class="fw-bold why-fifth-row-title text-center mb-5">
								You inspire our work,<br></br>
								<span class="text-animation">so the world notices it too</span>
							</h3>
							<div className="row fifth-row">
								<div className="col-md-4">
									<p class="fw-bold position-absolute text-center ms-5 mt-3">
										ET Now Global Real<br></br> Estate Congress<br></br> 2020
									</p>
									<img
										className="award-image mb-5"
										src={awards}
										alt=""
									/>
									<p class="fw-bold position-absolute text-center ms-5 mt-3">
										Entrepreneur India's<br></br> 35 under 35, Class of<br></br>{' '}
										2018
									</p>
									<img
										className="award-image "
										src={awards}
										alt=""
									/>
								</div>
								<div className="col-md-4">
									<p class="fw-bold position-absolute text-center ms-5 mt-3">
										LinkedIn Top 25<br></br> Startups of India<br></br> 2019
									</p>
									<img
										className="award-image mb-5"
										src={awards}
										alt=""
									/>
									<p class="fw-bold position-absolute text-center ms-5 mt-3">
										Fortune India 40<br></br> Under 40<br></br> 2021
									</p>
									<img
										className="award-image "
										src={awards}
										alt=""
									/>
								</div>
								<div className="col-md-4">
									<p class="fw-bold position-absolute text-center ms-5 mt-3">
										Businessworld 40<br></br> Under 40 Leaders<br></br> 2019
									</p>
									<img
										className="award-image mb-5"
										src={awards}
										alt=""
									/>
									<p class="fw-bold position-absolute text-center ms-5 mt-3">
										ET Now Global Real<br></br> Estate Congress<br></br> 2020
									</p>
									<img
										className="award-image "
										src={awards}
										alt=""
									/>
								</div>
							</div>
						</div>
					</Tab>
					<Tab eventKey="what" title="The What">
						<p>JRR</p>
					</Tab>
					<Tab eventKey="how" title="The How">
						<p>JT</p>
					</Tab>
				</Tabs>
			</div>
		</div>
		<Footer/>
		</div>
	);
}

export default Aboutus;
