export const useGetElementWidth = (elementId) => {
  const [elementWidth, setElementWidth] = useState(0);

  useEffect(() => {
    const updateElementWidth = () => {
      const element = document.getElementById(elementId);
      if (element) {
        const width = element.offsetWidth;
        setElementWidth(width);
      }
    };

    // Initial width update
    updateElementWidth();

    // Attach a resize event listener to update width on resize
    window.addEventListener("resize", updateElementWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateElementWidth);
    };
  }, [elementId]);

  return elementWidth;
};
