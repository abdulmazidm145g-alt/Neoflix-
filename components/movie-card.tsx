"use client"

import { useState } from "react"
import { Play, Star } from "lucide-react"
import { Card } from "@/components/ui/card"

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

interface MovieCardProps {
  movie: Movie
  onClick: (movie: Movie) => void
}

export default function MovieCard({ movie, onClick }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="relative group cursor-pointer overflow-hidden bg-card border-border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(movie)}
    >
      <div className="aspect-[2/3] relative overflow-hidden">
        <img
          src={movie.poster || "/placeholder.svg"}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-primary/90 rounded-full p-3 transform transition-transform duration-300 hover:scale-110">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
          </div>
        </div>

        {/* Rating badge */}
        <div className="absolute top-2 right-2 bg-black/80 rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <span className="text-xs text-white font-medium">{movie.rating}</span>
        </div>
      </div>

      {/* Movie info */}
      <div className="p-3">
        <h3 className="font-semibold text-sm text-balance line-clamp-2 mb-1">{movie.title}</h3>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{movie.year}</span>
          <span>{movie.genre}</span>
        </div>
      </div>
    </Card>
  )
}
