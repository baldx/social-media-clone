import { useState } from "react";
import DefaultPfp from "../assets/default.png";
import ElderBond from "../assets/ElderBondLogo.png";
import PostFooter from "./PostButton";


export default function LandingPage() {

  const [storyStatus, setStoryStatus] = useState('hidden') //current status of the story

  const openStory = () => { //adds class to show story
    setStoryStatus('active');
  }

  const closeStory = () => { //adds class to hide story
    setStoryStatus('hidden');
  }

  const allStories = [ //displays all stories
    {
      thumbURL: DefaultPfp,
      imageURL: ElderBond,
      title: "Sigma1"
    },
    {
      thumbURL: DefaultPfp,
      imageURL: ElderBond,
      title: "Sigma2"
    },
    {
      thumbURL: DefaultPfp,
      imageURL: ElderBond,
      title: "Sigma3"
    },
    {
      thumbURL: DefaultPfp,
      imageURL: ElderBond,
      title: "Sigma4"
    },
    {
      thumbURL: DefaultPfp,
      imageURL: ElderBond,
      title: "Sigma5"
    },
  ]

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

        <div className="story-container"> {/* display stories */}
          {allStories.map(e => {
            return (
            <div className="content" onClick={openStory}>
              <img src={e.thumbURL}/>
            </div>
          )})}
        </div>

        <section className={"story-full " + storyStatus}> {/* display the story image*/}
          <div className="content">
            <div className="close-btn" onClick={closeStory}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#fff" //color
                className="size-6"
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
                className="size-6"
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
                className="size-6"
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

        <section className="feed"> {/* creates a post in the main page */}
          <hr />
          <div className="top-feed">
            <img src={DefaultPfp} className="post-pfp"/>
            <p>Name</p>
            <p>•</p>
            <p>2 timmar</p>
          </div>

          <img src={DefaultPfp} className="main-feed" />

          <div className="bottom-feed"> {/* adds the bottom part of the feed allowing the user to interact */}
            <div className="buttons">
              <div className="buttons-left">
                <i className="material-icons">favorite</i>
                <i className="material-icons">comment</i>
              </div>
              <div className="buttons-right">
                <i className="material-icons">bookmark</i>
              </div>
            </div>
            <div className="feed-info">
              <div className="likes">65 likes</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Modi recusandae sint soluta hic tempora accusantium
                obcaecati, fuga, possimus cumque laboriosam error repudiandae
                corporis ducimus dicta voluptate aspernatur magni vitae nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?
              </div>
            </div>
          </div>
        </section>
        <section className="feed">
          <hr />
          <div className="top-feed">
            <img src={DefaultPfp} className="post-pfp"/>
            <p>Name</p>
            <p>•</p>
            <p>2 timmar</p>
          </div>

          <img src={DefaultPfp} className="main-feed" />

          <div className="bottom-feed">
            <div className="buttons">
              <div className="buttons-left">
                <i className="material-icons">favorite</i>
                <i className="material-icons">comment</i>
              </div>
              <div className="buttons-right">
                <i className="material-icons">bookmark</i>
              </div>
            </div>
            <div className="feed-info">
              <div className="likes">65 likes</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Modi recusandae sint soluta hic tempora accusantium
                obcaecati, fuga, possimus cumque laboriosam error repudiandae
                corporis ducimus dicta voluptate aspernatur magni vitae nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?
              </div>
            </div>
          </div>
        </section>
        <section className="feed">
          <hr />
          <div className="top-feed">
            <img src={DefaultPfp} className="post-pfp"/>
            <p>Name</p>
            <p>•</p>
            <p>2 timmar</p>
          </div>

          <img src={DefaultPfp} className="main-feed" />

          <div className="bottom-feed">
            <div className="buttons">
              <div className="buttons-left">
                <i className="material-icons">favorite</i>
                <i className="material-icons">comment</i>
              </div>
              <div className="buttons-right">
                <i className="material-icons">bookmark</i>
              </div>
            </div>
            <div className="feed-info">
              <div className="likes">65 likes</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Modi recusandae sint soluta hic tempora accusantium
                obcaecati, fuga, possimus cumque laboriosam error repudiandae
                corporis ducimus dicta voluptate aspernatur magni vitae nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?
              </div>
            </div>
          </div>
        </section>
        <section className="feed">
          <hr />
          <div className="top-feed">
            <img src={DefaultPfp} className="post-pfp"/>
            <p>Name</p>
            <p>•</p>
            <p>2 timmar</p>
          </div>

          <img src={DefaultPfp} className="main-feed" />

          <div className="bottom-feed">
            <div className="buttons">
              <div className="buttons-left">
                <i class="material-icons">favorite</i>
                <i class="material-icons">comment</i>
              </div>
              <div className="buttons-right">
                <i className="material-icons">bookmark</i>
              </div>
            </div>
            <div className="feed-info">
              <div className="likes">65 likes</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Modi recusandae sint soluta hic tempora accusantium
                obcaecati, fuga, possimus cumque laboriosam error repudiandae
                corporis ducimus dicta voluptate aspernatur magni vitae nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?nisi?
              </div>
            </div>
          </div>
        </section>
        <PostFooter/>
      </main>
    </>
  );
}
