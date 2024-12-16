/* eslint-disable react/prop-types */
const ComponentSidebar = ({ componentsData }) => {
  return(
    <aside>
      <div className="sidebar_container flex-1 h-screen w-full">
        <ol>
          {
            componentsData &&
            componentsData.map((data) => {
              const { id, name, path } = data;
              return(
                <li key={id}>
                  <a href={path}>{name}</a>
                </li>
              )
            })
          }
        </ol>
      </div>
    </aside>
  )

}

export default ComponentSidebar;