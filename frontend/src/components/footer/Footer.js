import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer>
        <div className="footer-content">
          <div className="about-us-navigation">
            <nav className="about-us-nav">
              <div className="about-us-title">
                <h5 className="about-us-footer-title">About us</h5>
              </div>
              <div className="about-us-menu">
                <div className="menu">
                  <a href="https://github.com/evanmorrisdev" class="Evan">
                    Evan
                  </a>
                  <br></br>
                  <a href="https://github.com/LRWright" class="Le-Ann">
                    Le-Ann
                  </a>
                  <br></br>
                  <a href="https://github.com/lisarawlings" class="Lisa">
                    Lisa
                  </a>
                  <br></br>
                  <a href="https://github.com/ruarplum" class="Ruaraidh">
                    Ruaraidh
                  </a>
                  <br></br>
                </div>
              </div>
            </nav>
          </div>
          <div className="footer-title">
            <h3>
              in<span>Quiz</span>itive
            </h3>
          </div>
          <div className="resources-navigation">
            <nav className="resources-nav">
              <div className="resource-title">
                <h5>Resources</h5>
              </div>
              <div className="resources-menu">
                <div className="menu">
                  <a
                    href="https://github.com/inQuizitive/inQuizitive"
                    target="_blank"
                  >
                    Code Source
                  </a>
                  <br></br>
                  <a href="/frequently-asked-questions">FAQs</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
