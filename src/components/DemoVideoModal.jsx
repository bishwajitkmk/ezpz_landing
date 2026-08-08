import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import demoVideo from "../assets/video/demo_video.mp4";

const DemoVideoModal = ({ isOpen, onClose }) => {
  const videoRef = useRef(null);
  const { content } = useLanguage();

  // Close on Escape, and keep the page behind the overlay from scrolling.
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  // Autoplay from the start every time the modal opens. Browsers block
  // unmuted autoplay, so fall back to showing controls if the promise rejects.
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.currentTime = 0;

    const playPromise = video.play();

    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={content.hero.videoTitle}
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-slate-950/80
            backdrop-blur-sm
            p-4
            sm:p-6
          "
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
            className="
              relative
              w-full
              max-w-4xl
              rounded-2xl
              overflow-hidden
              bg-black
              shadow-2xl
            "
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={content.hero.videoClose}
              className="
                absolute
                top-3
                right-3
                z-10
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-black/60
                text-white
                backdrop-blur
                transition-colors
                hover:bg-black/80
              "
            >
              <X className="h-5 w-5" />
            </button>

            <video
              ref={videoRef}
              src={demoVideo}
              controls
              playsInline
              preload="metadata"
              className="block h-auto max-h-[80vh] w-full bg-black"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoVideoModal;
