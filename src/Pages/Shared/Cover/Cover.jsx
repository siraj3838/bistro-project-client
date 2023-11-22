import { Parallax } from 'react-parallax';

const Cover = ({img, title}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
       <div className="hero h-[700px]">
            <div className="w-[900px] h-[400px] bg-[#15151599] bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-white">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">Would you like to try a dish?</p>
                    
                </div>
            </div>
        </div>
    </Parallax>
        
    );
};

export default Cover;