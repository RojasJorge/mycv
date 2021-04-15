import { useStoreState } from "easy-peasy"

const Portfolio = _ => {

  const info = useStoreState(state => state.me.info)

  return (
    <div className="row">
      <div className="col-md-12">
        <h3>Portfolio</h3>
      </div>
      <div className="col-md-12">
        <table className="terminal-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo proyecto</th>
              <th>Con</th>
              <th>Url</th>
              <th>Tecnologías</th>
            </tr>
          </thead>
          <tbody>
            {info.portfolio.map((item, key) => (
              <tr key={key}>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.with}</td>
                <td>
                  <a href={item.url} target="_blank">
                    {item.url}
                  </a>
                </td>
                <td>{item.technologies.sort().map((tech, index) => (
                  <span className="tag" key={index}>{tech}</span>
                ))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Portfolio
