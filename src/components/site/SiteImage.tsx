import type { SitePhoto } from "@/config/business";

/** Shared responsive image treatment; crop and description stay with the content. */
export function SiteImage({
  image,
  className,
  sizes = "100vw",
  priority = false,
}: {
  image: SitePhoto;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      style={{ objectPosition: image.focus ?? "50% 50%" }}
      className={className}
    />
  );
}
