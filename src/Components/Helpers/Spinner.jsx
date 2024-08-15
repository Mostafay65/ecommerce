import SyncLoader from "react-spinners/SyncLoader";

const Spinner = () => {
    return (
        <>
            <div className=" w-100 vh-100 position-fixed z-3 bg-white d-flex justify-content-center align-items-center">
                <SyncLoader color={"#088178"} size={20} />
            </div>
        </>
    );
};

export default Spinner;
