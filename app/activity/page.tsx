'use client';

import PageWrapper from '@/components/PageWrapper';
import UserActivity from '@/components/activity/UserActivity';

import RonaldoAvatar from '@/public/avatars/ronaldo-avatar.jpg';

const activity = () => {
	return (
		<PageWrapper>
			<div className="pt-5 pb-16 flex flex-col items-center overflow-y-scroll">
				{/* Header section */}
				<header className="w-full px-4">
					<h1 className="text-4xl font-semibold mb-2">Activity</h1>
					<div></div>
				</header>

				{/* Dynamic User Activity */}
				<UserActivity
					avatar={RonaldoAvatar}
					activityType="like"
					username="cristiano"
					isVerified={true}
					activityTime="13m"
					activityContent="When you're the only developer in a..."
				/>
			</div>
		</PageWrapper>
	);
};

export default activity;
