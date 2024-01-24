import Logo from '../logo.png'

export default function Post() {
    return (
        <div className="post">
            <div className="image">
                <img src={Logo} />
            </div>
            <div className="texts">
                <h2>This is the Title for the post</h2>
                <p className='info'>
                    <a className='author'>Josh Endemann</a>
                    <time>1-23-23 19:45</time>
                </p>
                <p className='summary'>This is the content of a post</p>
            </div>
        </div>

    )
}