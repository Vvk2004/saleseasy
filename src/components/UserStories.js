import React from 'react';
import '../assets/style/userStories.scss';
import guillermo from '../assets/images/guillermo.jpeg.png';
import zeno from '../assets/images/zeno.jpeg.png';
import chun from '../assets/images/chun.jpeg.png';
import vlad from '../assets/images/vlad.jpeg.png';
import adam from '../assets/images/adam.jpeg.png';
import charly from '../assets/images/charly.jpeg.png';
import maayan from '../assets/images/maayan.jpeg.png';
import ashley from '../assets/images/ashley.jpeg.png';
import mark from '../assets/images/mark.png.png';

const userStoriesData1 = [
    {
        name: 'Guillermo Rauch',
        title: 'CEO, Vercel',
        image: guillermo,
        feedback: 'The @mintlify team absolutely nailed combining docs search and AI Q&A in a delightful experience.',
    },
    {
        name: 'Vlad Matsiiako',
        title: 'Co-founder, Infisical',
        image: vlad,
        feedback: 'Mintlify is absolutely amazing! Their team has been such a pleasure to work with, and just look at our docs - they look gorgeous! I definitely think everyone should try Mintlify out!',
    },
    {
        name: 'Maayan Salom',
        title: 'Co-founder, Elementary',
        image: maayan,
        feedback: 'Mintlify is amazing for us! Even as a small team we struggled to keep up with dev and update the docs on changes. Now the docs are managed as code and are part of the dev process and PR. As an open source project - moving the docs to the repo (with zero effort) also enabled our community to help us maintain and fix problems as contributors. Our devs and our users love it.',
    },
];
const userStoriesData2 = [
    {
        name: 'Zeno Rocha',
        title: 'CEO, Resend',
        image: zeno,
        feedback: "This is a must-have if you're building any kind of developer tools. We used other options in the past, which feel outdated in terms of look and feel when compared to Mintlify. The team helped us set up two different websites and even migrated all the content for us. I can't recommend it enough.",

    },
    {
        name: 'Adam Carrigan',
        title: 'Co-founder, MindsDB',
        image: adam,
        feedback: 'My team loves Mintlify! Great product and a super supportive team.',
    },
    {
        name: 'Ashley Mulligan',
        title: 'Head of Product Engineering,Flatfile',
        image: ashley,
        feedback: 'Mintlify was the only option that checked all the boxes. To get the look, feel, and features we wanted for our documentation, it had to be homegrown or Mintlify.',
    },
];
const userStoriesData3 = [
    {
        name: 'Chun Jiang',
        title: 'CEO, Monterey AI',
        image: chun,
        feedback: 'Absolutely the best. It is freaking easy to set up, and the team has been great to work with!',
    },
    {
        name: 'Charly Poly',
        title: 'CEO, Defer',
        image: charly,
        feedback: "Why spend a week coding your own documentation (and optimizing it for SEO, design, etc.) while Mintlify brings you the best in class documentation in a few minutes? Worked on documentation for years, in unicorns and open source and I'm sold!",
    },
    {
        name: 'Mark Bao',
        title: 'Co-founder, Goody',
        image: mark,
        feedback: "The way Mintlify's docs were displayed just felt really user-friendly for us, and more importantly, for our developer customers. I felt like I had finally found a tool that could give us the Stripe- level documentation we wanted.",
    },
];

const UserStories = () => {
    return (
        <div className="mainUserStories">
            <div className="container">
                <div className="UserStories">
                    <div className="heading">
                        <h3>Success Stories from Our Users </h3>
                        <p>Optimized tools to simplify your sales process and enhance productivity.</p>
                    </div>
                    <div className="allDecs">
                        <div className="row1">
                            {userStoriesData1.map((user, index) => (
                                <div className="oneDec" key={index}>
                                    <div className="userInfo">
                                        <div className="userDp">
                                            <img src={user.image} alt={user.name} />
                                        </div>
                                        <div className="userName">
                                            <h6>{user.name}</h6>
                                            <p>{user.title}</p>
                                        </div>
                                    </div>
                                    <div className="userDec">
                                        <p>{user.feedback}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row2">
                            {userStoriesData2.map((user, index) => (
                                <div className="oneDec" key={index}>
                                    <div className="userInfo">
                                        <div className="userDp">
                                            <img src={user.image} alt={user.name} />
                                        </div>
                                        <div className="userName">
                                            <h6>{user.name}</h6>
                                            <p>{user.title}</p>
                                        </div>
                                    </div>
                                    <div className="userDec">
                                        <p>{user.feedback}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row3">
                            {userStoriesData3.map((user, index) => (
                                <div className="oneDec" key={index}>
                                    <div className="userInfo">
                                        <div className="userDp">
                                            <img src={user.image} alt={user.name} />
                                        </div>
                                        <div className="userName">
                                            <h6>{user.name}</h6>
                                            <p>{user.title}</p>
                                        </div>
                                    </div>
                                    <div className="userDec">
                                        <p>{user.feedback}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="btn">
                        <button>
                            Show more
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserStories;
