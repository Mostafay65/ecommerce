import SyncLoader from "react-spinners/SyncLoader";

const Spinner = () => {
    return (
        <>
            <div className=" w-100 vh-100 d-flex justify-content-center align-items-center">
                <SyncLoader color={"#333"} size={20} />
            </div>
        </>
    );
};

export default Spinner;
