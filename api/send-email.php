<?php
/**
 * Mailjet Email API - PHP Version for GoDaddy
 * 
 * Place this file in: /api/send-email.php on your GoDaddy hosting
 * Update script.js to use: https://adhithe.in/api/send-email.php
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$email = isset($data['email']) ? trim($data['email']) : '';

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Valid email is required']);
    exit;
}

// Mailjet API credentials
$apiKey = '10a66691e8291a09b80e293d6b7924e6';
$apiSecret = '139dbc38aadbefa164f7fc5d27fedf9d';

// Email configuration
$senderEmail = 'noreply@adhithe.com';
$senderName = 'Adhithe';
$recipientEmail = 'contact@adhithe.com';
$recipientName = 'Adhithe Team';

// Prepare email data
$emailData = [
    'Messages' => [
        [
            'From' => [
                'Email' => $senderEmail,
                'Name' => $senderName
            ],
            'To' => [
                [
                    'Email' => $recipientEmail,
                    'Name' => $recipientName
                ]
            ],
            'Subject' => 'New Coming Soon Signup - Adhithe',
            'TextPart' => "New email signup: $email\nDate: " . date('Y-m-d H:i:s'),
            'HTMLPart' => "
                <h3>New Coming Soon Signup</h3>
                <p>A new user has signed up to be notified when Adhithe launches:</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Date:</strong> " . date('Y-m-d H:i:s') . "</p>
            "
        ]
    ]
];

// Send notification email
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.mailjet.com/v3.1/send');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_USERPWD, "$apiKey:$apiSecret");
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($emailData));

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode !== 200) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email', 'details' => $response]);
    exit;
}

// Send confirmation email to user
$confirmationData = [
    'Messages' => [
        [
            'From' => [
                'Email' => $senderEmail,
                'Name' => $senderName
            ],
            'To' => [
                [
                    'Email' => $email,
                    'Name' => 'User'
                ]
            ],
            'Subject' => 'Welcome to Adhithe - We\'ll notify you soon!',
            'TextPart' => "Thank you for signing up! We'll notify you when Adhithe launches.",
            'HTMLPart' => "
                <h2>Thank you for signing up!</h2>
                <p>We've received your email and will notify you as soon as Adhithe launches.</p>
                <p>Get ready to learn anything, progressively with AI-powered daily audio lessons.</p>
                <p>— The Adhithe Team</p>
            "
        ]
    ]
];

$ch2 = curl_init();
curl_setopt($ch2, CURLOPT_URL, 'https://api.mailjet.com/v3.1/send');
curl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch2, CURLOPT_POST, true);
curl_setopt($ch2, CURLOPT_USERPWD, "$apiKey:$apiSecret");
curl_setopt($ch2, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
curl_setopt($ch2, CURLOPT_POSTFIELDS, json_encode($confirmationData));

curl_exec($ch2);
curl_close($ch2);

// Success response
echo json_encode([
    'success' => true,
    'message' => 'Email sent successfully'
]);
?>

