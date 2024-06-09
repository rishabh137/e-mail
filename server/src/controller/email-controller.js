import Email from "../model/email.js"

export const saveSentEmails = (req, res) => {
    try {
        const email = new Email(req.body)
        email.save()

        res.status(200).json('email saved successfully')
    } catch (err) {
        res.status(500).json(err.message)
    }
}