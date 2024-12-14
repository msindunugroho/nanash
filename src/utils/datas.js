import BrandNavBar from "../components/navigation-templates/brand-navbar/brand-navbar";
import DropdownNavBar from "../components/navigation-templates/dropdown-navbar/dropdown-navbar";
import SimpleNavBar from "../components/navigation-templates/simple-navbar/simple-navbar";


const templateComponents = [
    {
        id:"nav",
        title: "navigation template",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab deserunt laboriosam dolorem soluta, libero enim eligendi repudiandae tempora quia corrupti.",
        data: [
            {
                id: "#simple-navbar",
                name: "Simple NavBar",
                description: "A simple navigation component with a hamburger menu on mobile devices, featuring links for navigation between different pages.",
                component: SimpleNavBar,
                path: `/components/navigation-templates#simple-navbar`,
                cli:"",
            },
            {
                id: "#brand-navbar",
                name: "Brand NavBar",
                description: "A navigation bar featuring a brand name and dropdown menu for mobile.",
                component: BrandNavBar,
                path: `/components/navigation-templates#brand-navbar`,
                cli:"",
            },
            {
                id: "#dropdown-navbar",
                name: "Dropdown NavBar",
                description: "A responsive navigation bar component that includes a brand name, multiple navigation links, and at least one navigation link with dropdown functionality for displaying additional options or submenus. It adapts seamlessly to different screen sizes, ensuring usability on both desktop and mobile devices.",
                component: DropdownNavBar,
                path: `/components/navigation-templates#dropdown-navbar`,
                cli:"",
            },
        ],
    },
    {
        id:"carousel",
        title: "carousel template",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab deserunt laboriosam dolorem soluta, libero enim eligendi repudiandae tempora quia corrupti.",
        data: []
    },
    {
        id:"card",
        title: "card template",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab deserunt laboriosam dolorem soluta, libero enim eligendi repudiandae tempora quia corrupti.",
        data: []
    },
    {
        id:"modal",
        title: "modal template",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab deserunt laboriosam dolorem soluta, libero enim eligendi repudiandae tempora quia corrupti.",
        data: []
    },
];

export default templateComponents;