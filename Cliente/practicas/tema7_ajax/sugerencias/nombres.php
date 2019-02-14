<?php
header('Content-Type: text/html; charset=utf-8');

$alumnos = array(
    'José Manuel Bravo',
    'Guillermo Boquizo',
    'Rafa García',
    'Francisco Ramírez',
    'José María Romero',
    'Jesús Mejías',
    'Rafael Sojo',
    'Javier González',
    'Marcos Gallardo',
    'Mario Navarro',
    'José Rafael Álvarez',
    'Angelo Barbara',
);

if(isset($_GET['coincidencia'])){
    $arrayCoincidencia = array();
    $nombre = $_GET['coincidencia'];
    foreach ($alumnos as $key=>$alumno) {
        if(preg_match("/".$nombre."/i"))
            array_push($arrayCoincidencia,$alumno);
    }
    if(empty($arrayCoincidencia))
        array_push($arrayCoincidencia,"Sin coincidencias");
    echo json_encode(getAlumnos($array, $_GET['palabra']));
}