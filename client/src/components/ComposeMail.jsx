import { useState } from "react"
import { Dialog, Box, Typography, styled, InputBase, TextField, Button } from "@mui/material"
import { Close, DeleteOutline } from "@mui/icons-material"

const dialogStyle = {
    height: '90%',
    width: '80%',
    maxHeight: '100%',
    maxWidth: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0'
}

const Header = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#f2f6fc',

    '& > p': {
        fontSize: 15,
        fontWeight: 700
    },

    '& > svg': {
        cursor: 'pointer'
    }
})

const RecipientsWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    '& > div': {
        fontSize: 15,
        borderBottom: '1px solid #F5F5F5',
        marginTop: 10
    }
})

const Footer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 15px',

    '& > svg': {
        cursor: 'pointer'
    }
})

const SendButton = styled(Button)({
    background: '#0B57D0',
    color: '#fff',
    fontWeight: 600,
    textTransform: 'none',
    borderRadius: 18,
    width: 100,
    fontSize: 15
})

const ComposeMail = ({ dialogBox, setDialogBox }) => {
    const [data, setData] = useState({ recipient: "", subject: "", body: "" })



    return (
        <Dialog
            open={dialogBox}
            PaperProps={{ sx: dialogStyle }}
        >
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={(e) => closeComposeMail(e)} />
            </Header>

            <RecipientsWrapper>
                <InputBase placeholder="Recipients" name="recipient" onChange={(e) => onValueChange(e)} />
                <InputBase placeholder="Subject" name="subject" onChange={(e) => onValueChange(e)} />
            </RecipientsWrapper>

            <TextField name="body"
                multiline
                rows={27}
                sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none'
                    }
                }}
                onChange={(e) => onValueChange(e)}
            />

            <Footer>
                <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
                <DeleteOutline onClick={() => setDialogBox(false)} />
            </Footer>
        </Dialog>
    )
}

export default ComposeMail