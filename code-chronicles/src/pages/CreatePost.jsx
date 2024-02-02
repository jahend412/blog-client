import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
    return (
        <div className="create-post">
            <h1>Create a new post</h1>
            <form>
                <label htmlFor="title">Title</label>
                <input type="title" placeholder="Title" />
                <label htmlFor="content">Content</label>
                <textarea id="content"></textarea>
                <label htmlFor="image">Image</label>
                <input type="file" id="image" />
                <ReactQuill />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}