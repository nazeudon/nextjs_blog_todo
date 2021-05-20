export default function Post({ post }) {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      <span className="text-white border-b border-gray-500 cursor-pointer hover:bg-gray-600">
        {post.title}
      </span>
    </div>
  );
}
