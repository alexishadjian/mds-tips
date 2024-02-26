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
  ),
  edit: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.965 2.99334L17.0067 2.03501C16.8912 1.9181 16.7537 1.82528 16.602 1.76193C16.4504 1.69858 16.2877 1.66595 16.1234 1.66595C15.959 1.66595 15.7963 1.69858 15.6447 1.76193C15.4931 1.82528 15.3555 1.9181 15.24 2.03501L10.8334 6.44251V9.16667H13.5584L17.965 4.76001C18.0819 4.64452 18.1748 4.50697 18.2381 4.35534C18.3015 4.2037 18.3341 4.04101 18.3341 3.87667C18.3341 3.71234 18.3015 3.54964 18.2381 3.39801C18.1748 3.24638 18.0819 3.10883 17.965 2.99334ZM12.9825 7.87501H12.1242V7.01667L15 4.14417L15.8584 5.00251L12.9825 7.87501Z" fill="black"/>
      <path d="M15.8333 15.8333H4.16667V4.16667H9.16667V2.5H4.16667C3.72504 2.50132 3.30189 2.67734 2.98961 2.98961C2.67734 3.30189 2.50132 3.72504 2.5 4.16667V15.8333C2.50132 16.275 2.67734 16.6981 2.98961 17.0104C3.30189 17.3227 3.72504 17.4987 4.16667 17.5H15.8333C16.275 17.4987 16.6981 17.3227 17.0104 17.0104C17.3227 16.6981 17.4987 16.275 17.5 15.8333V10.8333H15.8333V15.8333Z" fill="black"/>
    </svg>
  ),
  exit: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.24996 1.83331H16.5C17.5083 1.83331 18.3333 2.65831 18.3333 3.66665V18.3333C18.3333 19.3416 17.5083 20.1666 16.5 20.1666H8.24996C7.24163 20.1666 6.41663 19.3416 6.41663 18.3333V16.5H8.24996V18.3333H16.5V3.66665H8.24996V5.49998H6.41663V3.66665C6.41663 2.65831 7.24163 1.83331 8.24996 1.83331Z" fill="#FF4242"/>
      <path d="M9.24917 14.2909L10.5417 15.5834L15.125 11L10.5417 6.41669L9.24917 7.70919L11.6142 10.0834H2.75V11.9167H11.6142L9.24917 14.2909Z" fill="#FF4242"/>
    </svg>
  )
};
export default function Svg({ icon }) {

  const svgIcon = icons[icon] || icons.defaultIcon;
  return svgIcon;

}