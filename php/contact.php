<?php
/**
 * Procesador del formulario de contacto
 * 
 * Este script maneja el envío de correos electrónicos desde el formulario de contacto
 * y proporciona respuestas JSON para la interfaz AJAX
 */

// Configuración
$config = [
    'recipient_email' => 'patrice@mininginvestmentschile.com',
    'recipient_name' => 'Meza & Pierre',
    'subject_prefix' => '[Contacto Web] ',
    'success_message' => 'Mensaje enviado correctamente. Nos pondremos en contacto pronto.',
    'error_message' => 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'
];

// Función para sanitizar entradas
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Función para validar email
function isValidEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Función para enviar respuesta JSON
function sendJsonResponse($success, $message = '') {
    header('Content-Type: application/json');
    echo json_encode([
        'success' => $success,
        'message' => $message
    ]);
    exit;
}

// Verificar si es una solicitud POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJsonResponse(false, 'Método no permitido');
}

// Verificar campos requeridos
$requiredFields = ['name', 'email', 'message'];
foreach ($requiredFields as $field) {
    if (!isset($_POST[$field]) || empty($_POST[$field])) {
        sendJsonResponse(false, 'Por favor, completa todos los campos requeridos');
    }
}

// Sanitizar y validar entradas
$name = sanitizeInput($_POST['name']);
$email = sanitizeInput($_POST['email']);
$message = sanitizeInput($_POST['message']);

// Validar email
if (!isValidEmail($email)) {
    sendJsonResponse(false, 'Por favor, ingresa un correo electrónico válido');
}

// Preparar el correo electrónico
$subject = $config['subject_prefix'] . 'Mensaje de ' . $name;
$headers = [
    'From' => $email,
    'Reply-To' => $email,
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/html; charset=UTF-8'
];

// Construir el cuerpo del correo
$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f5f5f5; padding: 10px; border-bottom: 1px solid #ddd; }
        .content { padding: 20px 0; }
        .footer { font-size: 12px; color: #777; border-top: 1px solid #ddd; padding-top: 10px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>Nuevo mensaje de contacto</h2>
        </div>
        <div class='content'>
            <p><strong>Nombre:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Mensaje:</strong></p>
            <p>" . nl2br($message) . "</p>
        </div>
        <div class='footer'>
            <p>Este mensaje fue enviado desde el formulario de contacto en mininginvestmentschile.com</p>
            <p>Fecha: " . date('Y-m-d H:i:s') . "</p>
        </div>
    </div>
</body>
</html>
";

// Intentar enviar el correo
try {
    // Usar mail() para entornos cPanel
    $mailSent = mail(
        $config['recipient_email'],
        $subject,
        $emailBody,
        implode("\r\n", array_map(
            function ($v, $k) { return "$k: $v"; },
            $headers,
            array_keys($headers)
        ))
    );
    
    if ($mailSent) {
        // Registrar el envío exitoso
        error_log("Correo enviado correctamente a {$config['recipient_email']} desde {$email}");
        
        // Enviar respuesta de éxito
        sendJsonResponse(true, $config['success_message']);
    } else {
        // Registrar el error
        error_log("Error al enviar correo a {$config['recipient_email']} desde {$email}");
        
        // Enviar respuesta de error
        sendJsonResponse(false, $config['error_message']);
    }
} catch (Exception $e) {
    // Registrar la excepción
    error_log("Excepción al enviar correo: " . $e->getMessage());
    
    // Enviar respuesta de error
    sendJsonResponse(false, $config['error_message']);
}
