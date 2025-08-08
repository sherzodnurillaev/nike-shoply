'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !role || !message) {
      return setError("Please fill in all fields.");
    }

    if (!validateEmail(email)) {
      return setError("Please enter a valid email.");
    }

    if (message.length < 20) {
      return setError("Message must be at least 50 characters long.");
    }

    setError("");
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      onClose();
      setFullName("");
      setEmail("");
      setRole("");
      setMessage("");
    }, 1000);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 text-[#000] bg-black/50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-white !p-6 rounded-lg max-w-md w-full shadow-xl"
        >
          <h2 className="text-xl font-bold !mb-4">Apply for a position</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="border !p-2 !mb-3 w-full rounded"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="border !p-2 !mb-3 w-full rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <select
              className="border !p-2 !mb-3 w-full rounded"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="QA Tester">QA Tester</option>
            </select>
            <textarea
              placeholder="Message (at least 20 characters)"
              className="border !p-2 !mb-3 w-full rounded"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-600 !mb-3 text-sm">Application sent successfully!</p>}
            <button
              type="submit"
              className="w-full bg-black text-white !py-2 rounded hover:bg-gray-800 transition"
            >
              Send
            </button>
          </form>
          <button
            onClick={onClose}
            className="!mt-4 text-sm text-gray-500 hover:underline"
          >
            Cancel
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
