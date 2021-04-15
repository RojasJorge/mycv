import Link from 'next/link'

export const Default = _ =>
  <>
    <h3>Available commands:</h3>
    <ul>
      <li>about</li>
      <li>contact</li>
      <li>portfolio</li>
    </ul>
  </>

const Help = _ => {

  return (
    <>
      <ul>
        <li>
          <Link href={{
            pathname: '/',
            query: {
              run: 'about'
            }
          }}>
            <a>about</a>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Help
