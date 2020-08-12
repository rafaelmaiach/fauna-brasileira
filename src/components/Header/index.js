import React, { useState } from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';

import NavbarLink from './Link';

function Header() {
	const [isMenuActive, setIsMenuActive] = useState(false);

	const NavbarLinks = [
		{ to: '/', text: 'Início' },
		{ to: '/fauna-ameacada/', text: 'Fauna Ameaçada' },
		{ to: '/contato/', text: 'Contato' },
	].map(({ to, text }) => <NavbarLink to={to} key={to}>{text}</NavbarLink>);

	return (
		<header>
			<nav className="navbar bg-green-700" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item font-bold text-2xl text-yellow-300">
						FAUNA BRASILEIRA
					</Link>

					{/* eslint-disable */}
					<a
						role="button"
						className={classnames({
							'navbar-burger': true,
							'burger': true,
							'is-active': isMenuActive,
						})}
						aria-label="menu"
						aria-expanded="false"
						data-target="pageNavbar"
						onClick={() => setIsMenuActive(!isMenuActive)}
					>
						<span aria-hidden="true" className="bg-yellow-300"></span>
						<span aria-hidden="true" className="bg-yellow-300"></span>
						<span aria-hidden="true" className="bg-yellow-300"></span>
					</a>
					{/* eslint-enable */}
				</div>

				<div
					id="pageNavbar"
					className={classnames({
						'bg-green-700': true,
						'navbar-menu': true,
						'is-active': isMenuActive,
					})}
				>
					<div className="navbar-start">
						{NavbarLinks}
					</div>
				</div>
		</nav>
		</header>
	)
}

export default Header;
