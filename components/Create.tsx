import React from 'react';
import 'flowbite';
import { FiX } from 'react-icons/fi';

const Create = () => {
	return (
		<div
			id="create-post-modal"
			tabIndex={-1}
			aria-hidden="true"
			className="fixed bottom-0 left-0 z-50 hidden w-full h-600 overflow-x-hidden overflow-y-auto p-0"
		>
			<div className="relative w-full max-w-md">
				{/* <!-- Modal content --> */}
				<div className="relative rounded-lg bg-[#222] text-gray-100">
					<header className="border-b border-[#333]">
						<div className="grid grid-cols-8 py-3 px-4">
							<button
								type="button"
								className="text-left col-span-1 hover:text-gray-900 rounded-lg  inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white text-xs"
								data-modal-hide="create-post-modal"
							>
								Cancel
								<span className="sr-only">Close modal</span>
							</button>
							<h1 className="col-span-7 -ml-8 text-center font-medium">
								New thread
							</h1>
						</div>
					</header>

					<div className="px-4 py-6 flex w-full">
						<div></div>
						<div className="flex w-full">
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
							<button
								type="button"
								className="absolute mt-2 right-2.5 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
								data-modal-hide="create-post-modal"
							>
								<FiX className="w-6 h-6" />
								<span className="sr-only">Close modal</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Create;
