import DefaultPfp from "../assets/default.png";
import ElderBond from "../assets/ElderBondLogo.png";

export default function LandingPage() {
  return (
    <>
      <main className="main-page">
        <section className="top">
          <div className="group">
            <div className="currently-showing true">For you</div>
            <div className="currently-showing">Following</div>
          </div>
          <hr />
        </section>

        <div className="story-container">
          <div className="content">
            <img src={DefaultPfp} alt="" />
          </div>
          <div className="content">
            <img src={DefaultPfp} alt="" />
          </div>
          <div className="content">
            <img src={DefaultPfp} alt="" />
          </div>
          <div className="content">
            <img src={DefaultPfp} alt="" />
          </div>
          <div className="content">
            <img src={DefaultPfp} alt="" />
          </div>
          <div className="content">
            <img src={DefaultPfp} alt="" />
          </div>
          <div className="content">
            <img src={DefaultPfp} alt="" />
          </div>
          <div className="content">
            <img src={DefaultPfp} alt="" />
          </div>
        </div>

        <section className="story-full hidden">
          <div className="content">
            <div className="close-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#fff" //color
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>

            <div className="left-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#fff"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </div>

            <img src={ElderBond} alt="" />

            <div className="right-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#fff"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>

            <div className="title">Test title</div>
          </div>
        </section>

        <section className="feed">
          <div className="top-feed">
            <hr />
            <img src="profile" />
            <p>name</p>
            <p>*</p>
            <p>2d</p>
          </div>

          <div className="main-feed">
            <img src="image" />
          </div>

          <div className="bottom-feed">
            <div className="buttons">
              <div className="buttons-left">
                <button>
                  <img src="" alt="" />
                </button>
                <button>
                  <img src="" alt="" />
                </button>
                <button>
                  <img src="" alt="" />
                </button>
              </div>
              <div className="buttons-right">
                <button>
                  <img src="" alt="" />
                </button>
              </div>
            </div>
            <div className="feed-info">
              <p>65 likes</p>
              <p>
                description: Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Modi recusandae sint soluta hic tempora accusantium
                obcaecati, fuga, possimus cumque laboriosam error repudiandae
                corporis ducimus dicta voluptate aspernatur magni vitae nisi?
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
