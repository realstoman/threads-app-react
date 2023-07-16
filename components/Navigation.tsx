import Link from 'next/link';
import { FiEdit, FiHeart, FiHome, FiSearch, FiUser } from 'react-icons/fi';
import 'flowbite';
import Create from './Create';

const Navigation = () => {
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
			<Create />
		</div>
	);
};

export default Navigation;
