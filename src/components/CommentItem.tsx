import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { commentType, userType } from '../app/types'
import userServices from '../services/user.services';
import { MarkdownWrapper } from './MarkdownWrapper';

export const CommentItem = ({comment}: {comment: commentType}) => {
    const [user, setUser] = useState<userType | null>(null);

    const loadAuthor = async (id: string) => {
      const user: userType | any = await userServices.getOneUser(id);
      setUser(user);
    };
  
    useEffect(() => {
      loadAuthor(comment.authorId);
    }, [comment.authorId]);

    if (!user) return <li className="card min-h-40"></li>;
    return (
        <li className="flex items-start space-x-2">
            <Link to={`/profile/${user.userId}`} className="w-8">
                <img
                className="rounded-full"
                alt="profile_picture"
                src={user.avatar || 'https://randomuser.me/portraits/men/52.jpg'}
                />
            </Link>
            <div className="border border-gray-600 rounded py-2 px-4 bg-gray w-11/12">
                <div className="flex items-center text-muted space-x-2">
                    <Link to={`/profile/${user.userId}`} className="hover:text-blue transition duration-200">{user.username}</Link>
                    <span>&bull;</span>
                    <span className="text-sm">{comment.date}</span>
                </div>
                <div className="my-2">
                    <MarkdownWrapper content={comment.content} />
                </div>
            </div>
        </li>
    )
}
