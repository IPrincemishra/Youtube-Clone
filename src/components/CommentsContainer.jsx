import React from 'react';
import Comment from './Comment';

const commentsData = [
    {
        name: "Badnaam",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Badnaam",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies: []
            },
            {
                name: "Badnaam",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Badnaam",
                        text: "lorem ipsum dolor sit amet, consectetur adip",
                        replies: []
                    },
                ]
            },
            {
                name: "Badnaam",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Badnaam",
                        text: "lorem ipsum dolor sit amet, consectetur adip",
                        replies: []
                    },
                    {
                        name: "Badnaam",
                        text: "lorem ipsum dolor sit amet, consectetur adip",
                        replies: []
                    },
                ]
            },
        ]
    },
    {
        name: "Badnaam",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Badnaam",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies: []
            },
        ]
    },
    {
        name: "Badnaam",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: []
    },
    {
        name: "Badnaam",
        text: "lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Badnaam",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies: []
            },
            {
                name: "Badnaam",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Badnaam",
                        text: "lorem ipsum dolor sit amet, consectetur adip",
                        replies: []
                    }, {
                        name: "Badnaam",
                        text: "lorem ipsum dolor sit amet, consectetur adip",
                        replies: []
                    },
                ]
            },
            {
                name: "Badnaam",
                text: "lorem ipsum dolor sit amet, consectetur adip",
                replies: []
            },
        ]
    },
];

const CommentsList = ({ commentsData }) => {
    return commentsData.map((comment, idx) => (
        <div key={idx}>
            <Comment data={comment} />
            {comment.replies && comment.replies.length > 0 && (
                <div className='w-[95%] ml-[5%] border-l-2 border-black/50'>
                    <CommentsList commentsData={comment.replies} />
                </div>
            )}
        </div>
    ));
}

const CommentsContainer = () => {
    return (
        <div>
            <h1 className='font-bold text-xl'>Comments :</h1>
            <CommentsList commentsData={commentsData} />
        </div>
    );
};

export default CommentsContainer;
