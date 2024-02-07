const htmlPasswordResetSuccessTemplate=(rollnum,name)=>{
    return(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Changed Notification</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f5f5f5;
            }
            .container {
                max-width: 600px;
                margin: 20px auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            }
            h1 {
                color: #333333;
            }
            p {
                color: #666666;
            }
            .btn {
                display: inline-block;
                padding: 10px 20px;
                background-color: #007bff;
                color: #ffffff;
                text-decoration: none;
                border-radius: 5px;
            }
            .btn:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Password Changed Notification</h1>
            <p>Hello ${name},</p>
            <p>user rollnumber :${rollnum}</p>
            <p>Your account password for MyDSA App has been successfully changed.</p>
            <p>If you did not authorize this change, please contact our support team immediately.</p>
            <p>Thank you for using MyDSA App.</p>
            <a href="https://mydsaapp.onrender.com" class="btn">Visit MyDSA App</a>
        </div>
    </body>
    </html>
    `)
}
module.exports=htmlPasswordResetSuccessTemplate