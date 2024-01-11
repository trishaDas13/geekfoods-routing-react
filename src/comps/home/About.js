import "./About.css";
import aboutImg from "../../assets/about.avif";
import profileImg from "../../assets/profile.avif";

function About() {
  return (
    <section className="about">
      <div className="card">
        <img src={aboutImg} alt="" />
        <div className="card-content">
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            debitis.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            molestiae! Quidem est esse numquam odio deleniti, beatae, magni
            dolores provident quaerat totam eos, aperiam architecto eius quis
            quibusdam fugiat dicta.
          </p>
          <button>Get in Touch</button>
        </div>
      </div>
      <div className="cardReview">
        <ReviewCard para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis." />
        <ReviewCard para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores." />
        <ReviewCard para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt." />
        <ReviewCard para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum." />
        <ReviewCard para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!" />
        <ReviewCard para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima." />
      </div>
    </section>
  );
}

function ReviewCard(props) {
  return (
    <div className="reviewCard">
      <p className="review">
        {props.para}
      </p>
      <div className="profile">
        <div className="image">
          <img src={profileImg} alt="" />
        </div>
        <div className="profileOwner">
          <p className="name">Gladis Lennon</p>
          <p className="profesion">Head of SEO</p>
        </div>
      </div>
    </div>
  );
}

export default About;
