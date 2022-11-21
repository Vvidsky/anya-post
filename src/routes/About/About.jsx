import "./About.styles.css";
import anya_profile from "../../assets/anya_profile.png";
import bond_profile from "../../assets/bond_profile.png";
import loid_profile from "../../assets/loid_profile.png";
import github_logo from "../../assets/github.svg";

export default function About() {
  return (
    <div class="container">
      <div className="header">
        <h2 class="fw-light text-white">Meet the Team</h2>
      </div>
      <div class="row">
        {/* Team Member 1 */}
        <div class="col-xl-2 col-md-6 mb-4">
          <div class="card border-0 shadow-sm p-3 mb-5 bg-white rounded">
            <img
              class="card-img-top"
              width="100%"
              src={anya_profile}
              alt="member-1"
            />
            <div class="card-body text-center">
              <h5 class="card-title mb-0">Kulawut<br/>Makkamoltham</h5>
              <div class="card-text-des">Web Developer</div>
            </div>
            <div className="contact-me">
              {/*Contact */}
              <p className="github-tag border-top">
                <a
                  className="github-name"
                  href="https://github.com/Vvidsky"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                  className="github-logo"
                  src={github_logo}
                  alt="github-logo"
                  />
                  Vvidsky
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Team Member 2 */}
        <div class="col-xl-2 col-md-6 mb-4">
          <div class="card border-0 shadow-sm p-3 mb-5 bg-white rounded">
            <img
              class="card-img-top"
              width="100%"
              src={bond_profile}
              alt="member-2"
            />
            <div class="card-body text-center">
              <h5 class="card-title mb-0">Ariya<br/>Phengphon</h5>
              <div class="card-text-des">Web Developer</div>
            </div>
            <div className="contact-me">
              {/*Contact */}
              <p className="github-tag border-top">
                <a
                  className="github-name"
                  href="https://github.com/ChanAndKlee"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                  className="github-logo"
                  src={github_logo}
                  alt="github-logo"
                  />
                  ChanAndKlee
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Team Member 3 */}
        <div class="col-xl-2 col-md-6 mb-4">
          <div class="card border-0 shadow-sm p-3 mb-5 bg-white rounded">
            <img
              class="card-img-top"
              width="100%"
              src={loid_profile}
              alt="member-3"
            />
            <div class="card-body text-center">
              <h5 class="card-title mb-0">Patiphan<br/>Chan</h5>
              <div class="card-text-des">Web Developer</div>
            </div>
            <div className="contact-me">
              {/*Contact */}
              <p className="github-tag border-top">
                <a
                  className="github-name"
                  href="https://github.com/ST-AR-X"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                  className="github-logo"
                  src={github_logo}
                  alt="github-logo"
                  />
                  ST-AR-X
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
