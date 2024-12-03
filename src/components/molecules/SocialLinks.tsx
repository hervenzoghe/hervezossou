import SocialLink from "../atoms/SocialLink"
import { motion } from "motion/react"
import { Github, Linkedin, Mail } from "lucide-react"

export default function SocialLinks () {
    return (
        <motion.div
          className="flex justify-center md:justify-start gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
      >
          <SocialLink href="#" icon={<Github />} label="GitHub" />
          <SocialLink href="#" icon={<Linkedin />} label="LinkedIn" />
          <SocialLink href="#" icon={<Mail />} label="Email" />
      </motion.div>
    )
}