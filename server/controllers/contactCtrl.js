const { contactUsEmail } = require("../template/contactFormRes");
const mailSender = require("../utils/mailSenderr");

const contactCtrl = async (req, res) => {
    const { name, email, contact, message,role } = req.body;
    try {
   
        if (!name || !contact ) {
            return res.status(500).send({
                message: "Plase provide all fields",
                success: false
            })
        }

        const emailRes = await mailSender(
            "sales@tradegyan.co",
            // "vikasmaheshwari6267@gmail.com",
             "Your Data send successfully",
            contactUsEmail(name, email, contact, message,role)
        )
        res.status(200).send({
            message: "Email send successfully.Our team will contact you soon!",
            emailRes,
            success: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Error in sending email",
        })
    }
}

module.exports = { contactCtrl }