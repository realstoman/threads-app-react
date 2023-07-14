'use client';
import PageWrapper from '@/components/PageWrapper';

const search = () => {
	return (
		<PageWrapper>
			<div className="pt-5 pb-16 flex flex-col items-center overflow-y-scroll px-4">
				{/* Header section */}
				<header className=" w-full">
					<h1 className="text-4xl font-semibold mb-2">Search</h1>
					<div>
						<form action="#">
							<label htmlFor="search">
								<input
									type="search"
									id="search"
									placeholder="Search"
									className="w-full border-none rounded-lg text-md px-3 py-2 bg-[#333] text-gray-200"
								/>
							</label>
						</form>
					</div>
				</header>

				{/* Dynamic Search Account */}
			</div>
		</PageWrapper>
	);
};

export default search;
