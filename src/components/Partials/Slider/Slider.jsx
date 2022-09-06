import { useState } from "react";
import styles from "./Slider.module.scss";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

//props {slides}
export const Slider = ({ slides }) => {
  // currentIndex is the index of our slidepicture
  const [currentIndex, setCurrentIndex] = useState(0);
  //setting the pictures for background image
  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    // if we are on the first than we take the last index, otherwise just -1
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    // if it is the last index, we jump to first, or else just add one
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <section className={styles.sliderwrapper}>
      {/* react icons for arrow left and right, with onclick event to change the index of photo*/}
      <BsFillArrowLeftCircleFill
        className={styles.leftarrow}
        onClick={goToPrevious}
      />
      {/* setting the pictures that are coming from url to be background of the section */}
      {/* in the parent we will specify the width and height */}
      <section style={slideStyles} className={styles.slidestyles}></section>
      <BsFillArrowRightCircleFill
        className={styles.rightarrow}
        onClick={goToNext}
      />
    </section>
  );
};
