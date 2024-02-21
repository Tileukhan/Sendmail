const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tleukhan3@gmail.com',
    pass: 'krow auuc orwx ljhc'
  }
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: 'tleukhan3@gmail.com',
    to,
    subject,
    text
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error.message);
  }
};
sendEmail('smarzhan1961@gmail.com', 'Test Subject', 'Hello, my name is TIleukhan!Nice to meet u!');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to get user input and send email
const getUserInputAndSendEmail = async () => {
  try {
    const to = await new Promise((resolve) => rl.question('Recipient email: ', resolve));
    const subject = await new Promise((resolve) => rl.question('Email subject: ', resolve));
    const text = await new Promise((resolve) => rl.question('Email body: ', resolve));

    // Call the email sending function with user input
    await sendEmail(to, subject, text);

    // Close the readline interface
    rl.close();
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Call the function to get user input and send email
getUserInputAndSendEmail();
