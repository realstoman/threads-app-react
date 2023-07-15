import Link from 'next/link';
import { FiEdit, FiHeart, FiHome, FiSearch, FiUser } from 'react-icons/fi';

const Navigation = () => {
	return (
		<div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-dark">
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
					data-modal-target="medium-modal"
					data-modal-toggle="medium-modal"
					type="button"
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

			{/* Create Modal */}
			<div
				id="medium-modal"
				tabIndex={-1}
				className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
			>
				<div className="relative w-full max-w-lg max-h-full">
					{/* <!-- Modal content --> */}
					<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
						{/* <!-- Modal header --> */}
						<div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
							<h3 className="text-xl font-medium text-gray-900 dark:text-white">
								Default modal
							</h3>
							<button
								type="button"
								className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
								data-modal-hide="medium-modal"
							>
								<svg
									className="w-3 h-3"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 14 14"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
									/>
								</svg>
								<span className="sr-only">Close modal</span>
							</button>
						</div>
						{/* <!-- Modal body --> */}
						<div className="p-6 space-y-6">
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								With less than a month to go before the European
								Union enacts new consumer privacy laws for its
								citizens, companies around the world are
								updating their terms of service agreements to
								comply.
							</p>
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								The European Union’s General Data Protection
								Regulation (G.D.P.R.) goes into effect on May 25
								and is meant to ensure a common set of data
								rights in the European Union. It requires
								organizations to notify users as soon as
								possible of high-risk data breaches that could
								personally affect them.
							</p>
						</div>
						{/*  */}
						<div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
							<button
								data-modal-hide="medium-modal"
								type="button"
								className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>
								I accept
							</button>
							<button
								data-modal-hide="medium-modal"
								type="button"
								className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
							>
								Decline
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
