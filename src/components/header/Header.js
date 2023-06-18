import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Khondamir</em>
					</strong>
					<br />a Frontend developer
				</h1>
				<div className="header__text">
					<p>with passion for learning and creating.</p>
				</div>
				<a href="https://drive.google.com/uc?export=download&id=1dkqdJ4szVHT6r-52aNizdi4tqBu62Sae" className="btn">
					Download CV
				</a>
			</div>
		</header>
	);
}

export default Header;