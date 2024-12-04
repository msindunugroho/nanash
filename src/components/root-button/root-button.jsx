/* eslint-disable react/prop-types */
const RootButton = ( {atrType, styleCustom, children} ) => {
    return(
        <button type={`${atrType || "button"}`}
        className={` ${styleCustom && styleCustom} btn`}
      >
        {children || ""}
      </button>
    )
}

export default RootButton;