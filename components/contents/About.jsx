import { useStoreState } from "easy-peasy"

const About = _ => {

  const info = useStoreState(state => state.me.info)

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="terminal-card">
          <header>
            {info.about.title}
          </header>
          <ul>
            {info.about.details.map((item, key) => (
              <li key={key}>
                <strong>{item.title}:</strong> {item.value}
              </li>
            ))}
          </ul>
          <div dangerouslySetInnerHTML={{ __html: info.about.bio }} />
          <h3>Skills:</h3>
          <p>
            <span className="tag">Javascript</span>
            <span className="tag">php</span>
            <span className="tag">Wordpress theming</span>
            <span className="tag">Wordpress plugins</span>
            <span className="tag">Nodejs</span>
            <span className="tag">Casljs</span>
            <span className="tag">Ant Design</span>
            <span className="tag">Sass</span>
            <span className="tag">jQuery</span>
            <span className="tag">REST API</span>
            <span className="tag">Reactjs</span>
            <span className="tag">Vuejs</span>
            <span className="tag">Rethinkdb</span>
            <span className="tag">Hapijs</span>
            <span className="tag">Expressjs</span>
            <span className="tag">css</span>
            <span className="tag">Mysql</span>
            <span className="tag">Mongodb</span>
            <span className="tag">Sequelizejs</span>
            <span className="tag">Tailwindcss</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
