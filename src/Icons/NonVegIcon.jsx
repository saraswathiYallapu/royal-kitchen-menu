/* eslint-disable react/no-unknown-property */
import Icon from "@ant-design/icons";

const nonVegSvg = () => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    class="iconify iconify--noto"
    preserveAspectRatio="xMidYMid meet"
  >
    <circle cx="63.93" cy="64" r="60" fill="#c33"></circle>
    <circle cx="60.03" cy="63.1" r="56.1" fill="#f44336"></circle>
    <path
      d="M23.93 29.7c4.5-7.1 14.1-13 24.1-14.8c2.5-.4 5-.6 7.1.2c1.6.6 2.9 2.1 2 3.8c-.7 1.4-2.6 2-4.1 2.5a44.64 44.64 0 0 0-23 17.4c-2 3-5 11.3-8.7 9.2c-3.9-2.3-3.1-9.5 2.6-18.3z"
      fill="#ff8a80"
    ></path>
  </svg>
);

const NonVegIcon = (props) => <Icon component={nonVegSvg} {...props} />;

export default NonVegIcon;
