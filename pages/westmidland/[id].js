export const getStaticPaths = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await response.json();

	const paths = data.map((student) => {
		return {
			params: { id: student.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const { id } = context.params;
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${id}`
	);
	const data = await response.json();

	return {
		props: { student: data },
	};
};

const Details = ({ student }) => {
	return (
		<div>
			<h2>Student's Detail Page</h2>
			<div>
				<h3>
					<strong>Name: </strong>
					{student.name}
				</h3>
				<p>
					<strong>Email: </strong>
					{student.email}
				</p>
				<p>
					<strong>City: </strong>
					{student.address.city}
				</p>
				<p>
					<strong>Phone: </strong>
					{student.phone}
				</p>
				<p>
					<strong>Company Name: </strong>
					{student.company.name}
				</p>
			</div>
		</div>
	);
};

export default Details;
