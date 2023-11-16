export default function PrimaryButton() {
  return (
    <button className="relative p-2 rounded m-2 bg-[#004634] text-slate-50 w-4/5">
      <span>Næste Step</span>
      <svg className="absolute top-[15%] right-[5%]" width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.6809 27.091C11.0547 27.091 8.48739 26.3123 6.30374 24.8532C4.12009 23.3941 2.41814 21.3203 1.41312 18.894C0.408096 16.4676 0.145137 13.7978 0.657495 11.222C1.16985 8.64618 2.43452 6.28017 4.29156 4.42313C6.78177 1.93292 10.1592 0.533936 13.6809 0.533936C17.2026 0.533936 20.5801 1.93292 23.0703 4.42313C25.5605 6.91335 26.9595 10.2908 26.9595 13.8125C26.9595 17.3342 25.5605 20.7116 23.0703 23.2018C21.8401 24.4387 20.3768 25.4193 18.7652 26.0869C17.1535 26.7545 15.4254 27.0958 13.6809 27.091ZM13.6809 2.30443C7.33539 2.30443 2.17286 7.46696 2.17286 13.8125C2.17286 20.158 7.33539 25.3205 13.6809 25.3205C20.0264 25.3205 25.189 20.158 25.189 13.8125C25.189 7.46696 20.0264 2.30443 13.6809 2.30443Z"
          fill="#F6F6F6"
        />
        <path d="M12.0936 20.635L10.8418 19.3832L16.4124 13.8124L10.8418 8.2417L12.0936 6.98987L18.9162 13.8124L12.0936 20.635Z" fill="#F6F6F6" />
      </svg>
    </button>
  );
}
