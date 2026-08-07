import Image from "next/image";

type SafeMediaProps = {
  src?: string | null;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  rounded?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** "video" renders a <video> when videoUrl is set; falls back to the image/poster otherwise. */
  type?: "image" | "video";
  videoUrl?: string | null;
  /** Whether this specific instance should actually play (e.g. only the active carousel card). */
  playVideo?: boolean;
  loop?: boolean;
  muted?: boolean;
  objectPosition?: string;
};

const radiusClass = "rounded-[var(--radius-feature)]";

function UnavailableIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="15" rx="1.5" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m3 16 5-4.5 3.5 3L16 10l5 6" />
    </svg>
  );
}

export default function SafeMedia({
  src,
  alt,
  fill = false,
  width,
  height,
  rounded = true,
  priority = false,
  sizes,
  className = "",
  type = "image",
  videoUrl,
  playVideo = true,
  loop = true,
  muted = true,
  objectPosition,
}: SafeMediaProps) {
  const style = objectPosition ? { objectPosition } : undefined;
  const fillPositionClass = fill ? "absolute inset-0 w-full h-full" : "";

  if (type === "video" && videoUrl) {
    return (
      <video
        src={videoUrl}
        poster={src ?? undefined}
        autoPlay={playVideo}
        loop={loop}
        muted={muted}
        playsInline
        className={`object-cover ${fillPositionClass} ${rounded ? radiusClass : ""} ${className}`}
        style={style}
        aria-label={alt}
      />
    );
  }

  if (!src) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-surface-subtle border border-border-subtle text-text-secondary ${fillPositionClass} ${
          rounded ? radiusClass : ""
        } ${className}`}
        style={!fill ? { width, height } : undefined}
        role="img"
        aria-label={alt}
      >
        <UnavailableIcon />
        <span className="text-[11px] uppercase tracking-[0.12em] font-heading font-semibold">
          Image unavailable
        </span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes ?? "100vw"}
        style={style}
        className={`object-cover ${rounded ? radiusClass : ""} ${className}`}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      priority={priority}
      sizes={sizes}
      style={style}
      className={`object-cover ${rounded ? radiusClass : ""} ${className}`}
    />
  );
}
