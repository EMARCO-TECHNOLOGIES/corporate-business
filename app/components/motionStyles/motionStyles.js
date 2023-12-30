const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.5,
            duration: 0.5
        },
    },
};

const item = {
    hidden: { y: 200, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    },
};

const inputField = {
    hidden: { x: 200, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

export { container, item, inputField }