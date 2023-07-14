'use client';

import PageWrapper from '@/components/PageWrapper';
import Image from 'next/image';
import { FiGlobe, FiInstagram, FiSettings } from 'react-icons/fi';
import StomanProfile from '@/public/avatars/stoman-avatar.jpg';

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

						<p className="text-sm text-gray-300">
							Talks about programming, philosophy, design. Always
							a student. Working on something new.
						</p>
					</div>

					{/* Followers count */}
					<div className="text-xs text-[#666] flex items-center gap-1">
						<div className="flex gap-2 items-center">
							<div className="flex">
								<Image
									src={StomanProfile}
									width="18"
									height={18}
									className="rounded-full border border-[#222]"
									alt="Stoman Profile"
								/>
								<Image
									src={StomanProfile}
									width="18"
									height={18}
									className="rounded-full border border-[#222] -ml-2"
									alt="Stoman Profile"
								/>
								<Image
									src={StomanProfile}
									width="18"
									height={18}
									className="rounded-full border border-[#222] -ml-2"
									alt="Stoman Profile"
								/>
							</div>
							<span>62k followers</span>
						</div>
						<span>.</span>
						<a href="#">stoman.me</a>
					</div>
				</header>
			</div>
		</PageWrapper>
	);
};

export default profile;
