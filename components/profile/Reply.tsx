import Image from 'next/image';

interface ReplyType {
	avatar: any;
	username: string;
	isVerified?: boolean;
	isRepliedTo?: boolean;
	postContent: string;
	publishTime: string;
	mentions?: string;
	isLiked?: boolean;
	isReposted?: boolean;
	repostedBy?: string;
	pictures?: any;
	totalPostReplies?: string;
	totalPostLikes?: string;
	totalReplyReplies?: string;
	totalReplyLikes?: string;
}

const Reply = ({
	avatar,
	username,
	isVerified,
	isRepliedTo,
	postContent,
	publishTime,
	mentions,
	isLiked,
	isReposted,
	repostedBy,
	pictures,
	totalPostReplies,
	totalPostLikes,
	totalReplyReplies,
	totalReplyLikes,
}: ReplyType) => {
	return <div>Reply</div>;
};

export default Reply;
