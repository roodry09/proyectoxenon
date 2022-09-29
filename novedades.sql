-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 26-08-2022 a las 19:56:50
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `proyecto_final`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(200) NOT NULL,
  `subtitulo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `img_id`, `cuerpo`) VALUES
(1, 'El 11 de Boca con la baja de Rolon', 'Acá, el equipo', NULL, 'El entrenador todavía debe terminar de confirmar el esquema que utilizará: en caso de que sea un 4-3-3 el que tiene más chances de jugar es Norberto Briasco y si apuesta por un 4-4-2 será el Pulpo González el que complete la línea de volantes, mientras que Cristian Pavón y Luis Vázquez serían los únicos dos delanteros.'),
(2, 'Prohibieron el uso de la camiseta del PSG', 'Mirá todas las medidas.', NULL, 'Se viene un nuevo compromiso para el Paris Saint Germain, que este viernes, a las 16, buscará su tercer triunfo al hilo para mantenerse en la punta de la Ligue 1. Sin Lionel Messi, su nueva joya, quien aún continúa poniéndose a punto para su esperado debut, el equipo dirigido por Mauricio Pochettino visitará al Brest en el Francis-le-Blé, en un partido que fue catalogado de alto riesgo en Francia.'),
(10, 'asas', 'das', '', 'das'),
(11, 'foto', 'foto', '', 'foto');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
