
const ScaleIn = {
    start: {
        scale: 0,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.2
        }
    },
    end: {
        scale: 0,
        opacity: 0,
        transition: { duration: 2 },
    }
}

const FadeIn = {
    start: {
        top: "-200px",
        opacity: 0,
    },
    visible: {
        top: "0px",
        opacity: 1,
    },
    end: {
        top: "-200px",
        opacity: 0,
        transition: { duration: 2 },
    }
}

export {ScaleIn, FadeIn}