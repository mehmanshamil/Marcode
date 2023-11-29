// import React, { useEffect, useState } from 'react';
// import '../../hero.module.css'; 

// const AnimatedComponent = () => {
//   const [animationClass, setAnimationClass] = useState('website');

//   useEffect(() => {
//     const animationInterval = setInterval(() => {
//       setAnimationClass((prevClass) => {
//         switch (prevClass) {
//           case 'website':
//             return 'branding';
//           case 'branding':
//             return 'seo';
//           case 'seo':
//             return 'smm';
//           case 'smm':
//             return 'website';
//           default:
//             return 'website';
//         }
//       });
//     }, 5000);

//     return () => clearInterval(animationInterval);
//   }, []);

//   return (
//     <p className={animationClass}>Branding</p>
//   );
// };

// export default AnimatedComponent;
