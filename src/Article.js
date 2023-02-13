import { useState } from "react";
import BlogList from "./BlogList";

const Article = () => {
    const [blogs, setBlogs] = useState([
        {Title: "The Rain of Ajebo", body:"loreminianjd weninw...",  author: 'bryan', id: 0},
        {Title: "Sapa Days of Garri", body:"loreminianjd weninw...", author: 'Adele', id: 1},
        {Title: "Garri the Savior",body:"loreminianjd weninw...", author: 'Kanye', id: 2},
]);

    return ( 
        <div className="Article">
           {blogs.map((blog) => (
            <div className="blog-preview" key ={blog.id}>
                <h1>{blog.Title}</h1>
                <h4>{blog.body}</h4>
                <h5>Written By:{blog.author}</h5>
            </div>
           ))}
        </div>
     );
}
 
export default Article;