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
	replies?: string;
	likes?: string;
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
	replies,
	likes,
}: PostType) => {
	return (
		<div className="flex px-4 gap-3 my-4 w-full">
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
						<p className="text-lg">{username}</p>
						{isVerified ? (
							<Image
								src={BlueCheckmark}
								width={14}
								height={14}
								alt="Blue Checkmark"
								className="rounded-full"
							/>
						) : (
							''
						)}
					</div>
					<div className="flex items-center gap-3">
						<span className="text-xs text-gray-500">
							{publishTime}
						</span>
						<a href="#">
							<FiMoreHorizontal className="text-gray-100" />
						</a>
					</div>
				</div>

				<div className="">
					<div className="text-xs mt-2 ">
						{postContent}{' '}
						<Link href="/" className="text-blue-400">
							{mentions}
						</Link>
						{carousel}
					</div>

					<div className="flex gap-4 mt-3">
						<a href="#">
							<FiHeart
								className={
									isLiked
										? 'fill-red-600 text-red-600'
										: 'fill-none text-gray-100'
								}
							/>
						</a>
						<a href="#">
							<FiMessageCircle className="text-gray-100 -rotate-90" />
						</a>
						<a href="#">
							<FiRepeat className="text-gray-100  -rotate-12" />
						</a>
						<a href="#">
							<FiNavigation className="text-gray-100" />
						</a>
					</div>
					<div className="flex items-start gap-2 text-gray-500 mt-4 text-xs text-center">
						<p>{replies} replies</p>
						<span>.</span>
						<p>{likes} likes</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
