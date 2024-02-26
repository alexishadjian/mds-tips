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
  ),
  sun: (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.7325 13.5C4.7325 13.3011 4.65348 13.1103 4.51283 12.9697C4.37217 12.829 4.18141 12.75 3.9825 12.75H1.4325C1.23358 12.75 1.04282 12.829 0.902165 12.9697C0.761513 13.1103 0.682495 13.3011 0.682495 13.5C0.682495 13.6989 0.761513 13.8897 0.902165 14.0303C1.04282 14.171 1.23358 14.25 1.4325 14.25H3.9825C4.18141 14.25 4.37217 14.171 4.51283 14.0303C4.65348 13.8897 4.7325 13.6989 4.7325 13.5Z" fill="#F24E1E" fillOpacity="0.95"/>
      <path d="M22.2675 13.5C22.2675 13.6989 22.3465 13.8897 22.4872 14.0303C22.6278 14.171 22.8186 14.25 23.0175 14.25H25.5675C25.7664 14.25 25.9572 14.171 26.0978 14.0303C26.2385 13.8897 26.3175 13.6989 26.3175 13.5C26.3175 13.3011 26.2385 13.1103 26.0978 12.9697C25.9572 12.829 25.7664 12.75 25.5675 12.75H23.0175C22.8186 12.75 22.6278 12.829 22.4872 12.9697C22.3465 13.1103 22.2675 13.3011 22.2675 13.5Z" fill="#F24E1E" fillOpacity="0.95"/>
      <path d="M7.30499 20.76C7.43176 20.6206 7.50137 20.4385 7.49999 20.25C7.50056 20.1513 7.48164 20.0535 7.44431 19.9621C7.40699 19.8707 7.352 19.7876 7.28249 19.7175C7.21276 19.6472 7.12981 19.5914 7.03842 19.5533C6.94702 19.5153 6.84899 19.4957 6.74999 19.4957C6.65098 19.4957 6.55295 19.5153 6.46155 19.5533C6.37016 19.5914 6.28721 19.6472 6.21749 19.7175L4.43999 21.5025C4.31712 21.646 4.25291 21.8305 4.2602 22.0193C4.26749 22.2081 4.34574 22.3871 4.47931 22.5207C4.61288 22.6543 4.79194 22.7325 4.9807 22.7398C5.16945 22.7471 5.35401 22.6829 5.49749 22.56L7.30499 20.76Z" fill="#F24E1E" fillOpacity="0.95"/>
      <path d="M19.695 6.24C19.6251 6.30993 19.5696 6.39295 19.5317 6.48432C19.4939 6.57568 19.4744 6.67361 19.4744 6.77251C19.4744 6.8714 19.4939 6.96933 19.5317 7.06069C19.5696 7.15206 19.6251 7.23508 19.695 7.305C19.7649 7.37493 19.8479 7.43041 19.9393 7.46825C20.0307 7.5061 20.1286 7.52557 20.2275 7.52557C20.3264 7.52557 20.4243 7.5061 20.5157 7.46825C20.607 7.43041 20.6901 7.37493 20.76 7.305L22.56 5.4975C22.6309 5.42804 22.6872 5.34521 22.7259 5.2538C22.7645 5.1624 22.7846 5.06424 22.785 4.96501C22.7822 4.76718 22.7013 4.57848 22.56 4.44001C22.4195 4.30032 22.2294 4.22191 22.0312 4.22191C21.8331 4.22191 21.643 4.30032 21.5025 4.44001L19.695 6.24Z" fill="#F24E1E" fillOpacity="0.95"/>
      <path d="M13.5 22.2675C13.3011 22.2675 13.1103 22.3465 12.9697 22.4872C12.829 22.6278 12.75 22.8186 12.75 23.0175V25.5675C12.75 25.7664 12.829 25.9572 12.9697 26.0978C13.1103 26.2385 13.3011 26.3175 13.5 26.3175C13.6989 26.3175 13.8897 26.2385 14.0303 26.0978C14.171 25.9572 14.25 25.7664 14.25 25.5675V23.0175C14.25 22.8186 14.171 22.6278 14.0303 22.4872C13.8897 22.3465 13.6989 22.2675 13.5 22.2675Z" fill="#F24E1E" fillOpacity="0.95"/>
      <path d="M12.75 1.43248V3.98248C12.75 4.1814 12.829 4.37216 12.9697 4.51281C13.1103 4.65347 13.3011 4.73248 13.5 4.73248C13.6989 4.73248 13.8897 4.65347 14.0303 4.51281C14.171 4.37216 14.25 4.1814 14.25 3.98248V1.43248C14.25 1.23357 14.171 1.0428 14.0303 0.902152C13.8897 0.7615 13.6989 0.682483 13.5 0.682483C13.3011 0.682483 13.1103 0.7615 12.9697 0.902152C12.829 1.0428 12.75 1.23357 12.75 1.43248Z" fill="#F24E1E" fillOpacity="0.95"/>
      <path d="M19.695 20.76L21.5025 22.56C21.6069 22.6653 21.7403 22.7373 21.8856 22.7668C22.031 22.7964 22.1819 22.7821 22.3191 22.726C22.4564 22.6698 22.5739 22.5741 22.6569 22.4511C22.7398 22.3281 22.7844 22.1833 22.785 22.035C22.7846 21.9358 22.7645 21.8376 22.7259 21.7462C22.6872 21.6548 22.6309 21.572 22.56 21.5025L20.76 19.695C20.6188 19.5538 20.4272 19.4744 20.2275 19.4744C20.0278 19.4744 19.8362 19.5538 19.695 19.695C19.5538 19.8362 19.4744 20.0278 19.4744 20.2275C19.4744 20.4272 19.5538 20.6188 19.695 20.76Z" fill="#F24E1E" fillOpacity="0.95"/>
      <path d="M7.5 6.74998C7.50057 6.65128 7.48165 6.55343 7.44432 6.46205C7.407 6.37068 7.35201 6.28757 7.2825 6.21749L5.475 4.41748C5.33447 4.2778 5.14439 4.19939 4.94625 4.19939C4.74811 4.19939 4.55802 4.2778 4.4175 4.41748C4.27781 4.55801 4.1994 4.74809 4.1994 4.94623C4.1994 5.14437 4.27781 5.33446 4.4175 5.47498L6.2175 7.28248C6.28722 7.35278 6.37017 7.40858 6.46156 7.44665C6.55296 7.48473 6.65099 7.50433 6.75 7.50433C6.84901 7.50433 6.94703 7.48473 7.03843 7.44665C7.12982 7.40858 7.21277 7.35278 7.2825 7.28248C7.35201 7.2124 7.407 7.12929 7.44432 7.03792C7.48165 6.94654 7.50057 6.84869 7.5 6.74998Z" fill="#F24E1E" fillOpacity="0.95"/>
      <path d="M5.81252 13.4025C5.79318 14.9091 6.22228 16.3875 7.04526 17.6497C7.86824 18.9118 9.04794 19.9008 10.4344 20.4908C11.8208 21.0808 13.3514 21.2453 14.8315 20.9632C16.3117 20.6812 17.6745 19.9654 18.7468 18.9068C19.8191 17.8483 20.5525 16.4948 20.8536 15.0184C21.1547 13.5421 21.0101 12.0095 20.438 10.6155C19.866 9.22158 18.8923 8.02921 17.6409 7.18999C16.3895 6.35078 14.9168 5.90263 13.41 5.9025C11.4088 5.89251 9.48535 6.67638 8.06118 8.08227C6.63702 9.48816 5.82837 11.4014 5.81252 13.4025ZM19.5 13.4025C19.5194 14.6128 19.1781 15.8014 18.5196 16.817C17.8612 17.8327 16.9153 18.6293 15.8026 19.1056C14.6898 19.5819 13.4604 19.7162 12.2711 19.4915C11.0817 19.2667 9.98616 18.693 9.12393 17.8436C8.26169 16.9941 7.67179 15.9072 7.42935 14.7213C7.18692 13.5354 7.30291 12.3042 7.76257 11.1845C8.22222 10.0647 9.00474 9.10713 10.0105 8.43362C11.0162 7.76011 12.1996 7.40117 13.41 7.4025C15.0121 7.39449 16.5521 8.0212 17.6934 9.14558C18.8346 10.27 19.4842 11.8005 19.5 13.4025Z" fill="#F24E1E" fillOpacity="0.95"/>
    </svg>
  ),
  moon: (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8125 1.6875C7.59375 1.6875 2.53125 5.90625 2.53125 12.6563C2.53125 19.4063 7.59375 24.4688 14.3437 24.4688C21.0937 24.4688 25.3125 19.4063 25.3125 15.1875C16.0312 21.0938 5.90625 10.9688 11.8125 1.6875Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  bell: (
    <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.4 3.05882C12.4 2.24757 12.7266 1.46955 13.308 0.895909C13.8893 0.322268 14.6778 0 15.5 0C16.3222 0 17.1107 0.322268 17.692 0.895909C18.2734 1.46955 18.6 2.24757 18.6 3.05882V4.95529C21.3694 5.63535 23.8281 7.21101 25.584 9.43087C27.3398 11.6507 28.2916 14.3869 28.2875 17.2028C28.2875 17.507 28.165 17.7988 27.947 18.0139C27.729 18.229 27.4333 18.3499 27.125 18.3499H3.875C3.56669 18.3499 3.271 18.229 3.05299 18.0139C2.83498 17.7988 2.7125 17.507 2.7125 17.2028C2.7125 11.2993 6.8479 6.34706 12.4 4.96906V3.05882ZM17.4375 8.41177C17.1292 8.41177 16.8335 8.53262 16.6155 8.74773C16.3975 8.96285 16.275 9.2546 16.275 9.55882C16.275 9.86304 16.3975 10.1548 16.6155 10.3699C16.8335 10.585 17.1292 10.7059 17.4375 10.7059C19.3797 10.7059 20.7591 11.6511 21.9108 13.2753C21.9983 13.3987 22.1096 13.5039 22.2384 13.5849C22.3671 13.6659 22.5107 13.721 22.6611 13.7472C22.8114 13.7734 22.9655 13.7702 23.1145 13.7376C23.2636 13.705 23.4047 13.6438 23.5298 13.5575C23.6549 13.4711 23.7615 13.3613 23.8435 13.2343C23.9256 13.1072 23.9815 12.9655 24.0081 12.8172C24.0346 12.6688 24.0313 12.5168 23.9983 12.3697C23.9653 12.2226 23.9033 12.0834 23.8157 11.96C22.3742 9.92588 20.3608 8.41177 17.4375 8.41177ZM0 22.9412C0 22.1299 0.326606 21.3519 0.907969 20.7783C1.48933 20.2046 2.27783 19.8824 3.1 19.8824H27.9C28.7222 19.8824 29.5107 20.2046 30.092 20.7783C30.6734 21.3519 31 22.1299 31 22.9412C31 23.7524 30.6734 24.5305 30.092 25.1041C29.5107 25.6777 28.7222 26 27.9 26H3.1C2.27783 26 1.48933 25.6777 0.907969 25.1041C0.326606 24.5305 0 23.7524 0 22.9412Z" fill="#F24E1E"/>
    </svg>
  ),
  admin: (
    <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.1427 13.2373L24.5675 11.0396C24.3677 10.96 23.9562 10.8562 23.4898 11.0396L17.9122 13.2373C17.3891 13.4375 17.05 13.9209 17.05 14.4092C17.05 19.8584 20.3801 23.6279 23.4873 24.8535C23.9536 25.0366 24.3592 24.9329 24.5651 24.8535C27.0475 23.9209 31 20.5322 31 14.4092C31 13.9209 30.6609 13.4375 30.1427 13.2373ZM24.025 22.5781V13.3398L28.6508 15.165C28.3795 19.4238 25.7009 21.7773 24.025 22.5781ZM10.85 12.5C14.2745 12.5 17.05 9.70166 17.05 6.25C17.05 2.79834 14.2745 0 10.85 0C7.42547 0 4.65 2.79834 4.65 6.25C4.65 9.70166 7.42547 12.5 10.85 12.5ZM15.5291 15.1514C14.817 14.9561 14.0759 14.8438 13.3058 14.8438H8.39422C3.75923 14.8438 0 18.6377 0 23.3105C0 24.2432 0.75175 25 1.67884 25H20.0192C20.1715 25 20.3082 24.951 20.4484 24.9126C17.9073 22.9395 15.6986 19.5459 15.5291 15.1514Z" fill="black"/>
    </svg>
  ),
  cross: (
    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="2" y1="23.5858" x2="24.5858" y2="0.999999" stroke="black" strokeWidth="2" strokeLinecap="round"/>
      <line x1="1.41421" y1="1" x2="24" y2="23.5858" stroke="black" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
};
export default function Svg({ icon }) {

  const svgIcon = icons[icon] || icons.defaultIcon;
  return svgIcon;

}