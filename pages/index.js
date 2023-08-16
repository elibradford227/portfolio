/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        margin: '0 auto',
      }}
    >
      <section className="intro">
        <div className="mainContent">
          <div className="mainText">
            <h1>Front-End Developer</h1>
            <p>Hi, I&apos;m Eli Bradford. A front-end developer from Nashville, Tennessee.</p>
          </div>
          <img id="mainImg" src="https://i.natgeofe.com/n/56ad4f59-e256-42b1-bf7c-d04193068703/horse_thumb_4x3.jpg" />
        </div>
      </section>
    </div>
  );
}

export default Home;
