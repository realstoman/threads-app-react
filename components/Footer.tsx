import PageWrapper from './PageWrapper';

const Footer = () => {
	return (
		<PageWrapper>
			<div className="px-4 hidden sm:block">
				<p className="text-sm font-sans text-gray-200">
					Copyright 2023 Threads. Build with ❤️ by{' '}
					<a
						href="http://stoman.me"
						target="_blank"
						className="text-blue-400"
					>
						Stoman
					</a>{' '}
				</p>
			</div>
		</PageWrapper>
	);
};

export default Footer;
