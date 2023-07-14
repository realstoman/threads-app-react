import Image from 'next/image';
import BlueCheckmark from '@/public/avatars/blue-checkmark.png';

interface AccountType {
	avatar: any;
	username: string;
	fullName: string;
	isVerified: boolean;
	followedBy?: any;
	followersCount: string;
}

const UserAccount = ({
	avatar,
	username,
	fullName,
	isVerified,
	followedBy,
	followersCount,
}: AccountType) => {
	return (
		<div>
			<div className="">
				<div className="">
					<Image src={avatar} alt="Account Avatar" />
				</div>
				<div className="">
					<div className="if-verified">
						<p className="">{username}</p>
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
					<p className="">{fullName}</p>
					<div className="">
						<Image src={followedBy} alt="User Avatar" />
						<span>{followersCount} followers</span>
					</div>
				</div>
				<div className="">
					<button>Follow</button>
				</div>
			</div>
		</div>
	);
};

export default UserAccount;
