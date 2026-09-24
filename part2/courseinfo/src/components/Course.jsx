import React from 'react';
import Header from './Header';
import Content from "./Content.jsx";

const Course = ({ course }) => {
    return (
        <div key={course.id}>
            <Header text={course.name} />
            <Content parts={course.parts} />
        </div>
    );
}

export default Course;