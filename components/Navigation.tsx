import Link from 'next/link';
import { FiEdit, FiHeart, FiHome, FiSearch, FiUser } from 'react-icons/fi';
import 'flowbite';
import { Modal } from 'flowbite';

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

			{/* Create Modal */}
			<div
				id="create-post-modal"
				tabIndex={-1}
				aria-hidden="true"
				className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
			>
				<div className="relative w-full max-w-md max-h-full">
					{/* <!-- Modal content --> */}
					<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
						<button
							type="button"
							className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
							data-modal-hide="create-post-modal"
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
						<div className="px-6 py-6 lg:px-8">
							<h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
								Sign in to our platform
							</h3>
							<form className="space-y-6" action="#">
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Your email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
										placeholder="name@company.com"
										required
									></input>
								</div>
								<div>
									<label
										htmlFor="password"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Your password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
										required
									></input>
								</div>
								<div className="flex justify-between">
									<div className="flex items-start">
										<div className="flex items-center h-5">
											<input
												id="remember"
												type="checkbox"
												value=""
												className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
												required
											></input>
										</div>
										<label
											htmlFor="remember"
											className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
										>
											Remember me
										</label>
									</div>
									<a
										href="#"
										className="text-sm text-blue-700 hover:underline dark:text-blue-500"
									>
										Lost Password?
									</a>
								</div>
								<button
									type="submit"
									className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Login to your account
								</button>
								<div className="text-sm font-medium text-gray-500 dark:text-gray-300">
									Not registered?{' '}
									<a
										href="#"
										className="text-blue-700 hover:underline dark:text-blue-500"
									>
										Create account
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
