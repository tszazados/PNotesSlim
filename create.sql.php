<?php



/*
Navicat MariaDB Data Transfer

Source Server         : localhost
Source Server Version : 100131
Source Host           : localhost:3306
Source Database       : pnotes

Target Server Type    : MariaDB
Target Server Version : 100131
File Encoding         : 65001

Date: 2018-03-21 19:36:43
*/
$sql= /** @lang MYSQL-SQL */
  <<<CREATE_SQL

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for messages
-- ----------------------------
DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages` (
`id` int(10) NOT NULL AUTO_INCREMENT,
`message` varchar(4096) NOT NULL,
`created` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
`password` varchar(255) NOT NULL DEFAULT '',
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of messages
-- ----------------------------
SET FOREIGN_KEY_CHECKS=1;


CREATE_SQL;


