
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
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
    end: {
        opacity: 0,
        transition: { duration: 2 },
    }
}

export {ScaleIn, FadeIn}