import Image from 'next/image';
import { FiX } from 'react-icons/fi';
import BlueCheckmark from '@/public/avatars/blue-checkmark.png';
import { SuggestedAccountType } from '@/types/AppTypes';

const SuggestedAccount = ({
	avatar,
	username,
	isVerified,
	fullName,
}: SuggestedAccountType) => {
	return (
		<div className="card flex flex-col items-center justify-center border border-[#222] rounded-xl text-center px-5 pt-1 pb-2 bg-[#000]">
			<FiX className="w-4 font-bold self-end text-[#777]" />
			<Image
				src={avatar}
				width={80}
				height={80}
				alt="Logo"
				className="rounded-full"
			/>
			<div className="mb-2 mt-2">
				<div className="flex items-center gap-1">
					<p className="text-sm">{username}</p>
					{isVerified ? (
						<Image
							src={BlueCheckmark}
							width={14}
							height={14}
							alt="Logo"
							className="rounded-full"
						/>
					) : (
						''
					)}
				</div>
				<p className="text-xs text-[#777]">{fullName}</p>
			</div>

			<button className="border border-[#333]  text-xs px-8 py-1.5 w-full rounded-lg">
				Follow
			</button>
		</div>
	);
};

export default SuggestedAccount;
