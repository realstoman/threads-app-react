import { useState } from 'react';
import Image from 'next/image';
import {
	FiCheck,
	FiCoffee,
	FiGlobe,
	FiInstagram,
	FiSettings,
} from 'react-icons/fi';
import StomanProfile from '@/public/avatars/stoman-avatar.jpg';
import Avatar1 from '@/public/avatars/avatar-1.jpeg';
import NikeLogo from '@/public/logo/nike-logo.jpg';
import RonaldoAvatar from '@/public/avatars/ronaldo-avatar.jpg';
import { Modal } from 'flowbite-react';

const ProfileBio = () => {
	const [openModal, setOpenModal] = useState<string | undefined>();
	const props = { openModal, setOpenModal };

	return (
		<>
			{/* Links */}
			<div className="flex justify-between items-center mb-5 text-gray-200">
				<button
					type="button"
					onClick={() => props.setOpenModal('pop-up')}
				>
					<FiGlobe className="w-5 h-5" />
				</button>
				<div className="flex gap-4">
					<button
						type="button"
						onClick={() => props.setOpenModal('pop-up')}
					>
						<FiInstagram className="w-5 h-5" />
					</button>
					<button
						type="button"
						onClick={() => props.setOpenModal('pop-up')}
					>
						<FiSettings className="w-5 h-5" />
					</button>
				</div>
			</div>

			{/* Bio */}
			<div className="mb-4">
				<div className="flex justify-between items-center mb-4">
					<div className="text-white">
						<h1 className="text-xl uppercase mb-1">Stoman</h1>
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
					Talks about programming, philosophy, design. Always a
					student. Working on something new.
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
				<button
					type="button"
					onClick={() => props.setOpenModal('pop-up')}
				>
					stoman.me
				</button>
			</div>

			{/* Buttons */}
			<div className="text-gray-300 flex justify-center sm:justify-start text-xs gap-2 mt-3">
				<button
					className="border border-[#333] px-12 py-1.5 rounded-lg"
					type="button"
					onClick={() => props.setOpenModal('pop-up')}
				>
					Edit profile
				</button>
				<button
					className="border border-[#333] px-12 py-1.5 rounded-lg"
					type="button"
					onClick={() => props.setOpenModal('pop-up')}
				>
					Share profile
				</button>
			</div>

			{/* Modal */}
			<div className="flex justify-center items-center flex-col">
				<Modal
					show={props.openModal === 'pop-up'}
					size="md"
					popup
					onClose={() => props.setOpenModal(undefined)}
				>
					<Modal.Body className="pt-6 bg-[#000] flex justify-center items-center rounded-md">
						<div className="text-center">
							<FiCoffee className="mx-auto mb-4 h-14 w-14 text-green-500" />
							<h3 className="mb-5 text-lg font-normal text-gray-200">
								This section will be added soon
							</h3>
							<div className="flex justify-center gap-4">
								<button
									onClick={() =>
										props.setOpenModal(undefined)
									}
									className="border border-[#333]  text-sm px-8 py-1.5 rounded-lg flex justify-center items-center"
								>
									Ok, cool{' '}
									<FiCheck className="text-green-500 ml-2 text-lg" />
								</button>
							</div>
						</div>
					</Modal.Body>
				</Modal>
			</div>
		</>
	);
};

export default ProfileBio;
