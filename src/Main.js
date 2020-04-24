import React, { Component } from 'react';
import './css/bootstrap.css';
import Lesson from './Lesson';
class Main extends Component{
    render(){
        const lessonList = [
            {
              name: 'HTML & CSS',
              image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg',
              introduction: "How a website looks is created using languages such as HTML and CSS. Let's study these languages while actually creating a website!",
            },
            {
              name: 'Sass',
              image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg',
              introduction: 'Sass is a language for making CSS more convenient and efficient.',
            },
            {
              name: 'JavaScript',
              image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg',
              introduction: 'JavaScript is a versatile language used anywhere from interactive websites to backend servers.',
            },
            {
              name: 'React',
              image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg',
              introduction: 'React is a JavaScript library used to make the appearance of a website like HTML.',
            },
          ];
        return(
            <div className="main-wrapper">
                <div className="main">
                    <div className="headercont container">
                        <h1 className="display-4 text-success">Hi there</h1>
                        <p>Welcome to another programming fun tutorial</p>
                    </div>
                    <div className="lesson container">
                        <h3 className="section-titles">Lessons</h3>
                        {lessonList.map((lessonItem) => {
                            return(
                                <Lesson
                                name={lessonItem.name}
                                image={lessonItem.image}
                                introduction={lessonItem.introduction}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;