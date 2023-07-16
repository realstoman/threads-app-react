import React from 'react';
import {
	FiHeart,
	FiMessageCircle,
	FiMoreHorizontal,
	FiNavigation,
	FiRepeat,
} from 'react-icons/fi';
import ZuckAvatar from '@/public/avatars/zuck-avatar.jpg';
import RonaldoAvatar from '@/public/avatars/ronaldo-avatar.jpg';
import BlueCheckmark from '@/public/avatars/blue-checkmark.png';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

interface PostType {
	avatar: any;
	username: string;
	isVerified?: boolean;
	postContent: string;
	publishTime: string;
	mentions?: string;
	isLiked?: boolean;
	isReposted?: boolean;
	repostedBy?: string;
	carousel?: [] & any;
	totalReplies?: string;
	totalLikes?: string;
}

const Post = ({
	avatar,
	username,
	isVerified,
	postContent,
	publishTime,
	mentions,
	isLiked,
	isReposted,
	repostedBy,
	carousel,
	totalReplies,
	totalLikes,
}: PostType) => {
	return (
		<div className="px-4 my-4 w-full font-sans">
			{isReposted ? (
				<div className="flex justify-start items-center gap-2 ml-4 text-xs mb-1 text-[#777]">
					<FiRepeat className="-rotate-12 sm:text-xl" />
					<span>{repostedBy} reposted</span>
				</div>
			) : (
				''
			)}
			<div className="flex justify-start gap-8">
				<div
					className={cn(
						totalReplies
							? 'relative border-l-2 border-[#333] border-opacity-70 ml-2'
							: 'relative ml-2.5'
					)}
				>
					<div className="flex -ml-7 flex-col w-14 h-full justify-between items-center shrink-0 absolute">
						<div>
							<Image
								src={avatar}
								width={35}
								height={35}
								alt="Account Avatar"
								className="rounded-full"
							/>
						</div>
						{totalReplies ? (
							<div className="flex flex-col justify-center items-center">
								<Image
									src={RonaldoAvatar}
									width={14}
									height={14}
									alt="Account Avatar"
									className="rounded-full"
								/>
							</div>
						) : (
							''
						)}
					</div>
				</div>
				<div className="flex flex-col w-full">
					<div className="flex items-center justify-between">
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
							<div className="mt-2">{carousel}</div>
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
							{totalReplies ? <p>{totalReplies} replies</p> : ''}
							{totalReplies && totalLikes ? <span>.</span> : ''}
							{totalLikes ? <p>{totalLikes} likes</p> : ''}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
