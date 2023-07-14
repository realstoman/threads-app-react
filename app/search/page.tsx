'use client';
import PageWrapper from '@/components/PageWrapper';
import UserAccount from '@/components/search/UserAccount';

// Account Avatars
import YusufAvatar from '@/public/avatars/hamza-yusuf-avatar.png';
import RonaldoAvatar from '@/public/avatars/ronaldo-avatar.jpg';
import RashidAvatar from '@/public/avatars/rashid-khan-avatar.jpg';
import SalahAvatar from '@/public/avatars/salah-avatar.jpg';
import ZuckAvatar from '@/public/avatars/zuck-avatar.jpg';
import GeekAvatar from '@/public/avatars/avatar-1.jpeg';

const search = () => {
	return (
		<PageWrapper>
			<div className="pt-5 pb-16 flex flex-col items-center overflow-y-scroll">
				{/* Header section */}
				<header className="w-full px-4">
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
				<UserAccount
					avatar={YusufAvatar}
					username="hamzayusuf"
					fullName="Hamza Yusuf"
					isVerified={true}
					followedBy={RonaldoAvatar}
					followedByAnother={RashidAvatar}
					followersCount="2m"
				/>

				<div className="border border-[#222] w-full"></div>
			</div>
		</PageWrapper>
	);
};

export default search;
