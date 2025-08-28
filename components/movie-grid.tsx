"use client"

import MovieCard from "./movie-card"

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

interface MovieGridProps {
  movies: Movie[]
  title: string
  onMovieClick: (movie: Movie) => void
}

export default function MovieGrid({ movies, title, onMovieClick }: MovieGridProps) {
  return (
    <section className="mb-12">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-balance">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
        ))}
      </div>
    </section>
  )
}
