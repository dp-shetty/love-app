import { useState } from "react";

export default function LoveLetter() {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <h2>💌 A Little Note</h2>

      {!open ? (
        <button onClick={() => setOpen(true)}>
          Open My Heart ❤️
        </button>
      ) : (
        <p>
          You make ordinary moments unforgettable.
          Thank you for your kindness, your laughter,
          and the way you brighten my world.
          No matter where life takes us,
          I hope you always remember how deeply appreciated you are.
        </p>
      )}
    </div>
  );
}