import { Box, CircularProgress, Typography, styled } from "@mui/material"

const LoaderBar = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40vh"
})

const Loader = () => {
    return (
        <>
            <LoaderBar>
                <CircularProgress />
                <Typography>Loaging...</Typography>
            </LoaderBar>
        </>
    )
}

export default Loader