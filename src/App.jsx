import { useState } from "react";

function App() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleFeatures = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
    setIsCompanyOpen(false);
  };

  const toggleCompany = () => {
    setIsCompanyOpen(!isCompanyOpen);
    setIsFeaturesOpen(false);
  };
  return (
    <>
      <main>
        <header>
          <nav>
            <img src="/public/logo.svg" className="logo" alt="Snap Logo" />
            <ul>
              <li onClick={toggleFeatures} className="features">
                Features
                <img src="/public/icon-arrow-down.svg" alt="" />
                {isFeaturesOpen && (
                  <div className="drop-down">
                    <ul>
                      <li>
                        <a href="#features">
                          <img src="/public/icon-todo.svg" alt="" />
                          Todo List
                        </a>
                      </li>
                      <li>
                        <a href="#features">
                          <img src="/public/icon-calendar.svg" alt="" />
                          Calendar
                        </a>
                      </li>
                      <li>
                        <a href="#features">
                          <img src="/public/icon-reminders.svg" alt="" />
                          Reminder
                        </a>
                      </li>
                      <li>
                        <a href="#features">
                          <img src="/public/icon-planning.svg" alt="" />
                          Planning
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li onClick={toggleCompany} className="company">
                Company
                <img src="/public/icon-arrow-down.svg" alt="" />
                {isCompanyOpen && (
                  <div className="drop-down">
                    <ul>
                      <li>
                        <a href="#company">History</a>
                      </li>
                      <li>
                        <a href="#company">Team</a>
                      </li>
                      <li>
                        <a href="#company">Blog</a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
            <div>
              <button>Login</button>
              <button>Register</button>
            </div>

            <button onClick={()=> setIsMenuOpen(!isMenuOpen)} className="menu">
              <img src="/public/icon-menu.svg" alt="" />
            </button>
          </nav>

          <div className={` ${isMenuOpen ? "mobile-menu":"mobile-menu-closed"}`}>
            <button onClick={()=> setIsMenuOpen(!isMenuOpen)} className="space-close"></button>

            <div className="side-bar">
              <button onClick={()=> setIsMenuOpen(!isMenuOpen)} className="menu">
                <img src="/public/icon-close-menu.svg" alt="" />
              </button>

              <ul>
                <li onClick={toggleFeatures} className="features">
                  <span>
                    Features
                    <img src="/public/icon-arrow-down.svg" alt="" />
                  </span>
                  {isFeaturesOpen && (
                    <div className="drop-down">
                      <ul>
                        <li>
                          <a href="#features">
                            <img src="/public/icon-todo.svg" alt="" />
                            Todo List
                          </a>
                        </li>
                        <li>
                          <a href="#features">
                            <img src="/public/icon-calendar.svg" alt="" />
                            Calendar
                          </a>
                        </li>
                        <li>
                          <a href="#features">
                            <img src="/public/icon-reminders.svg" alt="" />
                            Reminder
                          </a>
                        </li>
                        <li>
                          <a href="#features">
                            <img src="/public/icon-planning.svg" alt="" />
                            Planning
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li onClick={toggleCompany} className="company">
                  <span>
                    Company
                    <img src="/public/icon-arrow-down.svg" alt="" />
                  </span>
                  {isCompanyOpen && (
                    <div className="drop-down">
                      <ul>
                        <li>
                          <a href="#company">History</a>
                        </li>
                        <li>
                          <a href="#company">Team</a>
                        </li>
                        <li>
                          <a href="#company">Blog</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
              </ul>
              <div className="mobile-btns">
                <button>Login</button>
                <button>Register</button>
              </div>
            </div>
          </div>
        </header>

        <section>
          <div className="left">
            <h1 className="desktop-title">
              Make <br /> remote work
            </h1>
            <h1 className="mobile-title">Make remote work</h1>
            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar
            </p>
            <button>Learn more</button>
            <div>
              <img src="/public/client-audiophile.svg" alt="Audiophile Logo" />
              <img src="/public/client-databiz.svg" alt="Databiz Logo" />
              <img src="/public/client-maker.svg" alt="Maker Logo" />
              <img src="/public/client-meet.svg" alt="Meet Logo" />
            </div>
          </div>

          <div className="right">
            <img
              className="hero-img-desktop"
              src="/public/image-hero-desktop.png"
              alt=""
            />
            <img
              className="hero-img-mobile"
              src="/public/image-hero-mobile.png"
              alt=""
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
