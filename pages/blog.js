import Link from "next/link";
import Layout from "../components/Layout";
import { posts } from "../profile";

const PostCard = ({ post }) => (
  <div className="col-md-4">
    <div className="card bg-dark">
      <div className="overflow">
        <img src={post.imageURL} className="card-img-top" />
      </div>
      <div className="card-body">
        <h1 className="text-light">{post.title}</h1>
        <p className="text-light">{post.content}</p>
        <Link href={`/post?title=${post.title}`}>
          <button className="btn btn-outline-info text-light">Read</button>
        </Link>
      </div>
    </div>
  </div>
);

const Blog = () => (
  <Layout footer={false} dark title="My Blog">
    <div className="row">
      {
        posts.map((post, i) => (
          <PostCard post={post} key={i}/>
        ))
      }
    </div>
  </Layout>
);

export default Blog;
