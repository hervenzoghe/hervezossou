import { motion } from "motion/react"

export default function AboutPicture () {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center"
        >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl" />
                <motion.div
                    className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800"
                        alt="About Me"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}