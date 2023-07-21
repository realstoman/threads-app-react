import Image from 'next/image';
import { FiHeart, FiMessageCircle, FiUser } from 'react-icons/fi';
import BlueCheckMark from '@/public/avatars/blue-checkmark.png';
import { ActivityType } from '@/types/AppTypes';

const UserActivity = ({
	avatar,
	activityType,
	username,
	isVerified,
	activityTime,
	activityContent,
	userReply,
}: ActivityType) => {
	return (
		<div className="px-4 w-full my-4 flex justify- items-start">
			<div className="flex w-full gap-4">
				<div className="flex items-start text-center">
					<Image
						src={avatar}
						alt="User Avatar"
						width={35}
						height={35}
						className="rounded-full"
					/>
					<div className="">
						{activityType === 'like' ? (
							<div className="bg-red-500 p-[3px] rounded-full -ml-3 mt-3.5 border-2 border-[#222]">
								<FiHeart className=" fill-white text-[9px]" />
							</div>
						) : activityType === 'reply' ? (
							<div className="bg-blue-400 p-[3px] rounded-full -ml-3 mt-3.5 border-2 border-[#222]">
								<FiMessageCircle className=" fill-white text-[9px]" />
							</div>
						) : (
							<div className="bg-purple-600 p-[3px] rounded-full -ml-3 mt-3.5 border-2 border-[#222]">
								<FiUser className=" fill-white text-[9px]" />
							</div>
						)}
					</div>
				</div>
				<div className="w-full">
					<div className="">
						<div className="flex items-center gap-3">
							<div className="flex items-center gap-2">
								<p className="text-md">{username}</p>

								{isVerified ? (
									<Image
										src={BlueCheckMark}
										alt="User"
										width={14}
										height={14}
									/>
								) : (
									''
								)}
							</div>
							<span className="text-xs text-[#666]">
								{activityTime}
							</span>
						</div>
						<div className="mt-0.5 text-sm text-[#777]">
							{activityContent}
							{activityType === 'reply' ? (
								<p className="text-gray-200 mt-1">
									{userReply}
								</p>
							) : (
								''
							)}
						</div>
					</div>
					<div className="if-follow-btn"></div>
				</div>
			</div>
			{activityType === 'follow' ? (
				<div className="text-gray-300 flex justify-end text-xs">
					<button className="border border-[#333] px-6 py-1.5 rounded-lg">
						Follow
					</button>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default UserActivity;
