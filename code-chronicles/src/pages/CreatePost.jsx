import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }], [{ 'indent': '-1' }, { 'indent': '+1' }], ,
        ['link', 'image'],
        ['clean']
    ]
};
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');

    return (
        <div className="create-post">
            <h1>Create a new post</h1>
            <form>

                <input type="title"
                    placeholder="Title"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    type="summary"
                    placeholder='summary'
                    value={summary}
                    onChange={event => setSummary(event.target.value)}
                />
                <input type="file"

                />
                <ReactQuill
                    value={content}
                    onChange={newContent => setContent(newContent)}
                    odules={modules}
                    formats={formats} />
                <button type="submit" style={{ marginTop: '5px' }}>Create Post</button>
            </form>
        </div>
    );
}