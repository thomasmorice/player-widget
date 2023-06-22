import Image from "next/image";

type ButtonProps = {
  icon:
    | "play"
    | "pause"
    | "next-track"
    | "previous-track"
    | "backward-15sec"
    | "forward-30sec";
  onClick?: () => void;
};

export default function Button({ icon, onClick }: ButtonProps) {
  return (
    <div
      onClick={onClick}
      className="player-button cursor-pointer rounded-full p-2"
    >
      <Image
        width={24}
        height={24}
        alt={`Control ${icon}`}
        src={`/icons/${icon}.svg`}
      ></Image>
    </div>
  );
}
