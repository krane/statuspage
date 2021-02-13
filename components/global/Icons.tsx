type IconProps = {
  height?: string;
  width?: string;
};

export const KraneLogo = ({ height = "20", width = "20" }: IconProps) => {
  return (
    <svg className={`w-${width} h-${height}`} viewBox="0 0 293 478" fill="none">
      <path
        d="M243.185 197.245L197.134 162.761C197.134 162.761 149.339 198.564 114.889 225.332C114.889 199.847 114.889 34.6766 114.889 34.6766M243.185 197.245L146.596 268.014L197.134 302.06M243.185 197.245V268.014L197.134 302.06M284.984 364.732L238.933 396.518M284.984 364.732V435.201L238.933 468.491M284.984 364.732L197.134 302.06M238.933 396.518L55.0896 270.244V71.4L114.889 34.6766M238.933 396.518V468.491M238.933 468.491L115.698 381.609M114.889 34.6766L65.838 9L8 40.0507M115.698 381.609L54.4925 428.741M115.698 381.609L54.4925 333.084V428.741M54.4925 428.741L8 403.112V40.0507M8 40.0507L54.0518 71.8365V269.207"
        stroke="black"
        strokeWidth="14.3311"
      />
    </svg>
  );
};

export const GreenCheckLogo = ({ height = "10", width = "10" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-${width} h-${height} text-green-400`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const RedCheckLogo = ({ height = "10", width = "10" }: IconProps) => {
  return (
    <svg viewBox="0 0 15 15" className={`w-${width} h-${height}`}>
      <g
        id="Artboard"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group" fill="#F15461" fill-rule="nonzero">
          <path
            d="M7.5,0 C3.36,0 0,3.36 0,7.5 C0,11.64 3.36,15 7.5,15 C11.64,15 15,11.64 15,7.5 C15,3.36 11.64,0 7.5,0 Z M7,3.5 C7,3.22 7.22,3 7.5,3 C7.78,3 8,3.22 8,3.5 L8,8 C8,8.28 7.78,8.5 7.5,8.5 C7.22,8.5 7,8.28 7,8 L7,3.5 Z M7.5,12 C6.95,12 6.5,11.55 6.5,11 C6.5,10.45 6.95,10 7.5,10 C8.05,10 8.5,10.45 8.5,11 C8.5,11.55 8.05,12 7.5,12 Z"
            id="Shape"
          />
        </g>
      </g>
    </svg>
  );
};

export const WarningLogo = ({ height = "10", width = "10" }: IconProps) => {
  return (
    <svg viewBox="0 0 15 15" className={`w-${width} h-${height}`}>
      <g
        id="Artboard"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group" fill="#FFAF36" fill-rule="nonzero">
          <path
            d="M14.57,12.54 L8.39,0.63 C8.05,-0.04 6.96,-0.04 6.61,0.63 L0.43,12.54 C0.27,12.85 0.28,13.22 0.46,13.52 C0.64,13.82 0.97,14 1.32,14 L13.68,14 C14.03,14 14.35,13.82 14.53,13.52 C14.71,13.22 14.73,12.85 14.57,12.54 Z M7,5 C7,4.72 7.22,4.5 7.5,4.5 C7.78,4.5 8,4.72 8,5 L8,8.5 C8,8.78 7.78,9 7.5,9 C7.22,9 7,8.78 7,8.5 L7,5 Z M7.5,12 C6.95,12 6.5,11.55 6.5,11 C6.5,10.45 6.95,10 7.5,10 C8.05,10 8.5,10.45 8.5,11 C8.5,11.55 8.05,12 7.5,12 Z"
            id="Shape"
          />
        </g>
      </g>
    </svg>
  );
};

export const GlobeIcon = ({ height = "10", width = "10" }: IconProps) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      className={`text-gray-500 w-${width} h-${height}`}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  );
};
