-- Active: 1747486928827@@127.0.0.1@5432@ph@public


-- Learning Inner Join
SELECT * FROM post as p
  JOIN users as u on p.user_id = u.id;



-- Learning Left Join
SELECT * FROM post as p
  LEFT JOIN users as u on p.user_id = u.id;




-- Learning Right Join
SELECT * FROM post
  RIGHT JOIN users on post.user_id = users.id;


-- Learning Full Join
SELECT * FROM post
  FULL JOIN users on post.user_id = users.id;
