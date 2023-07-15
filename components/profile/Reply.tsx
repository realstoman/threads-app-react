import Image from 'next/image';
import Link from 'next/link';
import {
	FiHeart,
	FiMessageCircle,
	FiMoreHorizontal,
	FiNavigation,
	FiRepeat,
} from 'react-icons/fi';
import RonaldoAvatar from '@/public/avatars/ronaldo-avatar.jpg';
import BlueCheckmark from '@/public/avatars/blue-checkmark.png';
import StomanAvatar from '@/public/avatars/stoman-avatar.jpg';

interface ReplyType {
	avatar: any;
	username: string;
	isVerified?: boolean;
	isAuthorVerified?: boolean;
	isRepliedTo?: boolean;
	postContent: string;
	publishTime: string;
	mentions?: string;
	isLiked?: boolean;
	replyContent: any;
	repostedBy?: string;
	pictures?: any;
	totalPostReplies?: string;
	totalPostLikes?: string;
	totalReplyReplies?: string;
	totalReplyLikes?: string;
}

const Reply = ({
	avatar,
	username,
	isVerified,
	isAuthorVerified,
	isRepliedTo,
	postContent,
	publishTime,
	mentions,
	isLiked,
	replyContent,
	pictures,
	totalPostReplies,
	totalPostLikes,
	totalReplyReplies,
	totalReplyLikes,
}: ReplyType) => {
	return (
		<div className="px-4 my-4 font-sans">
			<div className="flex justify-start gap-8">
				<div className="relative border-l-2 border-[#444] ml-2">
					<div className="flex -ml-7 flex-col w-14 h-full justify-between items-center shrink-0 absolute">
						<div>
							<Image
								src={avatar}
								width={40}
								height={40}
								alt="Account Avatar"
								className="rounded-full"
							/>
						</div>
						{/* <div className="flex flex-col justify-center items-center">
							<Image
								src={StomanAvatar}
								width={32}
								height={32}
								alt="Account Avatar"
								className="rounded-full"
							/>
						</div> */}
					</div>
				</div>
				<div className="flex flex-col w-full">
					<div className="flex items-center justify-between">
						<div className="flex flex-col">
							<div className="flex items-center gap-2 w-full">
								<p className="text-md sm:text-lg font-medium">
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
							{isRepliedTo ? (
								<div className="flex justify-start items-center gap-2 text-xs mb-1 text-[#666]">
									<span>Replying to @realstoman</span>
								</div>
							) : (
								''
							)}
						</div>
						<div className="flex items-center gap-3">
							<span className="text-xs sm:text-sm text-gray-500">
								{publishTime}
							</span>
							<a href="#">
								<FiMoreHorizontal className="text-gray-100" />
							</a>
						</div>
					</div>

					<div className="">
						<div className="mt-1">
							<p className="text-xs sm:text-sm text-gray-200">
								{postContent}
							</p>
							<Link href="/" className="text-blue-400">
								{mentions}
							</Link>
							<div className="mt-2">{pictures}</div>
						</div>

						<div className="flex gap-4 mt-3 sm:mt-4">
							<button type="button">
								<FiHeart
									className={
										isLiked
											? 'fill-red-600 text-red-600 sm:text-xl'
											: 'fill-none text-gray-100 sm:text-xl'
									}
								/>
							</button>
							<button type="button">
								<FiMessageCircle className="text-gray-100 -rotate-90 sm:text-xl" />
							</button>
							<button type="button">
								<FiRepeat className="text-gray-100  -rotate-12 sm:text-xl" />
							</button>
							<button type="button">
								<FiNavigation className="text-gray-100 sm:text-xl" />
							</button>
						</div>
						<div className="flex items-start gap-2 text-gray-500 mt-4 text-xs sm:text-[14px] text-center">
							{totalPostReplies ? (
								<p>{totalPostReplies} replies</p>
							) : (
								''
							)}
							{totalPostReplies && totalPostLikes ? (
								<span>.</span>
							) : (
								''
							)}
							{totalPostLikes ? (
								<p>{totalPostLikes} likes</p>
							) : (
								''
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-start gap-8">
				<div className="ml-2">
					<div className="flex -ml-6 flex-col w-14 justify-between items-center shrink-0 absolute">
						<div className="flex flex-col justify-center items-center">
							<Image
								src={StomanAvatar}
								width={32}
								height={32}
								alt="Account Avatar"
								className="rounded-full"
							/>
						</div>
					</div>
				</div>
				<div className="mt-2">
					<div className="flex items-center gap-2 w-full">
						<p className="text-md sm:text-lg">realstoman</p>
						{isAuthorVerified ? (
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
					<span className="text-xs text-gray-200">
						{replyContent}
					</span>
					<div className="flex gap-4 mt-3 sm:mt-4">
						<button type="button">
							<FiHeart className="fill-none text-gray-100 sm:text-xl" />
						</button>
						<button type="button">
							<FiMessageCircle className="text-gray-100 -rotate-90 sm:text-xl" />
						</button>
						<button type="button">
							<FiRepeat className="text-gray-100  -rotate-12 sm:text-xl" />
						</button>
						<button type="button">
							<FiNavigation className="text-gray-100 sm:text-xl" />
						</button>
					</div>
					<div className="flex items-start gap-2 text-gray-500 mt-3 text-xs sm:text-[14px] text-center">
						{totalReplyReplies ? (
							<p>{totalReplyReplies} replies</p>
						) : (
							''
						)}
						{totalReplyReplies && totalReplyLikes ? (
							<span>.</span>
						) : (
							''
						)}
						{totalReplyLikes ? <p>{totalReplyLikes} likes</p> : ''}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reply;
