import{r as n}from"./index.f1bc5ebf.js";import{T as c,A as d}from"./TailcastLogo.7110cda0.js";import{j as e}from"./jsx-runtime.109e40f8.js";import{m as r}from"./motion.e3ea24f3.js";const o=[{label:"Home",href:"#home",ariaLabel:"Home"},{label:"Productos",href:"#features",ariaLabel:"Features"},{label:"About Us",href:"#aboutus",ariaLabel:"Pricing"}],h=()=>{const[t,l]=n.useState(!1);return e.jsxs("nav",{className:"w-full h-20 flex flex-col justify-center items-center fixed bg-customDarkBg1 lg:bg-customDarkBgTransparent z-40 lg:backdrop-blur-xl",children:[e.jsxs("div",{className:"2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative",children:[e.jsx(r.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},exit:{opacity:0},children:e.jsx("a",{className:"navbar-link",href:"#home","aria-label":"Home",children:e.jsxs("div",{className:"flex justify-start items-center grow basis-0",children:[e.jsx("div",{className:"text-white mr-2 text-6xl",children:e.jsx(c,{})}),e.jsx("div",{className:"text-white font-['Inter'] font-bold text-xl",children:"NOBU"})]})})}),e.jsx(r.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},exit:{opacity:0},children:e.jsx("div",{className:"hidden lg:flex h-full pl-12 pb-2",children:o.map(({href:i,label:a,ariaLabel:s})=>e.jsx("a",{className:"navbar-link",href:i,"aria-label":s,children:a},a))})}),e.jsxs("div",{className:"lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2",onClick:()=>l(!t),children:[e.jsx("div",{className:"w-5 h-0.5 bg-gray-500  mb-1"}),e.jsx("div",{className:"w-5 h-0.5 bg-gray-500  mb-1"}),e.jsx("div",{className:"w-5 h-0.5 bg-gray-500 "})]})]}),e.jsx(d,{children:t&&e.jsx(r.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},exit:{opacity:0},children:e.jsx("div",{className:`flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customDarkBg1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10
        `,children:o.map(({label:i,href:a,ariaLabel:s})=>e.jsx("a",{className:"navbar-link",href:a,onClick:()=>l(!1),"aria-label":s,children:i},a))})})})]})};export{h as Navbar};
