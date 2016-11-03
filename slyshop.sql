/*
Navicat MySQL Data Transfer

Source Server         : market
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : slyshop

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2016-11-02 17:59:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `category`
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `catename` varchar(50) DEFAULT NULL,
  `cateid` varchar(32) NOT NULL,
  PRIMARY KEY (`cateid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of category
-- ----------------------------

-- ----------------------------
-- Table structure for `product`
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `userid` varchar(32) NOT NULL,
  `manufacturer` varchar(50) DEFAULT NULL,
  `productsize` varchar(20) DEFAULT NULL,
  `updatetime` datetime DEFAULT NULL,
  `entertime` datetime DEFAULT NULL,
  `cateid` varchar(32) DEFAULT NULL,
  `productname` varchar(50) DEFAULT NULL,
  `productid` varchar(32) NOT NULL,
  PRIMARY KEY (`productid`),
  KEY `userid` (`userid`),
  KEY `cateid` (`cateid`),
  CONSTRAINT `cateid` FOREIGN KEY (`cateid`) REFERENCES `category` (`cateid`),
  CONSTRAINT `userid` FOREIGN KEY (`userid`) REFERENCES `userinfo` (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of product
-- ----------------------------

-- ----------------------------
-- Table structure for `purchace`
-- ----------------------------
DROP TABLE IF EXISTS `purchace`;
CREATE TABLE `purchace` (
  `customer` varchar(20) DEFAULT NULL,
  `buytime` datetime DEFAULT NULL,
  `place` varchar(50) DEFAULT NULL,
  `price` double(10,2) DEFAULT NULL,
  `pnum` int(11) DEFAULT NULL,
  `productid` varchar(32) DEFAULT NULL,
  `id` varchar(32) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productid` (`productid`),
  CONSTRAINT `productid` FOREIGN KEY (`productid`) REFERENCES `product` (`productid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of purchace
-- ----------------------------

-- ----------------------------
-- Table structure for `userinfo`
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(20) CHARACTER SET latin1 DEFAULT NULL,
  `level` varchar(2) CHARACTER SET latin1 DEFAULT NULL,
  `username` varchar(20) CHARACTER SET latin1 NOT NULL,
  `userid` varchar(32) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('小菜', 'fqy921008', '1', 'cj921008', '001');
