const logger = {
    info: (message: string, ...args: unknown[]) =>{
        console.log(`[INFO] ${new Date().toISOString()} | ${message}`, ...args)
    },
    error:(message: string,...args:unknown[]) =>{
        console.log(`[error] ${new Date().toISOString()} | ${message}`, ...args)
    },
    warn:(message : string, ...args:unknown[]) =>{
        console.log(`[warn] ${new Date().toISOString()} | ${message}`, ...args)
    }
};

export default logger;