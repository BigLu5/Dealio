import React from "react";

export default function About() {
  return (
    <>
      <h1>Meet The Team</h1>
      <div className="video-container">
        <video width="100%" controls>
          <source src="/assets/video/about_us_final.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="about-box" id="andy">
        <h2>Andy</h2>
        <p>
          39 and still not knowing what he wants to do with his life, Andy
          ditched his boring but safe job (as a Probation Officer) and embarked
          (hopefully) on a career in the tech industry.
        </p>
        <br></br>
        <p>
          Born and raised in the gang-ridden suburbs of Rainhill, Andy spent
          most his adult life living in and around Liverpool City Centre, until
          being sucked back into the ghettos of L35.
        </p>
        <br></br>
        <p>
          When he is not busy doing maths, fighting dragons, and refusing to pay
          full price for food, Andy has interests in music, TV geeking,
          travelling, football, and football shirt collecting.
        </p>
      </div>
      <div className="about-box" id="susie">
        <h2>Susie</h2>
        <p>
          A Tech Educators boot camp student from Liverpool and member of SCAL
          (Susie, Cordelia, Andy and Luke). Alongside the course, Susie manages
          an escape room in Liverpool City Centre (You'd think this means that
          she is good at escape rooms. She's ✨not✨).
        </p>
        <br></br>
        <p>
          Susie has absolutely loved working on her final project with this team
          and can't wait to find some good pub discounts on Dealio after the
          course!
        </p>
      </div>
      <div className="about-box" id="luke">
        <h2>Luke</h2>
        <p>
          Luke was born and raised in Liverpool and used to work in healthcare
          but realised he enjoyed building things so decided on a move into
          Tech! His main motivation for a career change is to gain and improve
          on the logical thinking skills that it requires to be in this field.
        </p>
        <br></br>
        <p>
          Luke says that in a world of misinformation, the ability to establish
          a mental framework for addressing questions correctly is very
          important, and thinks programming and logic can help him improve his
          critical thinking and approach to questions.
        </p>
      </div>
      <div className="about-box" id="cordelia">
        <h2>Cordelia</h2>
        <p>
          Cordelia is an aspiring software developer from Stoke-on-Trent. She
          currently lives in Merseyside and is looking forward to starting her
          career in Tech after teaching English abroad for a few years.
        </p>
        <br></br>
        <p>
          In her spare time, she enjoys harassing her dog, playing video games
          and getting sick deals at restaurants around her local area.
        </p>
      </div>
    </>
  );
}
