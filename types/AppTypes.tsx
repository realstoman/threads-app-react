// Post Types
export interface PostType {
	avatar: any;
	username: string;
	isVerified?: boolean;
	postContent: string;
	publishTime: string;
	mentions?: string;
	isLiked?: boolean;
	isReposted?: boolean;
	repostedBy?: string;
	carousel?: [] & any;
	totalReplies?: string;
	totalLikes?: string;
}

// Reply Types
export interface ReplyType {
	avatar: any;
	username: string;
	isVerified?: boolean;
	isAuthorVerified?: boolean;
	isRepliedTo?: boolean;
	postContent: string;
	publishTime: string;
	mentions?: string;
	isLiked?: boolean;
	replyContent: any;
	repostedBy?: string;
	pictures?: any;
	totalPostReplies?: string;
	totalPostLikes?: string;
	totalReplyReplies?: string;
	totalReplyLikes?: string;
	repliedByMutual?: any;
}

// User Account Types
export interface AccountType {
	avatar: any;
	username: string;
	fullName: string;
	isVerified?: boolean;
	followedBy?: any;
	followedByAnother?: any;
	followersCount: string;
}

// Suggested Accounts Types
export interface SuggestedAccountType {
	avatar: any;
	username: string;
	isVerified: boolean;
	fullName: string;
}

// Activity Types
export interface ActivityType {
	avatar: any;
	activityType: string;
	username: string;
	isVerified?: boolean;
	activityTime: string;
	activityContent: string;
	userReply?: string;
}
