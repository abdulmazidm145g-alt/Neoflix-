"use client"

import { X, Play, Heart, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useState } from "react"

interface Movie {
  id: string
  title: string
  poster: string
  rating: number
  year: number
  genre: string
  description: string
  embedUrl: string
}

interface MovieModalProps {
  movie: Movie | null
  isOpen: boolean
  onClose: () => void
}

export default function MovieModal({ movie, isOpen, onClose }: MovieModalProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (!movie) return null

  const handleWatchNow = () => {
    setIsPlaying(true)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-card border-border p-0">
        <div className="relative">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>

          {/* Video player or poster */}
          <div className="aspect-video relative overflow-hidden rounded-t-lg">
            {isPlaying ? (
              <iframe
                src={movie.embedUrl}
                className="w-full h-full"
                allowFullScreen
                frameBorder="0"
                title={movie.title}
              />
            ) : (
              <>
                <img
                  src={movie.poster || "/placeholder.svg"}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button
                    onClick={handleWatchNow}
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <Play className="w-5 h-5 mr-2 fill-white" />
                    Watch Now
                  </Button>
                </div>
              </>
            )}
          </div>

          {/* Movie details */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-balance mb-2">{movie.title}</h2>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <span>{movie.year}</span>
                  <span>•</span>
                  <span>{movie.genre}</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span>{movie.rating}</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-pretty">{movie.description}</p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col space-y-2 md:ml-6">
                <Button
                  onClick={handleWatchNow}
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-2 font-semibold"
                >
                  <Play className="w-4 h-4 mr-2 fill-white" />
                  Watch Now
                </Button>
                <Button variant="outline" className="px-6 py-2 bg-transparent">
                  <Heart className="w-4 h-4 mr-2" />
                  Add to Favorites
                </Button>
                <Button variant="outline" className="px-6 py-2 bg-transparent">
                  <Clock className="w-4 h-4 mr-2" />
                  Watch Later
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
