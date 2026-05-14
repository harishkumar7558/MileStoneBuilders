

import React, { useState, useEffect } from "react";
// Replace this with your actual logo import:
import logo from "@/assets/milestoneGroups.png";

const LogoLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <>
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes orb-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.1); }
        }
        @keyframes orb-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-15px, 15px) scale(0.9); }
        }
        @keyframes logo-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .ml-loader-wrap {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #fef9ec 0%, #fff7ed 40%, #fef3c7 70%, #fde68a 100%);
          overflow: hidden;
          font-family: 'Segoe UI', system-ui, sans-serif;
        }

        .ml-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          pointer-events: none;
        }
        .ml-orb-1 {
          width: 50vw;
          height: 50vw;
          max-width: 500px;
          max-height: 500px;
          background: rgba(251, 191, 36, 0.22);
          top: -80px;
          left: -80px;
          animation: orb-drift-1 6s ease-in-out infinite;
        }
        .ml-orb-2 {
          width: 40vw;
          height: 40vw;
          max-width: 400px;
          max-height: 400px;
          background: rgba(249, 115, 22, 0.16);
          bottom: -60px;
          right: -60px;
          animation: orb-drift-2 8s ease-in-out infinite;
        }
        .ml-orb-3 {
          width: 30vw;
          height: 30vw;
          max-width: 300px;
          max-height: 300px;
          background: rgba(245, 158, 11, 0.14);
          top: 45%;
          left: 60%;
          animation: orb-drift-1 5s ease-in-out infinite reverse;
        }

        .ml-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          animation: fade-in-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
          width: 100%;
          height: 100%;
        }

        /* Full screen logo container */
        .ml-logo-fullscreen {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          position: relative;
        }

        /* Main logo image - fills the screen but maintains aspect ratio */
        .ml-logo-main {
          max-width: 85vw;
          max-height: 85vh;
          width: auto;
          height: auto;
          object-fit: contain;
          animation: logo-float 3.2s ease-in-out infinite;
          filter: drop-shadow(0 8px 24px rgba(217, 119, 6, 0.25));
          position: relative;
          z-index: 2;
        }

        /* Decorative rings behind the logo */
        .ml-ring-background {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70vw;
          height: 70vw;
          max-width: 600px;
          max-height: 600px;
          border-radius: 50%;
          border: 2px dashed rgba(217, 119, 6, 0.2);
          animation: spin-slow 12s linear infinite;
          pointer-events: none;
        }

        .ml-ring-background-2 {
          width: 55vw;
          height: 55vw;
          max-width: 480px;
          max-height: 480px;
          border: 1.5px dashed rgba(251, 191, 36, 0.3);
          animation: spin-reverse 8s linear infinite;
        }

        .ml-ring-background-3 {
          width: 85vw;
          height: 85vw;
          max-width: 750px;
          max-height: 750px;
          border: 1px dotted rgba(217, 119, 6, 0.15);
          animation: spin-slow 20s linear infinite;
        }

        /* Pulse rings */
        .ml-pulse-ring-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60vw;
          height: 60vw;
          max-width: 550px;
          max-height: 550px;
          border-radius: 50%;
          border: 2px solid rgba(217, 119, 6, 0.15);
          animation: pulse-ring 2.4s ease-out infinite;
          pointer-events: none;
        }
        .ml-pulse-ring-bg-2 {
          animation-delay: 1.2s;
        }

        /* Loading text at bottom */
        .ml-loading-footer {
          position: absolute;
          bottom: 40px;
          left: 0;
          right: 0;
          text-align: center;
          z-index: 3;
        }

        .ml-dots {
          display: flex;
          gap: 6px;
          align-items: center;
          justify-content: center;
          height: 20px;
          margin-bottom: 8px;
        }

        .ml-dot {
          width: 5px;
          height: 16px;
          border-radius: 99px;
          background: #d97706;
          animation: dot-bounce 1.2s ease-in-out infinite;
        }

        @keyframes dot-bounce {
          0%, 80%, 100% { transform: scaleY(0.4); opacity: 0.4; }
          40% { transform: scaleY(1); opacity: 1; }
        }

        .ml-dot:nth-child(1) { animation-delay: 0s; }
        .ml-dot:nth-child(2) { animation-delay: 0.15s; }
        .ml-dot:nth-child(3) { animation-delay: 0.3s; }

        .ml-loading-text {
          font-size: 12px;
          color: #b45309;
          letter-spacing: 3px;
          text-transform: uppercase;
          opacity: 0.7;
          font-weight: 500;
        }

        /* Optional brand text */
        .ml-brand {
          position: absolute;
          top: 30px;
          left: 0;
          right: 0;
          text-align: center;
          font-size: 18px;
          font-weight: 600;
          background: linear-gradient(90deg, #92400e, #b45309, #d97706, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0.8;
          letter-spacing: 2px;
          z-index: 3;
        }

        @keyframes dot-bounce {
          0%, 80%, 100% { transform: scaleY(0.4); opacity: 0.4; }
          40% { transform: scaleY(1); opacity: 1; }
        }
      `}</style>

      <div className="ml-loader-wrap">
      

        {/* Center content */}
        <div className="ml-center">
        

          {/* Full screen logo */}
          <div className="ml-logo-fullscreen">
            <img
              src={logo}
              alt="Milestone Builders"
              className="ml-logo-main"
            />
          </div>

      
        </div>
      </div>
    </>
  );
};

export default LogoLoading;
