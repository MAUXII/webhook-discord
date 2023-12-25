import React, { useEffect, useState } from 'react';

const Circle: React.FC = () => {
  const [offsetX, setOffsetX] = useState<number>(0);

  const handleMouseMove = (event: MouseEvent) => {
    const maxWidth = window.innerWidth - 50;
    const mouseX = Math.min(Math.max(0, event.clientX), maxWidth);

    // Ajuste o valor conforme necessário para controlar a quantidade de movimento
    const movementScale = 0.05;
    
    setOffsetX((mouseX / maxWidth - 0.5) * movementScale);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);



  return (
    <div className='absolute w-full max-w-[800px] h-[800px] bg-circleBlur rounded-full -translate-y-[100%] blur-[250px] transition-left duration-1000 ease-out'
    style={{
        left: '50%',
        transform: `translate(-50%,-100%) translateX(${offsetX * 500}%)`,
      }}>
        
     </div>
  );
};

export default Circle;