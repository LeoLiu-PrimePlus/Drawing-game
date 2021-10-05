import './style.scss';


const ScrollButton = () => {
    const handleScroll = (e) => {
        const targetId = e.target.dataset.targetId;
        if(targetId) {
          const targetElement = document.getElementById(targetId);
          const scrollDistance = targetElement.getBoundingClientRect().top;
          processScroll(scrollDistance);
        }
      }
      
      const processScroll = (dimenY) => {
        __processScroll(dimenY, 0, 1);
      }

      const __processScroll = (distanceLeft, distanceCovered, stepSize) => {
        setTimeout(() => {
          if(distanceLeft > distanceCovered) {
            stepSize = 1.1*stepSize;
          } else {
            stepSize = Math.ceil(0.91*stepSize);
          }
          window.scrollTo(0, distanceCovered);
          if(distanceLeft > 0) {
            __processScroll(distanceLeft - stepSize, distanceCovered + stepSize, stepSize);
          }
        }, 10);
      }

    return (
        <div className="scrollButton bg-primary text-white fs-6" data-target-id="targetId" onClick={handleScroll}>
            bottom
        </div>
    );
}


export default ScrollButton;