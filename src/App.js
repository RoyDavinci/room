import "./App.css";
import React, { useState, useEffect } from "react";
import MenuBar from "./images/icon-hamburger.svg";
import Logo from "./images/logo.svg";
import NextArrow from "./images/icon-arrow.svg";
import DarkImage from "./images/image-about-dark.jpg";
import LightImage from "./images/image-about-light.jpg";
import Close from "./images/icon-close.svg";
import Next from "./images/icon-angle-right.svg";
import Prev from "./images/icon-angle-left.svg";
import { mobileDetails, desktopDetails } from "./detail";

function App() {
	const [background, setBackground] = useState(false);
	let [counter, setCounter] = useState(0);
	const [details, setDetails] = useState([]);
	const [show, setShow] = useState(false);
	const [backgroundDetails, setBackgroundDetails] = useState(false);

	const handleNextClick = () => {
		if (counter === details.length - 1) {
			setCounter(0);
		} else {
			setCounter((counter = counter + 1));
		}
	};
	const handlePrevClick = () => {
		if (counter === 0) {
			setCounter(details.length - 1);
		} else {
			setCounter((counter = counter - 1));
		}
	};

	const handleListClick = () => {
		setBackground(!background);
		setShow(!show);
	};
	const handleViewClick = () => {
		setBackground(!background);
		setShow(!show);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 500) {
				setBackgroundDetails(!backgroundDetails);

				setDetails(desktopDetails);
			} else if (window.innerWidth < 500) {
				setDetails(mobileDetails);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [backgroundDetails, show]);

	useEffect(() => {
		setDetails(desktopDetails);
	}, []);

	return (
		<div className={background ? "App background" : "App"}>
			<div className='header'>
				<header
					className={background ? "background-header" : ""}
					style={{ backgroundImage: `url(${details[counter]?.image})` }}
				>
					<div className='logo-container'>
						<img
							src={MenuBar}
							alt=''
							onClick={handleListClick}
							className='MenuBar'
						/>
						<img src={Logo} alt='' className='logo' />
					</div>
					<ul className={!show ? "list" : "list show"}>
						<li>
							<img
								src={Close}
								alt=''
								className='close'
								onClick={handleViewClick}
							/>
						</li>
						<li> Home</li>
						<li>Shop</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
					<button className='mobile-view'>
						<img src={Prev} alt='' onClick={handlePrevClick} />
						<img src={Next} alt='' onClick={handleNextClick} />
					</button>
				</header>
				<div className='section'>
					<section className='section-center'>
						<div className='details'>
							<h1>{details[counter]?.header}</h1>
							<p>{details[counter]?.paragraph}</p>
						</div>
						<button>
							<span>SHOP NOW</span>
							<img src={NextArrow} alt='' />
						</button>
					</section>
				</div>
				<button className='desktop-view'>
					<img src={Prev} alt='' onClick={handlePrevClick} />
					<img src={Next} alt='' onClick={handleNextClick} />
				</button>
			</div>
			<main>
				<img src={DarkImage} alt='' />
				<article>
					<div className='article'>
						<h1>About our furniture</h1>
						<p>
							Our multifunctional collection blends design and function to suit
							your individual taste. Make each room unique, or pick a cohesive
							theme that best express your interests and what inspires you. Find
							the furniture pieces you need, from traditional to contemporary
							styles or anything in between. Product specialists are available
							to help you create your dream space.
						</p>
					</div>
				</article>
				<img src={LightImage} alt='' />
			</main>
		</div>
	);
}

export default App;
