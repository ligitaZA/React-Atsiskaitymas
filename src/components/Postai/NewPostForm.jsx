import PostContext from "../../context/PostContext";
import UserContext from "../../context/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPostForm = () => {

  const [formInputs, setFormInputs] = useState({
    title: '',
    description: ''
  });

  const { addNewPost } = useContext(PostContext);
  const { loggedInUser } = useContext(UserContext);

  const navigation = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const newPost = {
      title: formInputs.title,
      description: formInputs.description,
      id: Date.now(),
      userId: loggedInUser ? loggedInUser.id : null
    };
    addNewPost(newPost);
    navigation('/');
  }

  return (
    <>
    <div className="newForm">
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title"
            value={formInputs.title}
            onChange={(e) => setFormInputs({...formInputs, title:e.target.value})}
          />
        </label>
        <label>
          Description:
          <textarea className="textarea" type="text" name="description"
            value={formInputs.description}
            onChange={(e) => setFormInputs({...formInputs, description:e.target.value})}
          />
        </label>
        <input type="submit" className="button" value="Create new Post" />
      </form>
    </div>
    </>
  );
}
export default NewPostForm;