import React from 'react';

const Blogs = () => {
    return (
        <div className='container '>
            <div className="context_api text-center mt-5">
            <h2>What is the Perpus of Context API ?</h2>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>

            <h2 className='Semantic_tag text-center mt-5' >About of Semantic tags... </h2>
            <p>Semantic tags clearly define the purpose of the HTML element. It also describes the type of content that the element should contain.

           For example, header, footer, article, are considered semantic elements as they clearly describe their purpose and the type of content they should enclose.</p>
        </div>
    );
};

export default Blogs;