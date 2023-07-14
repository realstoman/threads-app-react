import Image from 'next/image';
import BlueCheckmark from '@/public/avatars/blue-checkmark.png';

interface AccountType {
	avatar: any;
	username: string;
	fullName: string;
	isVerified?: boolean;
	followedBy?: any;
	followedByAnother?: any;
	followersCount: string;
}

const UserAccount = ({
	avatar,
	username,
	fullName,
	isVerified,
	followedBy,
	followedByAnother,
	followersCount,
}: AccountType) => {
	return (
		<div className="px-4 w-full my-4 clear-both">
			<div className="flex justify-start items-start gap-4">
				<div className="">
					<Image
						src={avatar}
						width={70}
						height={70}
						alt="Account Avatar"
						className="rounded-full"
					/>
				</div>
				<div className="w-full">
					<div className="if-verified flex items-center gap-2">
						<p className="text-sm text-gray-100 leading-none">
							{username}
						</p>
						{isVerified ? (
							<Image
								src={BlueCheckmark}
								width={14}
								height={14}
								alt="Blue Checkmark"
								className="rounded-full w-4 sm:w-5"
							/>
						) : (
							''
						)}
					</div>
					<p className="text-sm text-[#777] mt-0.5">{fullName}</p>
					<div className="flex items-center gap-2 mt-3">
						{followedByAnother ? (
							<div className="flex">
								<Image
									src={followedBy}
									width={16}
									height={16}
									alt="Account Avatar"
									className="rounded-full"
								/>
								<Image
									src={followedByAnother}
									width={16}
									height={16}
									alt="Account Avatar"
									className="rounded-full -ml-1.5 border border-[#222]"
								/>
							</div>
						) : (
							<Image
								src={followedBy}
								width={16}
								height={16}
								alt="Account Avatar"
								className="rounded-full"
							/>
						)}
						<span className="text-xs text-gray-200 leading-none">
							{followersCount} followers
						</span>
					</div>
				</div>
				<div className="text-gray-300 flex justify-end text-xs">
					<button className="border border-[#333] px-6 py-1 rounded-lg">
						Follow
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserAccount;
