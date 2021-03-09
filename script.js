const ulSquares = document.querySelector("ul.squares");
 for (let i = 0; i < 70; i++) {

    const random = (min, max) => Math.random() * (max - min) + min;

     const li = document.createElement("li");
     const size = Math.floor(random(30, 100));
     const position = random(-1, 99);
     const delay = random(6, 0.99);
     const duration = random(4, 4);

     li.style.width = `${size}px`;
     li.style.height = `${size}px`;
     li.style.bottom = `-${size}px`;
     li.style.left = `${position}%`;

     li.style.animationDelay = `${delay}s`;
     li.style.animationDurations = `${duration}s`;
     li.style.animationTimingFunctin = `cubic-bezier(${Math.random()}, ${Math.random()},
                                                     ${Math.random()}, ${Math.random()})`;

     ulSquares.appendChild(li);
 }
