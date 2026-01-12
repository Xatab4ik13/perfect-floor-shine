import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, scroll to that element
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      
      // Wait for content to render, then scroll
      const scrollToElement = () => {
        const element = document.getElementById(elementId);
        if (element) {
          const headerOffset = 80; // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          return true;
        }
        return false;
      };

      // Try immediately, then retry after short delays
      if (!scrollToElement()) {
        const timeouts = [100, 300, 500];
        timeouts.forEach(delay => {
          setTimeout(scrollToElement, delay);
        });
      }
    } else {
      // No hash - scroll to top of page instantly for new page loads
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname, location.hash, location.key]);
}
