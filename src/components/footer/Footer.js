import "./style.css";

import vk from './../../img/icons/vk.svg';
import instagram from './../../img/icons/instagram.svg';
import twitter from './../../img/icons/twitter.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="#!">
								<img src={vk} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://instagram.com/khoondaa?igshid=MjEwN2IyYWYwYw==">
								<img src={instagram} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://twitter.com/khoondaa">
								<img src={twitter} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://github.com/khondamir26">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://www.linkedin.com/in/khondamir-tuychiev-931112322">
								<img src={linkedIn} alt="Link" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						<p>© 2023 - 2024</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
