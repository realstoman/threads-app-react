'use client';

import PageWrapper from '@/components/PageWrapper';
import Image from 'next/image';
import { FiGlobe, FiInstagram, FiSettings } from 'react-icons/fi';
import StomanProfile from '@/public/avatars/stoman-avatar.jpg';
import Avatar1 from '@/public/avatars/avatar-1.jpeg';
import NikeLogo from '@/public/logo/nike-logo.jpg';
import RonaldoAvatar from '@/public/avatars/ronaldo-avatar.jpg';
import 'flowbite';

const profile = () => {
	return (
		<PageWrapper>
			<div className="pt-5 pb-16 flex flex-col items-center overflow-y-scroll">
				<header className="px-4">
					{/* Links */}
					<div className="flex justify-between items-center mb-5 text-gray-200">
						<a href="#">
							<FiGlobe />
						</a>
						<div className="flex gap-4">
							<a href="#">
								<FiInstagram />
							</a>
							<a href="#">
								<FiSettings />
							</a>
						</div>
					</div>

					{/* Bio */}
					<div className="mb-4">
						<div className="flex justify-between items-center mb-4">
							<div className="text-white">
								<h1 className="text-xl uppercase mb-1">
									Stoman
								</h1>
								<div className="text-gray-300 flex items-center gap-2">
									<p className="text-xs">realstoman</p>
									<span className="text-[8px] bg-[#444] px-2 py-0.5 rounded-xl text-[#777]">
										threads.net
									</span>
								</div>
							</div>
							<Image
								src={StomanProfile}
								width="45"
								height={45}
								className="rounded-full"
								alt="Stoman Profile"
							/>
						</div>

						<p className="text-xs text-gray-300">
							Talks about programming, philosophy, design. Always
							a student. Working on something new.
						</p>
					</div>

					{/* Followers count */}
					<div className="text-xs text-[#777] flex items-center gap-1">
						<div className="flex gap-2 items-center">
							<div className="flex">
								<Image
									src={Avatar1}
									width="18"
									height={18}
									className="rounded-full border-2 border-[#222]"
									alt="Stoman Profile"
								/>
								<Image
									src={RonaldoAvatar}
									width="18"
									height={18}
									className="rounded-full border-2 border-[#222] -ml-[0.50rem]"
									alt="Stoman Profile"
								/>
								<Image
									src={NikeLogo}
									width="18"
									height={18}
									className="rounded-full border-2 border-[#222] -ml-[0.50rem]"
									alt="Stoman Profile"
								/>
							</div>
							<span>62k followers</span>
						</div>
						<span>.</span>
						<a href="#">stoman.me</a>
					</div>

					{/* Buttons */}
					<div className="text-gray-300 flex justify-center text-xs gap-2 mt-3">
						<button className="border border-[#333] px-12 py-1.5 rounded-lg">
							Edit profile
						</button>
						<button className="border border-[#333] px-12 py-1.5 rounded-lg">
							Share profile
						</button>
					</div>
				</header>
				<div className="text-xs w-full text-center mb-4 border-b border-gray-700 mt-3">
					<ul
						className="flex flex-wrap -mb-px text-xs font-medium text-center"
						id="tab"
						data-tabs-toggle="#tabContent"
						role="tablist"
					>
						<li className="w-1/2 border-b" role="presentation">
							<button
								className="inline-block p-2 rounded-t-lg"
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
						<li className="w-1/2 border-b" role="presentation">
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
						className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
						id="threads"
						role="tabpanel"
						aria-labelledby="threads-tab"
					>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							This is some placeholder content the{' '}
							<strong className="text-gray-200">
								Profile tabs associated content
							</strong>
							. Clicking another tab will toggle the visibility of
							this one for the next. The tab JavaScript swaps
							classes to control the content visibility and
							styling.
						</p>
					</div>
					<div
						className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
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
