export default function FloatingHearts() {
  return (
    <div className="hearts">
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}