import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import 'flowbite';
import { FiPaperclip, FiX } from 'react-icons/fi';
import Image from 'next/image';
import StomanAvatar from '@/public/avatars/stoman-avatar.jpg';

const Create = () => {
	const [openModal, setOpenModal] = useState<string | undefined>();
	const props = { openModal, setOpenModal };

	return (
		<div
			id="create-post-modal"
			data-modal-backdrop="static"
			tabIndex={-1}
			aria-hidden="true"
			className="fixed bottom-0 left-0 z-50 hidden w-full  overflow-x-hidden overflow-y-auto p-0"
		>
			<div className="relative w-full h-full max-w-md">
				{/* <!-- Modal content --> */}
				<div className="relative rounded-t-lg h-[500px] bg-[#222] text-gray-100">
					<div className="border-b border-[#333]">
						<div className="grid grid-cols-8 py-3 px-4">
							<button
								type="button"
								className="absolute text-left pt-1 col-span-1 rounded-lg inline-flex justify-center items-center text-[#bbb] text-xs"
								data-modal-hide="create-post-modal"
							>
								Cancel
								<span className="sr-only">Close modal</span>
							</button>
							<h1 className="col-span-7 text-center font-medium">
								New thread
							</h1>
						</div>
					</div>

					<form className="space-y-6" action="#">
						<div className="px-4 py-6 flex w-full gap-2">
							<div className=" ml-2">
								<div className="relative border-l-2 border-[#333] border-opacity-70 ml-2">
									<div className="flex -ml-7 flex-col w-14 h-36 max-h-36 justify-between items-center">
										<div>
											<Image
												src={StomanAvatar}
												width={35}
												height={35}
												alt="Account Avatar"
												className="rounded-full"
											/>
										</div>

										<div className="flex flex-col justify-center items-center">
											<Image
												src={StomanAvatar}
												width={16}
												height={16}
												alt="Account Avatar"
												className="rounded-full opacity-30"
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="flex w-full h-full">
								<div className="space-y-6">
									<div>
										<input
											type="text"
											name="post"
											id="post"
											className="bg-transparent text-xs border-none w-full focus:border-none ring-0 p-0 focus:ring-0 active:ring-0"
											required
										></input>
									</div>

									<button type="button">
										<FiPaperclip className="text-[#777]" />
									</button>

									<div>
										<input
											type="text"
											name="post"
											id="post"
											className="bg-transparent text-xs border-none w-full focus:border-none ring-0 p-0 focus:ring-0 active:ring-0"
											required
											placeholder="Add to thread"
										></input>
									</div>
								</div>
								<button
									type="button"
									className=" mt-0 right-2.5 text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
									data-modal-hide="create-post-modal"
								>
									<FiX className="w-4 h-4 text-[#777]" />
									<span className="sr-only">Close modal</span>
								</button>
							</div>
						</div>

						{/* Footer */}
						<div className="flex justify-between items-center px-4 bottom-0 right-0 left-0 fixed pb-3">
							<div className="text-xs text-[#666]">
								<p>Anyone can reply</p>
							</div>
							<button
								type="submit"
								className="text-left col-span-1 rounded-lg inline-flex justify-center items-center text-blue-400 text-sm font-medium"
								data-modal-hide="create-post-modal"
							>
								Post
								<span className="sr-only">Post</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Create;
