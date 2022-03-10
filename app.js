import axios from "axios";

export default async function getData(id) {
  const { data: getUser } = await axios(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const { data: getPost } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  return {
    user: getUser,
    posts: getPost
  };
}
