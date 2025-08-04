import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters (numbers, symbols, letters, and Japanese characters)
    const matrix = "0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const matrixArray = matrix.split("");

    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    // Initialize drops with random starting positions
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * -100; // Random starting position above screen
    }

    // Drawing function
    const draw = () => {
      // Semi-transparent black background for fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Green text with varying intensities
      ctx.fillStyle = '#00ff88';
      ctx.font = fontSize + 'px monospace';

      // Loop over drops
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        
        // Vary the green intensity for more dynamic effect
        const intensity = Math.random() * 0.5 + 0.5;
        ctx.fillStyle = `rgba(0, 255, 136, ${intensity})`;
        
        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top with random delay
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down with varying speeds
        drops[i] += Math.random() * 0.5 + 0.5;
      }
    };

    // Animation loop
    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-20"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default MatrixRain; 