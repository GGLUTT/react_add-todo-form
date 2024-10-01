import React from 'react';

interface TodoInfoProps {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
  userEmail: string;
  userName: string;
}

export const TodoInfo: React.FC<TodoInfoProps> = ({
  id, title, completed, userEmail, userName,
}) => {
  return (
    <article data-id={id} className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">{title}</h2>
      <a className="UserInfo" href={`mailto:${userEmail}`}>
        {userName}
      </a>
    </article>
  );
};
