import Image from "next/image";
//Componente de Loading 
export const Loading = () => (
    <div className="h-full w-full flex flex-col justify-center items-center">
        <Image
            src="/loading.svg"
            alt="loading"
            width={120}
            height={120}
            className="animate-pulse-duration-500"
        />
    </div>
)