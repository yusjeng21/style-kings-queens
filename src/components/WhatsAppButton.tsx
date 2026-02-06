import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppChatLink } from "@/lib/data";

const WhatsAppButton = () => {
  return (
    <motion.a
      href={getWhatsAppChatLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}>
      <FaWhatsapp className="h-7 w-7" />
      <span className="sr-only">Chat on WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppButton;
