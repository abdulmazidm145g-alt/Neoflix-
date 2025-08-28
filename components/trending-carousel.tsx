"use client"

import { useState, useEffect } from "react"

interface Movie {
  id: string
  title: string
  poster: string
  rating: number
  year: number
  genre: string
  description: string
  embedUrl: string
  language?: string
  quality?: string
}

interface TrendingCarouselProps {
  movies: Movie[]
  onMovieClick: (movie: Movie) => void
}

export default function TrendingCarousel({ movies, onMovieClick }: TrendingCarouselProps) {
  const [currentSet, setCurrentSet] = useState(0)
  const [isSliding, setIsSliding] = useState(false)

  const movieSets = []
  for (let i = 0; i < movies.length; i += 3) {
    movieSets.push(movies.slice(i, i + 3))
  }

  useEffect(() => {
    if (movieSets.length <= 1) return

    const interval = setInterval(() => {
      setIsSliding(true)

      setTimeout(() => {
        setCurrentSet((prev) => (prev + 1) % movieSets.length)
        setIsSliding(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [movieSets.length])

  const currentMovies = movieSets[currentSet] || []
  const nextMovies = movieSets[(currentSet + 1) % movieSets.length] || []

  return (
    <div className="relative overflow-hidden">
      <div
        className={`grid grid-cols-3 gap-3 md:gap-6 transition-transform duration-500 ease-in-out ${
          isSliding ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
        }`}
      >
        {currentMovies.map((movie, index) => (
          <div key={`current-${movie.id}-${index}`} className="relative">
            <div
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => onMovieClick(movie)}
            >
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-card shadow-lg">
                <img
                  src={movie.poster || "/placeholder.svg"}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                <div className="absolute top-2 left-2 bg-red-600/90 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                  {movie.language || "EN"}
                </div>

                <div className="absolute top-2 right-2 bg-yellow-600/90 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                  {movie.quality || "HD"}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-sm md:text-base line-clamp-2 mb-1">{movie.title}</h3>
                  <p className="text-xs text-gray-300">
                    {movie.year} • {movie.genre}
                  </p>
                </div>
              </div>
              <div className="mt-2 px-1">
                <h3 className="text-sm md:text-base font-medium text-foreground line-clamp-2">{movie.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isSliding && (
        <div className="absolute inset-0 grid grid-cols-3 gap-3 md:gap-6 transition-transform duration-500 ease-in-out translate-x-full animate-in slide-in-from-right-full">
          {nextMovies.map((movie, index) => (
            <div key={`next-${movie.id}-${index}`} className="relative">
              <div
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => onMovieClick(movie)}
              >
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-card shadow-lg">
                  <img
                    src={movie.poster || "/placeholder.svg"}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  <div className="absolute top-2 left-2 bg-red-600/90 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                    {movie.language || "EN"}
                  </div>

                  <div className="absolute top-2 right-2 bg-yellow-600/90 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                    {movie.quality || "HD"}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-sm md:text-base line-clamp-2 mb-1">{movie.title}</h3>
                    <p className="text-xs text-gray-300">
                      {movie.year} • {movie.genre}
                    </p>
                  </div>
                </div>
                <div className="mt-2 px-1">
                  <h3 className="text-sm md:text-base font-medium text-foreground line-clamp-2">{movie.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
