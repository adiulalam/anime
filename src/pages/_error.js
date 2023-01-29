import PageError from "./error";

function Error({ statusCode }) {
	return (
		<PageError
			message={statusCode ? `An error occurred on server` : "An error occurred on client"}
			statuscode={statusCode ?? "Unknown"}
		/>
	);
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
