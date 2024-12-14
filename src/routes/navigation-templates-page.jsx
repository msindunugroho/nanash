import { useEffect, useState } from "react";
import templateComponents from "../utils/datas";
import ComponentShowcase from "../components/component-overview/component-showcase";

const NavigationTemplatesPage = () => {
  const [componentsData, setComponentsData] = useState(null);
  const [headerData, setHeaderData] = useState(null)

  useEffect(() => {
    const templateData = templateComponents.find(data => data.id === "navigation-templates");
    if(templateData) {
      setHeaderData( { title: templateData.title, description: templateData.description, id: templateData.id })
      setComponentsData(templateData.data)
    }
  }, []);

  if (!componentsData || !headerData) {
    return <p>Loading...</p>;
  }

    return(
      <section className="navigation-template-page component-layout">
        <div className="container_navigation-template-page">
          <ComponentShowcase 
            componentsData={componentsData}
            headerData={headerData} />
        </div>
      </section>
    )
}

export default NavigationTemplatesPage;