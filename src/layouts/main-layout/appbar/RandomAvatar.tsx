// RandomAvatar.tsx
const RandomAvatar = () => {
    const randomColor = () => {
      const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0E68C', '#FF33A1'];
      return colors[Math.floor(Math.random() * colors.length)];
    };
  
    const size = 40; // Adjust the size as needed
  
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50" fill={randomColor()} />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          fontSize="20"
        >
          {Math.floor(Math.random() * 100)}
        </text>
      </svg>
    );
  };
  
  export default RandomAvatar;
  