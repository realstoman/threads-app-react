'use client';

import PageWrapper from '@/components/PageWrapper';
import Image from 'next/image';
import { FiGlobe, FiInstagram, FiSettings } from 'react-icons/fi';
import StomanProfile from '@/public/avatars/stoman-avatar.jpg';
import Avatar1 from '@/public/avatars/avatar-1.jpeg';
import NikeLogo from '@/public/logo/nike-logo.jpg';
import RonaldoAvatar from '@/public/avatars/ronaldo-avatar.jpg';
import 'flowbite';
import ProfileBio from './ProfileBio';

const profile = () => {
	return (
		<PageWrapper>
			<div className="pt-5 pb-16 flex flex-col items-center overflow-y-scroll">
				{/* Profile Bio */}
				<header className="px-4">
					<ProfileBio />
				</header>

				{/* Profile Tabs */}
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
