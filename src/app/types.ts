export type userType = {
  userId: string;
  username: string;
  email: string;
  avatar: string;
  bio: string;
  reading: string[];
};

export type questionType = {
  id: string;
  title: string;
  authorId: string;
  content: string;
  date: string;
  tags: string[];
};
