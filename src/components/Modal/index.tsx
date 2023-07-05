import React from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ModalOverlay, ModalContent, GlobalStyle } from "./Modal.style";

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const modalVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalTransition = {
        duration: 0.3,
    };

    const overlayTransition = {
        duration: 0.2,
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <ModalOverlay
                        as={motion.div}
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={overlayTransition}
                        onClick={onClose}
                    />
                    <ModalContent
                        as={motion.div}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={modalTransition}
                    >
                        <FaTimes className="close" onClick={onClose} />
                        {children}
                    </ModalContent>
                    <GlobalStyle />
                </>
            )}
        </AnimatePresence>
    );
};

export default Modal;
