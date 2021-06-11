import React from 'react'
import { commentType } from '../app/types'
import { CommentItem } from './CommentItem'

export const CommentList = ({comments} : {comments: commentType[] }) => {
    return (
        <div className="space-y-6">
            {comments.map((comment: commentType) => <CommentItem key={comment.id} comment={comment} />)}
        </div>
    )
}
