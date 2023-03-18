import tw from "tailwind-styled-components"


export const Button = tw.div`
 ${({ color }) => `
    background-color: ${color};
    hover:bg-${color};
  `}
border
px-6
py-1
rounded-3xl
text-sm
`;