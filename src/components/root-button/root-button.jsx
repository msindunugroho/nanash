/* eslint-disable react/prop-types */

const RootButton = ( { ariaLabel, atrType, styleCustom, children } ) => {
    return(
      <button
        aria-label={ariaLabel}
        className={` ${styleCustom && styleCustom} flex gap-2 text-sm py-3 px-4 font-semibold capitalize rounded-lg *:size-4 sm:gap-[0.625rem] sm:px-[1.125rem] sm:text-base sm:*:size-5 md:gap-3 md:py-4 md:px-5 md:text-lg md:*:size-6`}
        type={`${atrType || "button"}`}
      >
        {children}
      </button>
    )
}

export default RootButton;