import ClockLoader from "react-spinners/ClockLoader";

const override = {
    display: "block",
    margin: "120px auto",
    borderColor: "red",
};

const Spinner = (loading) => {
    return (
        <ClockLoader
            color={"#6466F1"}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};

export default Spinner;

