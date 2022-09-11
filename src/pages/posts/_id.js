import { useParams } from "react-router-dom";
import { posts } from "../../data";
const PostDetailsPage = () => {
  const params = useParams();

  let dt = posts.filter((post) => post.id === parseInt(params.id));

  console.log(params);
  return (
    <>
      <h1> post with id equals to {params.id}</h1>
      <h3>{dt && dt[0].title}</h3>
      <p>{dt && dt[0].body}</p>
    </>
  );
};

export default PostDetailsPage;
