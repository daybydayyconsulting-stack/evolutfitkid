import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

// Import images
import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";
import photo4 from "@/assets/gallery/photo-4.jpg";
import photo5 from "@/assets/gallery/photo-5.jpg";
import photo6 from "@/assets/gallery/photo-6.jpg";
import photo7 from "@/assets/gallery/photo-7.jpg";
import photo8 from "@/assets/gallery/photo-8.jpg";
import photo9 from "@/assets/gallery/photo-9.jpg";
import photo10 from "@/assets/gallery/photo-10.jpg";
import photo11 from "@/assets/gallery/photo-11.jpg";
import photo12 from "@/assets/gallery/photo-12.jpg";
import photo13 from "@/assets/gallery/photo-13.jpg";
import photo14 from "@/assets/gallery/photo-14.jpg";
import photo15 from "@/assets/gallery/photo-15.jpg";
import photo16 from "@/assets/gallery/photo-16.jpg";
import photo17 from "@/assets/gallery/photo-17.jpg";
import photo18 from "@/assets/gallery/photo-18.jpg";
import photo19 from "@/assets/gallery/photo-19.jpg";
import photo20 from "@/assets/gallery/photo-20.jpg";
import photo21 from "@/assets/gallery/photo-21.jpg";
import photo22 from "@/assets/gallery/photo-22.jpg";

// Import videos
import video1 from "@/assets/gallery/video-1.mp4";
import video2 from "@/assets/gallery/video-2.mp4";
import video3 from "@/assets/gallery/video-3.mp4";
import video4 from "@/assets/gallery/video-4.mp4";
import video5 from "@/assets/gallery/video-5.mp4";

// Ordered: most eye-catching first (acrobatics, trophies, team)
const photos = [
  photo17, // acrobacia rojo - pirueta
  photo21, // niñas con medallas y trofeo
  photo10, // Belén con diploma en podio
  photo16, // foto equipo con bandera Evolut
  photo11, // equipo abrazándose en podio
  photo19, // acrobacia rojo - pose
  photo9,  // podio con trajes coloridos
  photo18, // acrobacia rojo - suelo
  photo5,  // ceremonia podio
  photo22, // grupo premium adultos
  photo8,  // niña haciendo split
  photo15, // felicitación entre equipos
  photo6,  // niñas en fila
  photo20, // entrega diploma con niñas
  photo14, // Belén con niña en brazos
  photo7,  // abrazo en competición
  photo12, // equipo aplaudiendo
  photo13, // entrega medalla
  photo1, photo2, photo3, photo4,
];
const videos = [video1, video2, video3, video4, video5];

const PhotoWithSkeleton = ({ src, alt }: { src: string; alt: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="aspect-square rounded-2xl overflow-hidden border border-border/30 relative bg-muted">
      {!isLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-2xl" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "w-full h-full object-cover hover:scale-105 transition-all duration-500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
};

const VideoWithSkeleton = ({ src }: { src: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="aspect-[9/16] rounded-2xl overflow-hidden border border-border/30 bg-muted relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Skeleton className="absolute inset-0 w-full h-full rounded-2xl" />
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Play className="w-5 h-5 text-primary/50" />
            </div>
            <span className="text-xs text-muted-foreground">Cargando...</span>
          </div>
        </div>
      )}
      <video
        src={src}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        controls
        preload="metadata"
        playsInline
        muted
        onLoadedData={() => setIsLoaded(true)}
      />
    </div>
  );
};

export const GallerySection = () => {
  return (
    <section className="relative section-padding bg-card/30">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Camera className="w-4 h-4" />
            Nuestra escuela en acción
          </span>
          <h2 className="heading-lg text-foreground">GALERÍA</h2>
        </motion.div>

        {/* Photos Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="px-12 mb-10"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {photos.map((photo, i) => (
                <CarouselItem key={i} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <PhotoWithSkeleton 
                    src={photo} 
                    alt={`Evolut FitKid - Foto ${i + 1}`} 
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-primary/30 text-primary hover:bg-primary/10" />
            <CarouselNext className="border-primary/30 text-primary hover:bg-primary/10" />
          </Carousel>
        </motion.div>

        {/* Videos Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {videos.map((video, i) => (
                <CarouselItem key={i} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <VideoWithSkeleton src={video} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-primary/30 text-primary hover:bg-primary/10" />
            <CarouselNext className="border-primary/30 text-primary hover:bg-primary/10" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
