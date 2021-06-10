import React from 'react'

export const QuestionEditPage = (props: any) => {
    const questionId = props.match.params.id;

    return (
        <div>
            Cool {questionId}
        </div>
    )
}
