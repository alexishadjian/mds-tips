const icons = {
  user: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_7_19)">
        <path d="M19.6458 7.35048C19.4058 10.6905 16.9336 13.2635 14.2378 13.2635C11.542 13.2635 9.06576 10.6913 8.82977 7.35048C8.58395 3.87578 10.9905 1.4375 14.2378 1.4375C17.4851 1.4375 19.8917 3.93902 19.6458 7.35048Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.9687 18.0561C8.64412 18.0561 3.52376 20.6635 2.24101 25.7416C2.07107 26.4134 2.49838 27.0779 3.19857 27.0779H24.7397C25.4399 27.0779 25.8648 26.4134 25.6973 25.7416C24.4145 20.5822 19.2942 18.0561 13.9687 18.0561Z" stroke="white" strokeWidth="2" strokeMiterlimit="10"/>
      </g>
    </svg>
  ),
  arrowRight: (
    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5625 15.875L18 8.4375L10.5625 1M18 8.4375H1H18Z" stroke="#FF6B40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

export default function Svg({ icon }) {

  const svgIcon = icons[icon] || icons.defaultIcon;
  return svgIcon;

}