import React from 'react';

interface HeroBannerProps {
  title: string;
  imageSrc?: string;
}

export function HeroBanner({ 
  title, 
  imageSrc = "https://lh3.googleusercontent.com/aida-public/AB6AXuC4RHDocakL2cES17x1n4vu6JepYDKY2mWGmsaDWWf6bZ-TxSoMkAopU6W4bf_RBClnFDXojmmDI6cvjUJpr1sDhv5DyXlC-StqAixtgCMw9Zw35HFh4ZJnZGc8QBKLFEsaYPGTkebk3x-Bsqrnt2JrNLLbksifQeZORgQAty4LediZI86-GA-UoXKl4sgC-yzvl0pHSKrgo9d53sbpBQe9hr3T886brS4OQadFcSAvRVhjb94TuAAneMz7dfWveIQpRa1ELjPdzk0" 
}: HeroBannerProps) {
  return (
    <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Gradient shadow overlay below the title (running from bottom up) */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-surface/20 z-10"></div>
        <img
          alt={title}
          className="w-full h-full object-cover opacity-60 grayscale"
          src={imageSrc}
        />
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-20 flex flex-col items-center text-center mt-12">
        <h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-on-surface mb-6 leading-tight drop-shadow-2xl">
          {title}
        </h1>
        <div className="h-[3px] w-24 bg-primary/80 rounded-full mx-auto shadow-[0_0_15px_rgba(201,160,80,0.5)]"></div>
      </div>
    </section>
  );
}
