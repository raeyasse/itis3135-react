import { useTitle } from "../hooks/useTitle";
import { useState, useEffect } from "react";

export default function Slideshow() {
    useTitle("Raey Assefa's Ambitious Rabbit | ITIS 3135 | Slideshow");
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        fetch("https://api.thedogapi.com/v1/images/search?limit=10")
            .then(response => response.json())
            .then(data => {
                setImages(data);
            });
    }, []);

    useEffect(() => {
        if (isPlaying) {
            const timer = setInterval(() => {
                setCurrentIndex(prev => (prev + 1) % images.length);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [isPlaying, images.length]);

    function handleFirst() { setCurrentIndex(0); }
    function handlePrevious() { setCurrentIndex((currentIndex - 1 + images.length) % images.length); }
    function handleNext() { setCurrentIndex((currentIndex + 1) % images.length); }
    function handleEnd() { setCurrentIndex(images.length - 1); }
    function handlePlay() { setIsPlaying(true); }
    function handleStop() { setIsPlaying(false); }

    return <>
        {images.length === 0 ? (
            <p>Loading...</p>
        ) : (
            <div style={{ textAlign: "center" }}>
                <h2>Dog Image Slideshow</h2>
                <img
                    src={images[currentIndex].url}
                    alt="Dog"
                    style={{
                        width: "500px",
                        height: "400px",
                        objectFit: "cover",
                    }}
                />
                <p>{currentIndex + 1} / {images.length}</p>
                <div className="slideshow-buttons">
                    <button onClick={handleFirst} className="slideshow-btn">First</button>
                    <button onClick={handlePrevious} className="slideshow-btn">Previous</button>
                    <button onClick={handleNext} className="slideshow-btn">Next</button>
                    <button onClick={handleEnd} className="slideshow-btn">End</button>
                    <button onClick={handlePlay} disabled={isPlaying} className="slideshow-btn">Play</button>
                    <button onClick={handleStop} disabled={!isPlaying} className="slideshow-btn">Stop</button>
                </div>
            </div>
        )}
    </>
}