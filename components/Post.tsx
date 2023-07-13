import React from 'react';
import {
	FiHeart,
	FiMessageCircle,
	FiMoreHorizontal,
	FiNavigation,
	FiRepeat,
} from 'react-icons/fi';
import ZuckAvatar from '@/public/avatars/zuck-avatar.jpg';
import BlueCheckmark from '@/public/avatars/blue-checkmark.png';
import Image from 'next/image';
import Link from 'next/link';

interface PostType {
	avatar: any;
	username: string;
	isVerified?: boolean;
	postContent: string;
	publishTime: string;
	mentions?: string;
	isLiked?: boolean;
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
	carousel,
	totalReplies,
	totalLikes,
}: PostType) => {
	return (
		<div className="flex px-4 gap-3 my-4 w-full font-sans">
			<div className="flex flex-col w-12 sm:w-14 min-h-full justify-between items-center shrink-0 p-0 m-0">
				<div className="">
					<Image
						src={avatar}
						width={45}
						height={45}
						alt="Logo"
						className="rounded-full"
					/>
				</div>
				<div className="w-full flex flex-col justify-center items-center">
					<Image
						src={ZuckAvatar}
						width={16}
						height={16}
						alt="Logo"
						className="rounded-full"
					/>
					<Image
						src={ZuckAvatar}
						width={12}
						height={12}
						alt="Logo"
						className="rounded-full"
					/>
					<Image
						src={ZuckAvatar}
						width={8}
						height={8}
						alt="Logo"
						className="rounded-full"
					/>
				</div>
			</div>
			<div className="flex flex-col w-full">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2 w-full">
						<p className="text-md sm:text-xl font-medium">
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
					<div className="mt-1.5 sm:mt-2">
						<p className="text-xs sm:text-sm">{postContent}</p>
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
						<p>{totalReplies} replies</p>
						<span>.</span>
						<p>{totalLikes} likes</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
