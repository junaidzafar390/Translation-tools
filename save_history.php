<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include 'db_connect.php';

// JavaScript se aane wale JSON data ko read karna
$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data['original_text']) && !empty($data['translated_text'])) {
    
    // Data ko secure karna taake SQL injection na ho
    $original = mysqli_real_escape_string($conn, $data['original_text']);
    $translated = mysqli_real_escape_string($conn, $data['translated_text']);
    
    // Aap ki schema file ke mutabiq values (Abhi testing ke liye user_index 1 rakh rahe hain)
    $user_id = 1; 
    $translation_id = rand(1000, 9999); // Temporary ID
    $action = "translate";

    // Aap ki schema.sql ke mutabiq INSERT query
    $query = "INSERT INTO translation_history (user_id, translation_id, action) 
              VALUES ('$user_id', '$translation_id', '$action')";

    if (mysqli_query($conn, $query)) {
        echo json_encode(["status" => "success", "message" => "History saved in MySQL!"]);
    } else {
        echo json_encode(["status" => "error", "message" => mysqli_error($conn)]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Incomplete data"]);
}
?>