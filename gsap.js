gsap.to("#ginger", { fill: "orange" })
gsap.to("#ginger", { x: 10, y: -10, scale: 4.2, fill: "black", ease: "elastic" }, 2)
gsap.to("body", { duration: 2, backgroundColor: "white" })
gsap.fromTo("#text", { x: -800, y: 1800 }, { fill: "orange", fontFamily: "fantasy", duration: 3, scale: 8.5, x: 200, y: 1600 }, 20)