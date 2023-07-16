'use client';

import Link from 'next/link';
import { FiEdit, FiHeart, FiHome, FiSearch, FiUser } from 'react-icons/fi';
import 'flowbite';
import { Button, Modal } from 'flowbite-react';
// import Create from './Create';
import { useState } from 'react';

const Navigation = () => {
	const [openModal, setOpenModal] = useState<string | undefined>();
	const props = { openModal, setOpenModal };

	return (
		<div className="fixed bottom-0 left-0 z-40 w-full h-16 bg-dark">
			<div className="grid h-full max-w-lg sm:max-w-4xl grid-cols-5 mx-auto font-medium bg-[#111] text-[#666]">
				<Link
					href="/"
					className="inline-flex flex-col items-center justify-center px-5 group"
				>
					<FiHome className="hover:fill-white active:fill-white focus:fill-white text-2xl" />
				</Link>
				<Link
					href="/search"
					className="inline-flex flex-col items-center justify-center px-5 group"
				>
					<FiSearch className="hover:fill-white active:fill-white focus:fill-white text-2xl" />
				</Link>
				<button
					onClick={() => props.setOpenModal('default')}
					type="button"
					data-modal-target="create-post-modal"
					data-modal-toggle="create-post-modal"
					className="inline-flex flex-col items-center justify-center px-5 group"
				>
					<FiEdit className="hover:fill-white active:fill-white focus:fill-white text-2xl" />
				</button>
				<Link
					href="/activity"
					className="inline-flex flex-col items-center justify-center px-5 group"
				>
					<FiHeart className="hover:fill-white active:fill-white focus:fill-white text-2xl" />
				</Link>
				<Link
					href="/profile"
					className="inline-flex flex-col items-center justify-center px-5 group"
				>
					<FiUser className="hover:fill-white active:fill-white focus:fill-white text-2xl" />
				</Link>
			</div>

			{/* Create Post Modal */}
			<Modal
				show={props.openModal === 'default'}
				onClose={() => props.setOpenModal(undefined)}
			>
				<Modal.Header>Terms of Service</Modal.Header>
				<Modal.Body>
					<div className="space-y-6">
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							With less than a month to go before the European
							Union enacts new consumer privacy laws for its
							citizens, companies around the world are updating
							their terms of service agreements to comply.
						</p>
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							The European Union’s General Data Protection
							Regulation (G.D.P.R.) goes into effect on May 25 and
							is meant to ensure a common set of data rights in
							the European Union. It requires organizations to
							notify users as soon as possible of high-risk data
							breaches that could personally affect them.
						</p>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => props.setOpenModal(undefined)}>
						I accept
					</Button>
					<Button
						color="gray"
						onClick={() => props.setOpenModal(undefined)}
					>
						Decline
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Navigation;
