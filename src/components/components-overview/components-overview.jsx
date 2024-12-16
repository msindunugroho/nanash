/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import templateComponents from "../../utils/datas";
import ComponentsShowcase from "./components-showcase";

const ComponentsOverview = ( { templatesData } ) => {
  const [componentsData, setComponentsData] = useState(null);
  const [headerData, setHeaderData] = useState(null)

  useEffect(() => {
    const templateData = templateComponents.find(data => data.id === templatesData);
    if(templateData) {
      setHeaderData( { title: templateData.title, description: templateData.description, id: templateData.id })
      setComponentsData(templateData.data)
    }
  }, []);

  if (!componentsData || !headerData) {
    return <p>Loading...</p>;
  }

    return(
      <div className="container_template-page">
        <ComponentsShowcase 
          componentsData={componentsData}
          headerData={headerData} />
      </div>
    )
}

export default ComponentsOverview;