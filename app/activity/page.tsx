'use client';

import PageWrapper from '@/components/PageWrapper';

const activity = () => {
	return (
		<PageWrapper>
			<div className="pt-5 pb-16 flex flex-col items-center overflow-y-scroll">
				{/* Header section */}
				<header className="w-full px-4">
					<h1 className="text-4xl font-semibold mb-2">Activity</h1>
					<div></div>
				</header>
			</div>
		</PageWrapper>
	);
};

export default activity;
