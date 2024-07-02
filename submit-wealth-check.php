<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = $_POST;
    $to = "victorroy@gmail.com";
    $subject = "Financial Wealth Check Form Submission";
    $message = json_encode($data, JSON_PRETTY_PRINT);
    $headers = "From: your-email@gmail.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Form submitted successfully!";
    } else {
        echo "Failed to submit the form.";
    }
} else {
    echo "Invalid request method.";
}
?>