import React from 'react';
import TextReveal from '@/components/ui/text-reveal';

const Goodbye: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="text-center text-white space-y-4">
        <TextReveal text="
        ✉️faiq55@yahoo.com 
        📱+92-3222339643" />
      </div>
    </div>
  );
};

export default Goodbye;
