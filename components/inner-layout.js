export default function InnerLayout({children}) {
  return (
    <div>
      {children}
    <style jsx>{`
      div {
        margin: 2em 4em;
        flex: 1 0 auto;
      }

    `}
    </style>
    </div>
  )
}