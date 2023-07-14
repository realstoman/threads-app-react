'use client';
import Image from 'next/image';
import Logo from '@/public/logo/logo.svg';
import UnsplashLogo from '@/public/logo/unsplash-logo.jpg';
import StomanAvatar from '@/public/avatars/stoman-avatar.jpg';
import ZuckAvatar from '@/public/avatars/zuck-avatar.jpg';
import RonaldoAvatar from '@/public/avatars/ronaldo-avatar.jpg';
import SahilAvatar from '@/public/avatars/sahil-bloom-avatar.jpg';
import Avatar1 from '@/public/avatars/avatar-1.jpeg';
import BlueCheckmark from '@/public/avatars/blue-checkmark.png';
import PineapplePhoto from '@/public/fruits/ananas.jpg';
import StrawberryPhoto from '@/public/fruits/strawberry.jpg';
import OrangePhoto from '@/public/fruits/orange.jpg';
import ApplePhoto from '@/public/fruits/apple.jpg';
import PilePhoto from '@/public/fruits/pile.jpg';
import {
	FiHeart,
	FiMessageCircle,
	FiMoreHorizontal,
	FiNavigation,
	FiRepeat,
} from 'react-icons/fi';
import Post from '@/components/Post';
import PageWrapper from '@/components/PageWrapper';

export default function Home() {
	return (
		<PageWrapper>
			<div className="pt-5 pb-16 flex flex-col items-center overflow-y-scroll">
				<header className="flex justify-center pt-0 pb-0">
					<Image src={Logo} width={35} height={35} alt="Logo" />
				</header>

				<div>
					{/* Single Dynamic Post */}
					<Post
						avatar={ZuckAvatar}
						username="zuck"
						postContent="70 million sign ups on Threads as of this morning. Way beyond our expectations."
						publishTime="10m"
						totalReplies="18,257"
						totalLikes="104,352"
						isLiked={true}
						isVerified={true}
						mentions=""
					/>

					<div className="border border-[#222]"></div>

					{/* Single Dynamic Post */}
					<Post
						avatar={SahilAvatar}
						username="sahilbloom"
						postContent="Don't chase the material things that you thing will make you happy. Chase the freedom that actually will."
						publishTime="35m"
						totalReplies="467"
						totalLikes="4,352"
						isLiked={false}
						isVerified={true}
						mentions=""
						isReposted={true}
						repostedBy="maiwandstoman"
					/>

					<div className="border border-[#222]"></div>

					{/* Single Post */}
					<div className="flex px-4 gap-8 my-4">
						<div className="relative border-l-2 border-[#444] ml-2">
							<div className="flex -ml-7 flex-col w-14 h-full justify-between items-center shrink-0 absolute">
								<div className="">
									<Image
										src={UnsplashLogo}
										width={40}
										height={40}
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
								</div>
							</div>
						</div>
						<div className="flex flex-col w-full">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-2 w-full">
									<p className="text-lg">unsplash</p>
									<Image
										src={BlueCheckmark}
										width={14}
										height={14}
										alt="Logo"
										className="rounded-full"
									/>
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

							<div className="">
								<div className="text-xs mt-1">
									<p className="text-gray-200">
										Best fruit shots of 2023.{' '}
										<span className="ml1 mr-1">📸</span> By{' '}
										<span className="ml-1 text-blue-400">
											@realstoman
										</span>
									</p>
									<div className="mt-2 flex justify-start gap-1.5 overflow-x-scroll">
										<Image
											src={PineapplePhoto}
											alt="Author"
											width={150}
											height={100}
											className="rounded-md"
										/>
										<Image
											src={StrawberryPhoto}
											alt="Author"
											width={150}
											height={100}
											className="rounded-md"
										/>
										<Image
											src={OrangePhoto}
											alt="Author"
											width={150}
											height={100}
											className="rounded-md"
										/>
										<Image
											src={ApplePhoto}
											alt="Author"
											width={150}
											height={100}
											className="rounded-md"
										/>
										<Image
											src={PilePhoto}
											alt="Author"
											width={150}
											height={100}
											className="rounded-md"
										/>
									</div>
								</div>

								<div className="flex gap-4 mt-3">
									<a href="#">
										<FiHeart className="fill-red-600 text-red-600" />
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
			</div>
		</PageWrapper>
	);
}
