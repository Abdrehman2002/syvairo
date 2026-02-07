import React from "react";

function PurpleNeonBlackBackground() {
    return (
        <div className=" inset-0 -z">
            {/* Base dark black-purple background */}
            <div className="absolute inset-0 bg-neutral-950" />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-neutral-950/80 to-black/90" />

            {/* Neon glow blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                {/* Top-left glow */}
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]" />

                {/* Bottom-right glow */}
                <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-fuchsia-500/15 rounded-full blur-[140px]" />

                {/* Extra small neon accent blob */}
                <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
            </div>
        </div>
    );
}

export default PurpleNeonBlackBackground;