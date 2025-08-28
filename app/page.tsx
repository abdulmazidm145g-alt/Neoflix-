"use client"

import { useState } from "react"
import LoadingScreen from "@/components/loading-screen"
import Header from "@/components/header"
import TrendingCarousel from "@/components/trending-carousel"
import MovieGrid from "@/components/movie-grid"
import MovieModal from "@/components/movie-modal"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

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

// Sample movie data with the provided embed URLs
const sampleMovies: Movie[] = [
  {
    id: "1",
    title: "The Dark Knight",
    poster: "/the-dark-knight-inspired-poster.png",
    rating: 9.0,
    year: 2008,
    genre: "Action",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    embedUrl: "https://d-s.io/e/glzbo3zj09fr",
    language: "EN",
    quality: "4K",
  },
  {
    id: "2",
    title: "Inception",
    poster: "/inception-inspired-poster.png",
    rating: 8.8,
    year: 2010,
    genre: "Thriller",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    embedUrl: "https://d-s.io/e/yw1nn1kom5d3",
    language: "EN",
    quality: "HD",
  },
  {
    id: "3",
    title: "Interstellar",
    poster: "/interstellar-inspired-poster.png",
    rating: 8.6,
    year: 2014,
    genre: "Drama",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    embedUrl: "https://d-s.io/e/nyan5nqmz33i",
    language: "EN",
    quality: "4K",
  },
  {
    id: "4",
    title: "Avengers: Endgame",
    poster: "/avengers-endgame-inspired-poster.png",
    rating: 8.4,
    year: 2019,
    genre: "Action",
    description:
      "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more.",
    embedUrl: "https://d-s.io/e/glzbo3zj09fr",
    language: "EN",
    quality: "4K",
  },
  {
    id: "5",
    title: "Parasite",
    poster: "/parasite-movie-poster.png",
    rating: 8.5,
    year: 2019,
    genre: "Thriller",
    description:
      "A poor family schemes to become employed by a wealthy family and infiltrate their household by posing as unrelated, highly qualified individuals.",
    embedUrl: "https://d-s.io/e/yw1nn1kom5d3",
    language: "KR",
    quality: "HD",
  },
  {
    id: "6",
    title: "Joker",
    poster: "/stylized-villain-poster.png",
    rating: 8.4,
    year: 2019,
    genre: "Drama",
    description:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
    embedUrl: "https://d-s.io/e/nyan5nqmz33i",
    language: "EN",
    quality: "4K",
  },
  {
    id: "7",
    title: "Spider-Man: No Way Home",
    poster: "/spiderman-poster.png",
    rating: 8.2,
    year: 2021,
    genre: "Action",
    description:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
    embedUrl: "https://d-s.io/e/glzbo3zj09fr",
    language: "EN",
    quality: "4K",
  },
  {
    id: "8",
    title: "Dune",
    poster: "/dune-movie-poster.png",
    rating: 8.0,
    year: 2021,
    genre: "Drama",
    description:
      "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe.",
    embedUrl: "https://d-s.io/e/yw1nn1kom5d3",
    language: "EN",
    quality: "HD",
  },
  {
    id: "9",
    title: "Top Gun: Maverick",
    poster: "/top-gun-maverick-movie-poster.png",
    rating: 8.3,
    year: 2022,
    genre: "Action",
    description:
      "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates.",
    embedUrl: "https://d-s.io/e/nyan5nqmz33i",
    language: "EN",
    quality: "4K",
  },
  {
    id: "10",
    title: "Everything Everywhere All at Once",
    poster: "/everything-everywhere-poster.png",
    rating: 7.8,
    year: 2022,
    genre: "Comedy",
    description:
      "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led.",
    embedUrl: "https://d-s.io/e/glzbo3zj09fr",
    language: "EN",
    quality: "HD",
  },
]

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(sampleMovies)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie)
  }

  const handleCloseModal = () => {
    setSelectedMovie(null)
  }

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredMovies(sampleMovies)
      return
    }

    const filtered = sampleMovies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.toLowerCase().includes(query.toLowerCase()) ||
        (movie.language && movie.language.toLowerCase().includes(query.toLowerCase())) ||
        (movie.quality && movie.quality.toLowerCase().includes(query.toLowerCase())),
    )
    setFilteredMovies(filtered)
  }

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    if (category === "All") {
      setFilteredMovies(sampleMovies)
    } else {
      const filtered = sampleMovies.filter((movie) => movie.genre.toLowerCase() === category.toLowerCase())
      setFilteredMovies(filtered)
    }
  }

  const trendingMovies = sampleMovies.slice(0, 6)
  const recentMovies = sampleMovies.slice(6)

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header onSearch={handleSearch} onCategorySelect={handleCategorySelect} />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Title */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-primary via-red-500 to-red-600 bg-clip-text text-transparent mb-6 text-balance tracking-tight">
            NEOFLIX
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">Your favourite all movies are here</p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2 overflow-x-auto pb-2">
          {["All", "Action", "Drama", "Comedy", "Thriller", "Romance", "Horror"].map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategorySelect(category)}
              className="whitespace-nowrap hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Trending Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-balance text-primary">TRENDING</h2>
          <TrendingCarousel movies={trendingMovies} onMovieClick={handleMovieClick} />
        </section>

        {/* Recently Uploaded */}
        <MovieGrid movies={recentMovies} title="Recently Uploaded" onMovieClick={handleMovieClick} />

        {/* Filtered Results */}
        {selectedCategory !== "All" && (
          <MovieGrid movies={filteredMovies} title={`${selectedCategory} Movies`} onMovieClick={handleMovieClick} />
        )}
      </main>

      <Footer />

      {/* Movie Modal */}
      <MovieModal movie={selectedMovie} isOpen={!!selectedMovie} onClose={handleCloseModal} />
    </div>
  )
}
