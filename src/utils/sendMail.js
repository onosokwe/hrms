import sgMail from '@sendgrid/mail'


const sendEmail = async (options) => {

    // console.log(process.env)

    // if(process.env.SENDGRID_API_KEY && process.env.FROM_NAME && process.env.FROM_EMAIL && process.env.TEMPLATE_ID){
        sgMail.setApiKey('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');

        console.log(options)
        
        if(options.email && options.subject && options.message){


            try {
                const msg = {
                    to: options.email,
                    cc: `onosokwe@gmail.com`,
                    from: `Kimberly <info@kimberly-ryan.net>`,
                    subject: options.subject,
                    text: options.message,
                    template_id: 'd-f1db076c312b45f38573d4fcb7e08c4e', //process.env.TEMPLATE_ID,
                    dynamic_template_data: options.dynamic_template_data,
                };
                await sgMail.send(msg);
            } catch (error) {
                console.log(error);
            }
        }
    // }
    
};

export default sendEmail;
