export default function PageSwitch({arrayComp=[],pageName,}) {
  return arrayComp?.find((item)=>item?.name === pageName)?.component;
}
