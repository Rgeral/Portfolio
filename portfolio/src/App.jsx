import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-slate-800 border-solid border-2 border-sky-50">
      <main>
        <section>
          <nav>
            <h1 className="uppercase text-3xl">title</h1>
          </nav>
        </section>
      </main>
    </div>
  );
}

export default App;
