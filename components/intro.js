import Link from "next/link";

export default function Intro() {
  return (
    <section>
      <div className="paragraph-text">
        <h2 className="mg-bottom-1">👋 Hi, I'm Allison.</h2>
        <p className="mg-bottom-1">I'm a currently a <span>senior product manager</span> at theSkimm. I love <span>teaching others</span> about product management, whether they're a designer, engineer or someone I just met on the train.</p>
        <p>You can find my latest thoughts on <Link href="/blog"><a>my blog.</a></Link></p>
      </div>
      <div>
        <img src="/profile-pic.png"></img>
      </div>
    <style jsx>{`
      section {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1em 0em;
      }
      h2 {
        font-size: var(--fs-600);
        margin-bottom: 1em;
      }
      p {
        font-size: var(--fs-500);
        margin-bottom: 1em;
      }
      span, a {
        color: var(--color-viridian-500);
        font-weight: 600;
      }
      img {
        max-width: 350px;
        border-radius: 2px;
        border-bottom: 10px solid var(--color-viridian-300);
        border-right: 10px solid var(--color-viridian-300);
      }
      @media only screen and (max-width: 768px) {
        section {
          flex-direction: column-reverse;
        }
        .paragraph-text {
          text-align: center;
        }
        img {
          max-width: 250px;
          margin-bottom: 2em;
        }
        h2 {
          font-size: var(--fs-500);
        }
        p {
          font-size: var(--fs-400);
        }
      }
    `}</style>
    </section>
  )
}