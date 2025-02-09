import emailjs from 'emailjs-com';

const sendEmail = async (formData) => {
    try {
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message
        };

        await emailjs.send(
            "service_7esw70h", 
            "template_f7km5he", 
            templateParams, 
            "E-z-fbUw7a6Rio8Ou"
        );

        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

export default sendEmail;
