import { useState, useContext } from "react"
import { Dialog, Box, Typography, styled, InputBase, TextField, Button } from "@mui/material"
import { Close, DeleteOutline } from "@mui/icons-material"
import useApi from "../hooks/useApi"
import { API_URLS } from "../services/api.urls"
import { UserContext } from "../App"

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
    const { username } = useContext(UserContext)
    const [data, setData] = useState({ recipient: "", subject: "", body: "" })
    const sentEmailService = useApi(API_URLS.saveSentEmail)

    const config = {
        Host: process.env.REACT_APP_EMAIL_HOST,
        Username: process.env.REACT_APP_EMAIL_USERNAME,
        Password: process.env.REACT_APP_EMAIL_PASSWORD,
        Port: process.env.REACT_APP_EMAIL_PORT
    }

    const closeComposeMail = (e) => {
        e.preventDefault()
        setDialogBox(false)
    }

    const sendMail = (e) => {
        e.preventDefault()
        if (window.Email) {
            window.Email.send({
                ...config,
                To: data.recipient,
                From: username.email,
                Subject: data.subject,
                Body: data.body
            }).then(
                message => alert(message)
            );
        }
        const payload = {
            to: data.recipient,
            from: username.email,
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: username.imageURL,
            name: username.name,
            starred: false,
            type: 'sent'
        }

        sentEmailService.call(payload)
        if (!sentEmailService.error) {
            setDialogBox(false)
            setData({})
        } else {

        }

        setDialogBox(false)
    }

    const onValueChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

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