/* eslint-disable react/prop-types */

const handleCopyCommand = (command) => {
  navigator.clipboard.writeText(command).then(() => {
    alert(`Copied: ${command}`);
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
};

const ComponentsShowcase = ({ componentsData, headerData }) => {
  return(
    <section className="component-showcase">
      <div className="component-showcase_container flex flex-col gap-16">
        <header
          aria-describedby={`desc-${headerData.id}`}
          aria-labelledby={`header-${headerData.id}`}
          className="flex flex-col items-center justify-center gap-1 w-full h-[300px]">
          <h1 
            className={`text-center text-primary-500 font-bold uppercase dark:text-primary-100`}
            id={`header-${headerData.id}`}>{headerData.title}</h1>
          <p 
            className={`text-center md:w-9/12`}
            id={`desc-${headerData.id}`}>{headerData.description}</p>
        </header>
        <ol className="templates flex flex-col pb-16 gap-24">
          {
            componentsData &&
            componentsData.map((item) => {
              return(
                <li 
                  className="flex flex-col gap-8 w-full h-auto pb-12 border-b-2 border-secondary-500 dark:border-tertiary-500"
                  id={item.id}
                  key={item.id}> 
                  <header
                    aria-describedby={`desc-${item.id}`}
                    aria-labelledby={`title-${item.id}`}>
                    <h3 
                      className={`text-primary-600 font-semibold mb-1 dark:text-tertiary-300`}
                      id={`title-${item.id}`}>{item.name}</h3>
                    <p
                      id={`desc-${item.id}`}>{item.description}</p>
                  </header>
                  <div 
                    aria-label={`${item.name} template component`}
                    className="component w-full">
                    {item.component && <item.component />}
                  </div>
                  <div className="command flex items-center gap-4 w-full h-16 px-4 overflow-x-auto bg-primary-500 rounded-lg overflow-y-auto dark:bg-primary-900">
                    <button 
                      aria-controls={`command-${item.name}`}
                      aria-label={`copy ${item.command}`}
                      className="p-1"
                      type="button"
                      onClick={() => handleCopyCommand(item.command)}>
                      <svg
                        className="size-6 fill-primary-50 active:fill-primary-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                        <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                      </svg>
                    </button>
                    <code 
                      aria-label={`command to copy: ${item.command}`}
                      className="text-secondary-50 w-max text-nowrap"
                      id={`command-${item.name}`}>{item.command}</code>
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

export default ComponentsShowcase;