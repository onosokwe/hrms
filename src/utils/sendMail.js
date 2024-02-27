import sgMail from '@sendgrid/mail'


const sendEmail = async (options) => {

    // console.log(process.env)

    // if(process.env.SENDGRID_API_KEY && process.env.FROM_NAME && process.env.FROM_EMAIL && process.env.TEMPLATE_ID){
        sgMail.setApiKey('');

        console.log(options)
        
        if(options.email && options.subject && options.message){


            try {
                const msg = {
                    to: options.email,
                    cc: `onosokwe@gmail.com`,
                    from: `ONOSOKWE <hello@onosokwe.com>`,
                    subject: options.subject,
                    text: options.message,
                    template_id: '', //process.env.TEMPLATE_ID,
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
