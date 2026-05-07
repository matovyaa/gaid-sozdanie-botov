interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageBlock({ src, alt, caption }: ImageBlockProps) {
  return (
    <div className="my-6 sm:my-8">
      <div className="relative rounded-xl overflow-hidden border border-purple-500/30 group">
        <img 
          src={src} 
          alt={alt}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {caption && (
        <p className="text-sm text-gray-400 text-center mt-3 italic px-4">
          {caption}
        </p>
      )}
    </div>
  );
}
