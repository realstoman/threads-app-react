'use client';
import Image from 'next/image';
import Logo from '@/public/logo/logo.svg';
import StomanAvatar from '@/public/avatars/stoman-avatar.jpg';
import ZuckAvatar from '@/public/avatars/zuck-avatar.jpg';
import BlueCheckmark from '@/public/avatars/blue-checkmark.png';
import {
	FiHeart,
	FiMessageCircle,
	FiMoreHorizontal,
	FiNavigation,
	FiRepeat,
} from 'react-icons/fi';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between py-5">
			<header className="">
				<Image src={Logo} width={50} height={50} alt="Logo" />

				<div className="main-content">
					{/* Single Post */}
					<div className="flex w-full px-4 gap-6">
						<div className="flex flex-col w-20 h-full justify-between">
							<div className="flex flex-col">
								<Image
									src={ZuckAvatar}
									width={45}
									height={45}
									alt="Logo"
									className="rounded-full"
								/>
							</div>
							<div className="flex text-left">
								<Image
									src={ZuckAvatar}
									width={22}
									height={22}
									alt="Logo"
									className="rounded-full"
								/>
								<Image
									src={ZuckAvatar}
									width={16}
									height={16}
									alt="Logo"
									className="rounded-full"
								/>
								<Image
									src={ZuckAvatar}
									width={14}
									height={14}
									alt="Logo"
									className="rounded-full"
								/>
							</div>
						</div>
						<div className="flex flex-col">
							<div className="flex items-start justify-between">
								<div className="flex items-center gap-2 w-full">
									<p className="text-lg">zuck</p>
									<Image
										src={BlueCheckmark}
										width={14}
										height={14}
										alt="Logo"
										className="rounded-full"
									/>
								</div>
								<div className="flex items-center gap-3">
									<span className="text-sm text-gray-500">
										10m
									</span>
									<a href="#">
										<FiMoreHorizontal className="text-gray-500" />
									</a>
								</div>
							</div>

							<div className="">
								<div className="text-sm mt-2">
									70 million sign ups on Threads as of this
									morning. Way beyond our expectations.
								</div>

								<div className="flex gap-4 mt-4">
									<a href="#">
										<FiHeart className="fill-red-600 text-red-600" />
									</a>
									<a href="#">
										<FiMessageCircle className="text-gray-500" />
									</a>
									<a href="#">
										<FiRepeat className="text-gray-500" />
									</a>
									<a href="#">
										<FiNavigation className="text-gray-500" />
									</a>
								</div>
								<div className="flex items-start gap-4 text-gray-500 mt-2 text-sm">
									<div className="reply">
										<p>18,257 replies</p>
									</div>
									<div className="dot">
										<span>.</span>
									</div>
									<div className="likes">
										<p>104,352 likes</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</main>
	);
}
