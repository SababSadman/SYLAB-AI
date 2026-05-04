export const slideVariants = {
    enter: (direction = 1) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.9,
        rotateY: direction > 0 ? 10 : -10
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        scale: 1,
        rotateY: 0,
        transition: {
            type: "spring",
            stiffness: 450,
            damping: 35,
            mass: 0.8,
            opacity: { duration: 0.3 }
        }
    },
    exit: (direction = 1) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.9,
        rotateY: direction < 0 ? 10 : -10,
        transition: {
            type: "spring",
            stiffness: 550,
            damping: 45
        }
    })
};

export const pageFlipVariants = {
    enter: (direction = 1) => ({
        rotateY: direction > 0 ? 90 : -90,
        opacity: 0,
        scale: 0.95,
        x: direction > 0 ? 50 : -50
    }),
    center: {
        rotateY: 0,
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            rotateY: {
                type: "spring",
                stiffness: 300,
                damping: 30
            },
            duration: 0.4
        }
    },
    exit: (direction = 1) => ({
        rotateY: direction < 0 ? -90 : 90,
        opacity: 0,
        scale: 0.95,
        x: direction < 0 ? -50 : 50
    })
};

export const cubeVariants = {
    enter: (direction = 1) => ({
        rotateX: direction > 0 ? 90 : -90,
        opacity: 0,
        scale: 0.9
    }),
    center: {
        rotateX: 0,
        opacity: 1,
        scale: 1,
        transition: {
            rotateX: {
                type: "spring",
                stiffness: 350,
                damping: 35
            },
            duration: 0.5
        }
    },
    exit: (direction = 1) => ({
        rotateX: direction < 0 ? -90 : 90,
        opacity: 0,
        scale: 0.9
    })
};

export const fadeZoomVariants = {
    enter: {
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)"
    },
    center: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1]
        }
    },
    exit: {
        opacity: 0,
        scale: 1.2,
        filter: "blur(10px)",
        transition: {
            duration: 0.3
        }
    }
};

export const maskRevealVariants = {
    enter: {
        clipPath: "circle(0% at 50% 50%)",
        opacity: 0,
        scale: 1.1
    },
    center: {
        clipPath: "circle(150% at 50% 50%)",
        opacity: 1,
        scale: 1,
        transition: {
            clipPath: { duration: 0.7, ease: [0.77, 0, 0.175, 1] },
            opacity: { duration: 0.4 },
            scale: { duration: 0.7, ease: [0.77, 0, 0.175, 1] }
        }
    },
    exit: {
        clipPath: "circle(0% at 50% 50%)",
        opacity: 0,
        scale: 0.9,
        transition: {
            clipPath: { duration: 0.5, ease: [0.77, 0, 0.175, 1] },
            opacity: { duration: 0.3 }
        }
    }
};

export const parallaxPushVariants = {
    enter: (direction = 1) => ({
        x: direction > 0 ? "100%" : "-100%",
        filter: "brightness(0.7) blur(5px)",
        scale: 1.05
    }),
    center: {
        x: 0,
        filter: "brightness(1) blur(0px)",
        scale: 1,
        transition: {
            x: { type: "spring", stiffness: 200, damping: 25 },
            filter: { duration: 0.5 },
            scale: { duration: 0.5 }
        }
    },
    exit: (direction = 1) => ({
        x: direction < 0 ? "100%" : "-100%",
        filter: "brightness(0.7) blur(5px)",
        scale: 0.95,
        transition: {
            x: { type: "spring", stiffness: 200, damping: 25 },
            filter: { duration: 0.4 }
        }
    })
};

export const exposureWashVariants = {
    enter: {
        opacity: 0,
        filter: "brightness(0.6) saturate(0.5) contrast(1.2) blur(5px)",
    },
    center: {
        opacity: 1,
        filter: "brightness(1) saturate(1) contrast(1) blur(0px)",
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    },
    exit: {
        opacity: 0,
        filter: "brightness(0.6) saturate(0.5) contrast(1.2) blur(5px)",
        transition: {
            duration: 0.4
        }
    }
};

export const warpSpeedVariants = {
    enter: {
        scale: 0.5,
        opacity: 0,
        filter: "blur(10px) contrast(1.5)",
    },
    center: {
        scale: 1,
        opacity: 1,
        filter: "blur(0px) contrast(1)",
        transition: {
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1]
        }
    },
    exit: {
        scale: 2,
        opacity: 0,
        filter: "blur(20px) contrast(1.5) brightness(0.8)",
        transition: {
            duration: 0.5
        }
    }
};

export const lensApertureVariants = {
    enter: {
        clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
        scale: 0.5,
        opacity: 0,
    },
    center: {
        clipPath: "polygon(50% -50%, 150% 38%, 100% 150%, 0% 150%, -50% 38%)",
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: "easeInOut"
        }
    },
    exit: {
        clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)",
        scale: 0.8,
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    }
};

export const liquidMorphVariants = {
    enter: (direction = 1) => ({
        clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)",
        opacity: 0,
        scale: 1.1,
        filter: "blur(10px) contrast(1.1)"
    }),
    center: {
        clipPath: [
            "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)",
            "polygon(50% 5%, 65% 10%, 80% 20%, 90% 35%, 95% 50%, 90% 65%, 80% 80%, 65% 90%, 50% 95%, 35% 90%, 20% 80%, 10% 65%, 5% 50%, 10% 35%, 20% 20%, 35% 10%, 45% 25%, 55% 40%, 45% 55%, 35% 45%, 25% 60%, 40% 75%, 60% 70%, 75% 50%, 55% 25%, 45% 15%, 50% 35%, 60% 50%, 40% 60%, 50% 50%)",
            "polygon(-50% -50%, 150% -50%, 150% 150%, -50% 150%, -50% -50%, 150% -50%, 150% 150%, -50% 150%, -50% -50%, 150% -50%, 150% 150%, -50% 150%, -50% -50%, 150% -50%, 150% 150%, -50% 150%, -50% -50%, 150% -50%, 150% 150%, -50% 150%, -50% -50%, 150% -50%, 150% 150%, -50% 150%, -50% -50%, 150% -50%, 150% 150%, -50% 150%, -50% -50%, 150% -50%)"
        ],
        opacity: 1,
        scale: 1,
        filter: "blur(0px) contrast(1)",
        transition: {
            clipPath: {
                duration: 0.8,
                times: [0, 0.45, 1],
                ease: [0.77, 0, 0.175, 1]
            },
            opacity: { duration: 0.4 },
            scale: { duration: 0.6, ease: "easeOut" },
            filter: { duration: 0.6 }
        }
    },
    exit: (direction = 1) => ({
        clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)",
        opacity: 0,
        scale: 0.95,
        filter: "blur(10px)",
        transition: {
            clipPath: { duration: 0.5, ease: "easeInOut" },
            opacity: { duration: 0.3 }
        }
    })
};

export const getTransition = (index) => {
    const transitions = [
        maskRevealVariants,
        parallaxPushVariants,
        warpSpeedVariants,
        liquidMorphVariants,
        lensApertureVariants,
        exposureWashVariants,
        fadeZoomVariants,
        cubeVariants,
        pageFlipVariants,
        slideVariants
    ];
    return transitions[index % transitions.length];
};
