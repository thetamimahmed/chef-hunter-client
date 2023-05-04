import React from 'react';

const Blog = () => {
    return (
        <div>
            <article className='container my-5'>
                <h3>Q. Tell us the differences between uncontrolled and controlled components.</h3>
                <p className='fs-5'>
                    When you use form in react.  We can use either control component or uncontrolled component.
                    In uncontrolled component you can get the value of input field by accessing their reference.
                    In controlled component you can store value in react state rather than usimg input reference.
                </p>
            </article>
            <article className='container my-5'>
                <h3>Q. How to validate React props using PropTypes</h3>
                <p className='fs-5'>
                    React PropTypes is a way to catching bugs by validating data types when you pass props one component to another component.
                    We can install PropTypes by : npm install prop-types.
                    For validate props use Component.Proptypes and props.dataName.PropTypes.data-types,
                    So that you can get exact data-types in your props. If the datatypes not matched then it shows error in console.
                </p>
            </article>
            <article className='container my-5'>
                <h3>Q. Tell us the difference between nodejs and express js.</h3>
                <p className='fs-5'>
                    NodeJs is the javascript package, which is a free, cross-platform runtime environment and library for running web applications outside the client’s browser.
                    <br />
                    ExpresaJs is a NodeJs framework,  it designed to build web application and api
                </p>
            </article>
            <article className='container my-5'>
                <h3>Q. What is a custom hook, and why will you create a custom hook?</h3>
                <p className='fs-5'>
                    Hooks are reusable function. We can add our own functionality hook by custom hook. We should start name of custom hook 'use'. We use custom hook when need to add same logic in multiple components, we can share same logic multiple components using custom hook.
                </p>
            </article>
            <div className='text-center'>
                <button className='btn btn-primary custom-btn'>Download Pdf</button>
            </div>
        </div>
    );
};

export default Blog;