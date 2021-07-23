import Layout from "../components/Layout";
import Link from 'next/link';
import { skills, experiences, projects } from "../profile";

const Index = () => (
  <Layout>
    {/** Header */}
    <header className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body bg-dark text-light">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="ryan-ray-profile2.jpeg"
                  alt="Ryan Ray"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <h1 className="text-light">Ryan Ray</h1>
                <h3 className="text-light">Fullstack Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis libero exercitationem recusandae possimus
                  explicabo tempora voluptate. Incidunt voluptatibus tempora,
                  modi vel assumenda, maiores, dolor esse doloremque atque in
                  consequatur minima.
                </p>
                <button className="btn btn-primary">
                  <a href="/hireme" className="text-light">
                    Hire Me
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/** Second section */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>

            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>
            <ul>
              {experiences.map(({ title, description, from, to }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from}-{to}
                  </h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>

            <Link href="/experiences">
              <button className="btn btn-secondary">
                <a className="text-primary">Know more</a>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/** Portfolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body bg-primary">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light">Portfolio</h1>
              </div>

              {projects.map(({ name, description, img }, i) => (
                <div className="col-md-4 p-2" key={i}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img
                        src={`/${img}`}
                        alt="Portfolio 1"
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href="#" className="btn btn-secondary text-primary">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <Link href="/portfolio">
                <a className="btn btn-outline-light text-text-dark">
                  More Projects
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
