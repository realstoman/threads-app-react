'use client';

import PageWrapper from '@/components/PageWrapper';
import Image from 'next/image';
import {
	FiGlobe,
	FiHeart,
	FiInstagram,
	FiMessageCircle,
	FiMoreHorizontal,
	FiNavigation,
	FiRepeat,
	FiSettings,
} from 'react-icons/fi';
import StomanProfile from '@/public/avatars/stoman-avatar.jpg';
import Avatar1 from '@/public/avatars/avatar-1.jpeg';
import NikeLogo from '@/public/logo/nike-logo.jpg';
import RonaldoAvatar from '@/public/avatars/ronaldo-avatar.jpg';
import JackAvatar from '@/public/avatars/jack-dorsey-avatar.jpg';
import 'flowbite';
import ProfileBio from '../../components/profile/ProfileBio';
import Post from '@/components/Post';
import BlueCheckmark from '@/public/avatars/blue-checkmark.png';
import ProjectImage1 from '@/public/projects/project-1.jpg';
import ProjectImage2 from '@/public/projects/project-2.jpg';
import ProjectImage3 from '@/public/projects/project-3.jpg';
import ProjectImage4 from '@/public/projects/project-4.jpg';

const profile = () => {
	return (
		<PageWrapper>
			<div className="pt-5 pb-16 flex flex-col items-center overflow-y-scroll">
				{/* Profile Bio */}
				<header className="px-4">
					<ProfileBio />
				</header>

				{/* Profile Tabs */}
				<div className="w-full text-center mb-4 mt-3">
					<ul
						className="flex flex-wrap -mb-px text-sm font-medium text-center"
						id="tab"
						data-tabs-toggle="#tabContent"
						role="tablist"
					>
						<li
							className="w-1/2 border-b border-gray-200"
							role="presentation"
						>
							<button
								className="inline-block p-2 rounded-t-lg text-gray-100"
								id="threads-tab"
								data-tabs-target="#threads"
								type="button"
								role="tab"
								aria-controls="threads"
								aria-selected="true"
							>
								Threads
							</button>
						</li>
						<li
							className="w-1/2 border-b border-gray-700"
							role="presentation"
						>
							<button
								className="inline-block p-2 border-transparent rounded-t-lg"
								id="replies-tab"
								data-tabs-target="#replies"
								type="button"
								role="tab"
								aria-controls="replies"
								aria-selected="false"
							>
								Replies
							</button>
						</li>
					</ul>
				</div>
				<div id="tabContent">
					<div
						className="hidden"
						id="threads"
						role="tabpanel"
						aria-labelledby="threads-tab"
					>
						<Post
							avatar={StomanProfile}
							username="realstoman"
							postContent="Can't say no to programming, design, coffee and some football."
							publishTime="45m"
							totalReplies="467"
							totalLikes="4,352"
						/>

						<div className="border border-[#222]"></div>

						<Post
							avatar={JackAvatar}
							username="jackdorsey"
							postContent="People will spend 8 hours a day on their phone, never work out and spend no time building something meaningful and then wonder why they feel like shit."
							publishTime="3h"
							totalReplies="160"
							totalLikes="6,048"
							isVerified={true}
							isReposted={true}
							repostedBy="You"
						/>

						<div className="border border-[#222]"></div>

						{/* Single Carousel Post */}
						<div className="flex px-4 gap-8 my-4">
							<div className="relative border-l-2 border-[#444] ml-2">
								<div className="flex -ml-7 flex-col w-14 h-full justify-between items-center shrink-0 absolute">
									<div className="">
										<Image
											src={StomanProfile}
											width={40}
											height={40}
											alt="Logo"
											className="rounded-full"
										/>
									</div>
									<div className="w-full flex flex-col justify-center items-center">
										<Image
											src={RonaldoAvatar}
											width={16}
											height={16}
											alt="Logo"
											className="rounded-full"
										/>
										<Image
											src={Avatar1}
											width={12}
											height={12}
											alt="Logo"
											className="rounded-full"
										/>
									</div>
								</div>
							</div>
							<div className="flex flex-col w-full">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-2 w-full">
										<p className="text-lg">realstoman</p>
									</div>
									<div className="flex items-center gap-3">
										<span className="text-xs text-gray-500">
											2h
										</span>
										<a href="#">
											<FiMoreHorizontal className="text-gray-100" />
										</a>
									</div>
								</div>

								<div>
									<div className="text-xs mt-1">
										<p className="text-gray-200">
											My recent projects for global
											clients.
										</p>
										<div className="mt-2 flex justify-start gap-1.5 overflow-x-scroll">
											<Image
												src={ProjectImage1}
												alt="Author"
												width={150}
												height={100}
												className="rounded-md"
											/>
											<Image
												src={ProjectImage2}
												alt="Author"
												width={150}
												height={100}
												className="rounded-md"
											/>
											<Image
												src={ProjectImage3}
												alt="Author"
												width={150}
												height={100}
												className="rounded-md"
											/>
											<Image
												src={ProjectImage4}
												alt="Author"
												width={150}
												height={100}
												className="rounded-md"
											/>
										</div>
									</div>

									<div className="flex gap-4 mt-3">
										<a href="#">
											<FiHeart className="text-gray-100" />
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
										<p>18,257 replies</p>
										<span>.</span>
										<p>104,352 likes</p>
									</div>
								</div>
							</div>
						</div>
						<div className="border border-[#222]"></div>
					</div>
					<div
						className="hidden"
						id="replies"
						role="tabpanel"
						aria-labelledby="replies-tab"
					>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							This is some placeholder content the{' '}
							<strong className="font-medium text-gray-800 dark:text-white">
								Dashboard tabs associated content
							</strong>
							. Clicking another tab will toggle the visibility of
							this one for the next. The tab JavaScript swaps
							classes to control the content visibility and
							styling.
						</p>
					</div>
				</div>
			</div>
		</PageWrapper>
	);
};

export default profile;
