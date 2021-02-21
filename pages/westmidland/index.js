import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/WestMidland.module.css";

export const getStaticProps = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await response.json();

	return {
		props: {
			students: data,
		},
	};
};
const class1 = ({ students }) => {
	return (
		<>
			<Head>
				<title>CYF | Students</title>
			</Head>
			<div>
				<h1>Students</h1>
				{students.map((student) => (
					<Link href={`/westmidland/${student.id}`} key={student.id}>
						<a className={styles.student}>
							<h3>{student.name}</h3>
						</a>
					</Link>
				))}
			</div>
		</>
	);
};

export default class1;
