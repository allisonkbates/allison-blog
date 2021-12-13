export default function InnerLayout({children}) {
  return (
    <div>
      {children}
    <style jsx>{`
      div {
        margin: 2em 6em;
        flex: 1 0 auto;
      }
      @media only screen and (max-width: 768px) {
        div {
          margin: 1em 2em;
        }
      }

    `}
    </style>
    </div>
  )
}