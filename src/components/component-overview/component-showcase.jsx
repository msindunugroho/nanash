/* eslint-disable react/prop-types */

const ComponentShowcase = ({ componentsData, headerData }) => {
  return(
    <section className="component-showcase">
      <div className="component-showcase_container flex flex-col gap-14">
        <header>
          <h1 className={`text-5xl text-center text-primary-500 font-bold uppercase`}>{headerData.title}</h1>
          <p className={`text-center`}>{headerData.description}</p>
        </header>
        <ol className="templates flex flex-col pb-16">
          {
            componentsData &&
            componentsData.map((item) => {
              return(
                <li 
                  className="flex flex-col gap-8 w-full h-auto pt-16 pb-8 border-b-2 border-primary-500"
                  id={item.id}
                  key={item.id}> 
                  <header>
                    <h3 className={`text-xl text-primary-600 font-semibold mb-1`}>{item.name}</h3>
                    <p>{item.description}</p>
                  </header>
                  <div className="component w-full">
                    {item.component && <item.component />}
                  </div>
                  <div className="source-code w-full h-80 p-4 bg-primary-500 rounded-lg overflow-y-auto">
                    <pre className="w-full h-max text-primary-50">
                      {`
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facilis ad tempore 
                          similique
                              vitae obcaecati, 
                              aperiam 
                          commodi dolorum 
                      molestiae suscipit, alias iusto eum. Ea ex voluptatem minus rem, dolorum iusto.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facilis ad tempore 
                          similique
                              vitae obcaecati, 
                              aperiam 
                          commodi dolorum 
                      molestiae suscipit, alias iusto eum. Ea ex voluptatem minus rem, dolorum iusto.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facilis ad tempore 
                          similique
                              vitae obcaecati, 
                              aperiam 
                          commodi dolorum 
                      molestiae suscipit, alias iusto eum. Ea ex voluptatem minus rem, dolorum iusto.
                      `}
                    </pre>
                  </div>
                </li>
              )
            })
          }
        </ol>
      </div>
    </section>
  )
}

export default ComponentShowcase;