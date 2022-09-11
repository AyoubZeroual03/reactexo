import { useNavigate } from "react-router-dom";
import { HomeLayout } from "../../components/layouts/home";
import { posts } from "../../data";
const PostsPage = () => {
  const navigate = useNavigate();
  return (
    <HomeLayout>
      <h1>Posts list</h1>
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.id} className="card">
              <div className="card-body">
                <h3 className="card-title">{post.title}</h3>
                <p className="card-text">{post.body}</p>
                <button onClick={() => navigate(`/posts/${post.id}`)}>
                  read more
                </button>
              </div>
            </div>
          );
        })}
    </HomeLayout>
  );
};

export default PostsPage;
