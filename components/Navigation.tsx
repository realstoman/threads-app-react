import Link from 'next/link';
import { FiEdit, FiHeart, FiHome, FiSearch, FiUser } from 'react-icons/fi';

const Navigation = () => {
	return (
		<div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-dark">
			<div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
				<Link
					href="/"
					className="inline-flex flex-col items-center justify-center px-5 group"
				>
					<FiHome className="text-gray-700 hover:fill-white active:fill-white focus:fill-white text-2xl" />
				</Link>
				<Link
					href="/search"
					className="inline-flex flex-col items-center justify-center px-5 group"
				>
					<FiSearch className="text-gray-700 hover:fill-white active:fill-white focus:fill-white text-2xl" />
				</Link>
				<Link
					href="/"
					className="inline-flex flex-col items-center justify-center px-5 group"
				>
					<FiEdit className="text-gray-700 hover:fill-white active:fill-white focus:fill-white text-2xl" />
				</Link>
				<Link
					href="/activity"
					className="inline-flex flex-col items-center justify-center px-5 group"
				>
					<FiHeart className="text-gray-700 hover:fill-white active:fill-white focus:fill-white text-2xl" />
				</Link>
				<Link
					href="/profile"
					className="inline-flex flex-col items-center justify-center px-5 group"
				>
					<FiUser className="text-gray-700 hover:fill-white active:fill-white focus:fill-white text-2xl" />
				</Link>
			</div>
		</div>
	);
};

export default Navigation;
