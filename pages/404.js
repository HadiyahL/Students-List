import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
	const router = useRouter();

	//re-routes user from error page to homepage
	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 3000);
	}, []);
	return (
		<>
			<Head>
				<title>CYF | Home</title>
			</Head>
			<div className="not-found">
				<h1>Oops...</h1>
				<h2>Page Not Found!</h2>
				<p>
					Go back to the{" "}
					<Link href="/">
						<a>Homepage</a>
					</Link>
				</p>
			</div>
		</>
	);
};

export default NotFound;
