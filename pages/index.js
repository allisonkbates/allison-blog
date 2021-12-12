import Header from "../components/header";
import Layout from "../components/layout";
import Footer from "../components/footer";

export default function Index() {
  return (
    <div>
    <Header />
    <Layout>
    <section>
      <div className="paragraph-text">
        <h2 className="mg-bottom-1">👋 Hi, I'm Allison.</h2>
        <p className="mg-bottom-1">I'm a currently a <span>senior product manager</span> at theSkimm. I love <span>teaching others</span> about product management, whether they're a designer, engineer or someone I just met on the train.</p>
        <p>You can find my latest thoughts on <span>my blog.</span></p>
      </div>
      <div>
        <img src="/favicon/profile-pic.png"></img>
      </div>
    </section>
    <section className="flex-column">
      <h2 className="mono-text">Latest Posts</h2>
      <div className="text-box">
        <h3>Post Excerpt</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="text-box">
        <h3>Post Excerpt</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="text-box">
        <h3>Post Excerpt</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </section>
    </Layout>
    <Footer></Footer>
    </div>
  )
}