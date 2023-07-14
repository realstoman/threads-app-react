'use client';

import PageWrapper from '@/components/PageWrapper';
import UserActivity from '@/components/activity/UserActivity';

import RonaldoAvatar from '@/public/avatars/ronaldo-avatar.jpg';
import ZuckAvatar from '@/public/avatars/zuck-avatar.jpg';
// import Avatar4 from '@public/avatars/avatar-4.jpg';
import NikeLogo from '@/public/logo/nike-logo.jpg';
import GeekAvatar from '@/public/avatars/avatar-1.jpeg';

const activity = () => {
	return (
		<PageWrapper>
			<div className="pt-5 pb-16 flex flex-col items-center overflow-y-scroll">
				{/* Header section */}
				<header className="mb-3 px-4 w-full">
					<h1 className="text-4xl font-semibold mb-2">Activity</h1>
					<div className="flex justify-start gap-2 overflow-x-scroll">
						<button className="border border-white bg-white text-black text-xs px-8 py-1.5 rounded-lg">
							All
						</button>
						<button className="border border-[#333] bg-transparent text-gray-200 text-xs px-8 py-1.5 rounded-lg">
							Replies
						</button>
						<button className="border border-[#333] bg-transparent text-gray-200 text-xs px-8 py-1.5 rounded-lg">
							Metions
						</button>
						<button className="border border-[#333] bg-transparent text-gray-200 text-xs px-8 py-1.5 rounded-lg">
							Verified
						</button>
					</div>
				</header>

				{/* Dynamic User Activity */}
				<UserActivity
					avatar={RonaldoAvatar}
					activityType="like"
					username="cristiano"
					isVerified={true}
					activityTime="13m"
					activityContent="When you're the only developer in a busi..."
				/>

				<div className="border border-[#222] w-full"></div>

				<UserActivity
					avatar={ZuckAvatar}
					activityType="reply"
					username="zuck"
					isVerified={true}
					activityTime="2h"
					activityContent="Threads is the exact copy past of Twitter ..."
					userReply="Exactly, if you look closely, even we didn't added the edit functionality like the Twitter app LOL"
				/>

				<div className="border border-[#222] w-full"></div>

				<UserActivity
					avatar={ZuckAvatar}
					activityType="like"
					username="ahmadkhan"
					isVerified={false}
					activityTime="4h"
					activityContent="Focus"
				/>

				<div className="border border-[#222] w-full"></div>

				<UserActivity
					avatar={RonaldoAvatar}
					activityType="follow"
					username="taylorswift"
					isVerified={true}
					activityTime="18h"
					activityContent="Followed you"
				/>

				<div className="border border-[#222] w-full"></div>

				<UserActivity
					avatar={RonaldoAvatar}
					activityType="follow"
					username="yahabibi"
					isVerified={true}
					activityTime="1d"
					activityContent="Followed you"
				/>

				<div className="border border-[#222] w-full"></div>

				<UserActivity
					avatar={GeekAvatar}
					activityType="reply"
					username="yrashidkhan01"
					isVerified={false}
					activityTime="2h"
					activityContent="but it's smoother than Twitter tbh"
					userReply="I never thought that Ctrl + C & Ctrl + V is also a programming, until the Threads was launched."
				/>

				<div className="border border-[#222] w-full"></div>

				<UserActivity
					avatar={NikeLogo}
					activityType="like"
					username="nike"
					isVerified={true}
					activityTime="2d"
					activityContent="Focusing on the things that are within..."
				/>

				<div className="border border-[#222] w-full"></div>

				<UserActivity
					avatar={RonaldoAvatar}
					activityType="like"
					username="sahilbloom"
					isVerified={true}
					activityTime="2d"
					activityContent="Focusing on the things that are within..."
				/>

				<div className="border border-[#222] w-full"></div>
			</div>
		</PageWrapper>
	);
};

export default activity;
