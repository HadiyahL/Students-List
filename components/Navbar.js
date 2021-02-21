import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Image src="/cyf_logo.png" width={160} height={50} />
			</div>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a href="#">About</a>
			</Link>
			<Link href="/westmidland">
				<a href="#">Students Listing</a>
			</Link>
		</nav>
	);
};

export default Navbar;
