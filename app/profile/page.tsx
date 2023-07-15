'use client';

import PageWrapper from '@/components/PageWrapper';
import Image from 'next/image';
import {
	FiHeart,
	FiMessageCircle,
	FiMoreHorizontal,
	FiNavigation,
	FiRepeat,
} from 'react-icons/fi';
import StomanProfile from '@/public/avatars/stoman-avatar.jpg';
import Avatar1 from '@/public/avatars/avatar-1.jpeg';
import NikeLogo from '@/public/logo/nike-logo.jpg';
import RonaldoAvatar from '@/public/avatars/ronaldo-avatar.jpg';
import JackAvatar from '@/public/avatars/jack-dorsey-avatar.jpg';
import 'flowbite';
import ProfileBio from '../../components/profile/ProfileBio';
import Post from '@/components/Post';
import ProjectImage1 from '@/public/projects/project-1.jpg';
import ProjectImage2 from '@/public/projects/project-2.jpg';
import ProjectImage3 from '@/public/projects/project-3.jpg';
import ProjectImage4 from '@/public/projects/project-4.jpg';
import Reply from '@/components/profile/Reply';
import MoalemAvatar from '@/public/avatars/moalem-avatar.jpg';
import Avatar4 from '@/public/avatars/avatar-4.jpg';

const profile = () => {
	return (
		<PageWrapper>
			<div className="pt-5 pb-16 flex flex-col items-center overflow-y-scroll">
				{/* Profile Bio */}
				<header className="px-4 w-full">
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
						<Reply
							avatar={MoalemAvatar}
							username="moalem_design"
							postContent="Is ChatGPT here to help us or rather make us more lazy?"
							publishTime="20m"
							replyContent="ChatGPT is a handy AI technology and I’m also using it when I need it. It’s great for suggestions and recommendations, but it shouldn’t be used for the things that you can do them yourself. Never be dependent on any of these technologies. I suggest to use ChatGPT only when you have to."
							totalPostReplies="50"
							totalPostLikes="270"
							isVerified={false}
							isAuthorVerified={false}
							isRepliedTo={false}
							totalReplyLikes="5"
							totalReplyReplies="12"
							isLiked={true}
						/>

						<div className="border border-[#222]"></div>

						<Reply
							avatar={JackAvatar}
							username="jackdorsey"
							postContent="People will spend 8 hours a day on their phone, never work out and spend no time building something meaningful and then wonder why they feel like shit."
							publishTime="3h"
							replyContent="I'm agree on this with you jack"
							totalPostReplies="160"
							totalPostLikes="6,048"
							isVerified={true}
							isAuthorVerified={false}
							isRepliedTo={false}
							totalReplyLikes="68"
							totalReplyReplies="72"
						/>

						<div className="border border-[#222]"></div>

						<Reply
							avatar={Avatar4}
							username="maiwandstoman"
							postContent="That's why I said. Copy past seems an on demand skill in programming lol"
							publishTime="7h"
							replyContent="Hehehe yes it's definitely an important skill"
							totalPostReplies="12"
							totalPostLikes="63"
							isVerified={false}
							isAuthorVerified={false}
							isRepliedTo={true}
							totalReplyLikes="4"
							totalReplyReplies="2"
							isLiked={true}
						/>
						<div className="border border-[#222]"></div>
					</div>
				</div>
			</div>
		</PageWrapper>
	);
};

export default profile;
