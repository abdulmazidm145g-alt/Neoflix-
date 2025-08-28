export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          {/* Logo */}
          <div className="text-4xl font-bold bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent mb-4">
            NEOFLIX
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground mb-8 text-pretty">Your favourite all movies are here</p>

          {/* Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <div className="text-center">
              <h3 className="font-semibold mb-2">About</h3>
              <p className="text-sm text-muted-foreground">Powered by Movies Verse BD</p>
            </div>

            <div className="text-center">
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-sm text-muted-foreground">01874778622</p>
            </div>

            <div className="text-center">
              <h3 className="font-semibold mb-2">Telegram Channel</h3>
              <a
                href="https://t.me/MVBDN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Join Our Channel
              </a>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="border-t border-border pt-8">
            <h4 className="font-semibold mb-4">Privacy & Policy</h4>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              At Neoflix, we are committed to protecting your privacy and ensuring a secure streaming experience. We
              collect minimal personal information necessary to provide our services and never share your data with
              third parties without your consent. Your viewing preferences and account information are encrypted and
              stored securely. We use cookies to enhance your browsing experience and provide personalized
              recommendations. By using our platform, you agree to our terms of service and privacy practices. For any
              privacy concerns or data requests, please contact our support team.
            </p>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
            <p>&copy; 2025 Neoflix. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
