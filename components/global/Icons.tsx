type IconProps = {
  height?: string;
  width?: string;
};

export const KraneLogo = ({ height = "40", width = "40" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 293 478"
      fill="none"
      width={width}
      height={height}
    >
      <path
        d="M243.185 197.245L197.134 162.761C197.134 162.761 149.339 198.564 114.889 225.332C114.889 199.847 114.889 34.6766 114.889 34.6766M243.185 197.245L146.596 268.014L197.134 302.06M243.185 197.245V268.014L197.134 302.06M284.984 364.732L238.933 396.518M284.984 364.732V435.201L238.933 468.491M284.984 364.732L197.134 302.06M238.933 396.518L55.0896 270.244V71.4L114.889 34.6766M238.933 396.518V468.491M238.933 468.491L115.698 381.609M114.889 34.6766L65.838 9L8 40.0507M115.698 381.609L54.4925 428.741M115.698 381.609L54.4925 333.084V428.741M54.4925 428.741L8 403.112V40.0507M8 40.0507L54.0518 71.8365V269.207"
        stroke="black"
        strokeWidth="14.3311"
      />
    </svg>
  );
};

export const GreenCheckIcon = ({ height, width }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={`w-${width} h-${height} fill-current text-green-400`}
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const RedCheckIcon = ({ height = "10", width = "10" }: IconProps) => {
  return (
    <svg viewBox="0 0 20 20" className={`w-${width} h-${height}`}>
      <g
        xmlns="http://www.w3.org/2000/svg"
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

export const WarningIcon = ({ height = "10", width = "10" }: IconProps) => {
  return (
    <svg viewBox="0 0 15 15" className={`w-${width} h-${height}`}>
      <g
        stroke="none"
        strokeWidth="1"
        fillRule="evenodd"
        xmlns="http://www.w3.org/2000/svg"
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
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={`text-gray-500 w-${width} h-${height}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  );
};

export const StarIcon = ({ height = "5", width = "5" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`text-gray-400 w-${width} h-${height}`}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
};

export const GithubIcon = ({ height = "5", width = "5" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`text-gray-400 w-${width} h-${height}`}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
};

export const TimeIcon = ({ height = "5", width = "5" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={`text-gray-400 w-${width} h-${height}`}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
