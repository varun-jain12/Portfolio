

tsParticles.load("tsparticles", {
    particles: {
        number: {
            value: 200
        },
        color: {
            value: "#FFFAFA",
            animation: {
                enable: true,
                speed: 10,
                sync: false
            }
        },
        shape: {
            type: "circle",
        },
        size: {
            value: 5,
            random: true,
            animation: {
                enable: true,
                speed: 10,
                minimumValue: 0.1,
                sync: false
            }
        },
        links: {
            enable: true,
            distance: 70,
            value: "#FFFAFA",
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
        },
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "bubble"
            },
            onClick: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                links: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 50,
                size: 10,
                duration: 2,
                opacity: 0.8
            },
            repulse: {
                distance: 200
            },
            push: {
                quantity: 4
            },
            remove: {
                quantity: 2
            }
        }
    },
    detectRetina: true,
});

function myFunction(x) {
    x.classList.toggle("change");
  }