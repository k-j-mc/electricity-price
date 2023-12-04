import { AtomLoader } from "react-loaders-kit";

const LoadingAtom = () => {
    type TLoading = {
        loading: boolean;
        size: number;
        colors: string[];
    };

    const loaderProps: TLoading = {
        loading: true,
        size: 35,
        colors: ["#5e22f0", "#f6b93b"],
    };

    return (
        <div className="loaderMain">
            <AtomLoader {...loaderProps} />
        </div>
    );
};

export default LoadingAtom;
