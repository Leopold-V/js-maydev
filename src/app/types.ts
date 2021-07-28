export type userType = {
  userId: string;
  username: string;
  email: string;
  avatar: string;
  bio: string;
  location: string;
  website_url: string;
  dev_profile: string;
  score: number;
  tags: string[];
};

export type questionType = {
  id: string;
  title: string;
  authorId: string;
  content: string;
  date: string;
  edit_date: string;
  tags: string[];
  reading: string[];
  likes: string[];
  isSolved: boolean;
};

export type commentType = {
  id: string;
  authorId: string;
  questionId: string;
  content: string;
  date: string;
  likes: string[];
  isReply: boolean;
  ancester: string;
  isSolution: boolean;
};
