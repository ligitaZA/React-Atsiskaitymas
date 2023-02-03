
const Post = ({ data }) => {

  return (
    <div className="newPost">
      <div>
        <img src="https://cdn-icons-png.flaticon.com/512/616/616660.png" alt="lightning" />
        <h1>{data.title}</h1>
      </div>
      <p>{data.description}</p>
    </div>
  );
}
export default Post;