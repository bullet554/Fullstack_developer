import React, { useState } from 'react';

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const deleteBtn = (id) => {
        const updateList = comments.filter((comment) => comment.id !== id);
        setComments(updateList);
    }

    return (
        <div>
            <ul>
                {comments.map((item) => (
                    <>
                        <li key={item.id}>{item.text}</li>
                        <button onClick={() => deleteBtn(item.id)}>Удалить</button>
                    </>
                ))}
            </ul>
        </div>
    );
}

export default CommentsList;