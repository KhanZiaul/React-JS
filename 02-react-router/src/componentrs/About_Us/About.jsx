import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>About Us</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio magnam autem soluta vitae ut expedita iure maxime voluptatibus tenetur, in quae provident molestias reprehenderit explicabo quasi! Harum natus veniam amet cum velit quae autem repellendus eligendi, facere iure numquam, omnis delectus! Inventore incidunt soluta voluptate earum quam nihil cumque maxime est similique excepturi sit nobis dolore cupiditate rem, dolores nemo modi nisi sed eos laudantium tempora quos a! Delectus voluptatem eveniet eius corrupti ducimus libero repudiandae hic ea fuga sed.</p>
            <button onClick={() => navigate('/')}>Go to Home-page</button>
        </div>
    );
};

export default About;