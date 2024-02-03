import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }], [{ 'indent': '-1' }, { 'indent': '+1' }], ,
            ['link', 'image'],
            ['clean']
        ]
    };

    return (
        <div className="create-post">
            <h1>Create a new post</h1>
            <form>

                <input type="title" placeholder="Title" />
                <input type="summary" placeholder='summary' ></input>
                <input type="file" />
                <ReactQuill value={content} modules={modules} />
                <button type="submit" style={{ marginTop: '5px' }}>Create Post</button>
            </form>
        </div>
    );
}