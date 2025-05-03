import { Link } from "react-router";

const Home = () => {
	return (
		<div>
			<p>Very good My tasks application.</p>
			<Link className="mx-3 col btn btn-primary" to="/login">
				Login Here
			</Link>
		</div>
	);
};

export default Home;
