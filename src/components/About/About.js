import React from "react";

import "./About.css";
import Heading from "../Home/Heading";

const About = () => {
  return (
    <div className="about">
      <Heading />
      <div className="container mt-4">
        <h1 className="text-center mb-4">About</h1>
        <div className="row align-items-center">
          <div className="col-md-4 mb-4">
            <img
              src="https://cdn.pixabay.com/photo/2023/09/14/21/01/ai-generated-8253741_1280.png"
              alt="MusicImage"
              className="w-50 h-50"
            />
          </div>
          <div className="col-md-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste itaque
              culpa natus quia dolores debitis consectetur id sequi nam doloremque
              autem similique, impedit in accusamus excepturi at facilis praesentium
              laboriosam! Qui voluptatibus reprehenderit perferendis nostrum eos
              eius sed! Corporis a totam veniam adipisci. Dolorem, vitae
              repudiandae! Inventore omnis, eius eos, voluptates totam dicta nobis
              ab harum eligendi mollitia minus ipsum? Aperiam earum voluptatum
              commodi ratione at dicta necessitatibus delectus, corrupti iste
              provident impedit odit vel et, neque eius perferendis praesentium nemo
              similique ea fugiat. Aliquid et dolorum tempora cupiditate numquam.
              Necessitatibus maxime ipsa quibusdam asperiores porro corporis dicta
              reiciendis nesciunt consequatur, ullam illum officia? Iste itaque
              numquam impedit possimus. Possimus autem libero voluptatum nam
              praesentium iure recusandae voluptatibus itaque delectus. Eum autem
              delectus, nisi tenetur rem eligendi praesentium quidem non
              voluptatibus optio aperiam earum iste nulla itaque nobis quia magnam
              dignissimos dicta? Consequuntur, esse quam obcaecati sapiente aut eum
              fugit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
