interface ActivityType {
	avatar: any;
	activityType: string;
	username: string;
	isVerified?: boolean;
	activityTime: string;
	activityContent: string;
	isReply?: boolean;
	userReply?: string;
}

const UserActivity = ({
	avatar,
	activityType,
	username,
	isVerified,
	activityTime,
	activityContent,
	isReply,
	userReply,
}: ActivityType) => {
	return (
		<div className="px-4 w-full my-4 clear-both">
			<h1>{username}</h1>
		</div>
	);
};

export default UserActivity;
