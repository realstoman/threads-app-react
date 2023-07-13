'use client';
import Image from 'next/image';
import Logo from '../public/logo/logo.svg';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-10">
			<header className="">
				<Image src={Logo} width={100} height={100} alt="Logo" />

				<div className="main-content">
					{/* Single Post */}
					<div className="post">
						<div className="users">
							<div className="author">
								<img
									src="./public/avatars/zuck-avatar.jpg"
									alt="Author"
								/>
							</div>
							<div className="others">
								<img
									src="./public/avatars/stoman-avatar.jpg"
									alt="User 1"
									width="16"
								/>
								<img
									src="./public/avatars/avatar-1.jpeg"
									alt="User 1"
									width="13"
								/>
								<img
									src="./public/avatars/avatar-4.jpg"
									alt="User 1"
									width="12"
								/>
							</div>
						</div>
						<div className="contents">
							<div className="top">
								<div className="if-verified">
									<p>zuck</p>
									<img
										src="./public/avatars/blue-checkmark.png"
										alt=""
									/>
								</div>
								<div className="timeAndShare">
									<span>10m</span>
									<a href="#">
										<i data-feather="more-horizontal"></i>
									</a>
								</div>
							</div>

							<div className="bottom">
								<div className="content">
									<p>
										70 million sign ups on Threads as of
										this morning. Way beyond our
										expectations.
									</p>
								</div>

								<div className="cta">
									<a href="#">
										<i
											data-feather="heart"
											className="filled"
										></i>
									</a>
									<a href="#">
										<i
											data-feather="message-circle"
											className="rotateComment"
										></i>
									</a>
									<a href="#">
										<i
											data-feather="repeat"
											className="rotateRepost"
										></i>
									</a>
									<a href="#">
										<i data-feather="navigation"></i>
									</a>
								</div>
								<div className="counts">
									<div className="reply">
										<p>18,257 replies</p>
									</div>
									<div className="dot">
										<span>.</span>
									</div>
									<div className="likes">
										<p>104,352 likes</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</main>
	);
}
