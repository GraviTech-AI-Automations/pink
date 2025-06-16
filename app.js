function App() {
    try {
        const [isLoaded, setIsLoaded] = React.useState(false);

        React.useEffect(() => {
            // Ensure all components are loaded before showing content
            const timer = setTimeout(() => {
                setIsLoaded(true);
                lucide.createIcons();
            }, 100);

            return () => clearTimeout(timer);
        }, []);

        useScrollAnimation();
        useMouseTilt();
        useParallaxEffect();

        if (!isLoaded) {
            return (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    fontFamily: 'Inter, sans-serif'
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <img 
                            src="https://i.postimg.cc/ZKmLwfHs/Final-Pic-2.png" 
                            alt="GraviTech AI" 
                            style={{ width: '60px', height: '60px', margin: '0 auto 20px', objectFit: 'contain' }}
                        />
                        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>GraviTech AI</h1>
                        <p>Loading...</p>
                    </div>
                </div>
            );
        }

        return (
            <div data-name="app" data-file="app.js" className="min-h-screen">
                <Navbar />
                <Hero />
                <UseCases />
                <Benefits />
                <Integrations />
                <Testimonials />
                <CTA />
                
                <footer className="glassmorphism py-12 px-6 text-center">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <img 
                                src="https://i.postimg.cc/ZKmLwfHs/Final-Pic-2.png" 
                                alt="GraviTech AI Logo"
                                className="w-8 h-8 object-contain"
                            />
                            <div className="text-white font-bold text-xl">
                                GraviTech<span className="text-purple-300"> AI</span>
                            </div>
                        </div>
                        <p className="text-purple-100 mb-6">
                            Empowering businesses with intelligent automation since 2024
                        </p>
                        <div className="flex justify-center space-x-8 mb-6">
                            {['Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
                                <a 
                                    key={item}
                                    href="#"
                                    className="text-purple-300 hover:text-white transition-colors duration-300"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                        <div className="border-t border-white/20 pt-6">
                            <p className="text-purple-200 text-sm">
                                © 2024 GraviTech AI. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        
        // Fallback UI in case of error
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                fontFamily: 'Inter, sans-serif'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <h1>GraviTech AI</h1>
                    <p>Something went wrong. Please refresh the page.</p>
                </div>
            </div>
        );
    }
}

// Ensure DOM is ready before rendering
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        ReactDOM.render(React.createElement(App), document.getElementById('root'));
    });
} else {
    ReactDOM.render(React.createElement(App), document.getElementById('root'));
}
