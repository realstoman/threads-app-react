const PageWrapper = ({ children }: any) => {
	return (
		<main className="mx-auto max-w-lg sm:max-w-4xl font-sans">
			{children}
		</main>
	);
};

export default PageWrapper;
