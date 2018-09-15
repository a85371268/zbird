/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50045
Source Host           : localhost:3306
Source Database       : zbird

Target Server Type    : MYSQL
Target Server Version : 50045
File Encoding         : 65001

Date: 2018-09-15 16:18:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `list`
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(255) default NULL,
  `price` int(11) default NULL,
  `imgs` varchar(255) default NULL,
  `buyNum` int(11) default NULL,
  `talks` int(11) default NULL,
  `class` varchar(255) default NULL,
  `material` varchar(255) default NULL,
  `size` varchar(255) default NULL,
  `stone` varchar(255) default NULL,
  `type` varchar(255) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '北极光 月光女王', '34300', '1-1,1-1b,1-2,1-2b,1-3,1-3b', '2461', '540', '铂900钻石戒指', '铂900', '14.0号', '主钻1颗  0.51克拉', '1');
INSERT INTO `list` VALUES ('2', 'Energy能量', '20900', '2-1,2-1b,2-2,2-2b,2-3,2-3b', '1481', '467', '铂900钻石戒指', '铂900', '12.0号', '主钻1颗  0.47克拉  辅钻40颗  0.13克拉', '1');
INSERT INTO `list` VALUES ('3', '倾心', '4800', '3-1,3-1b,3-2,3-2b,3-3,3-3b', '6183', '252', '18K金钻石戒指', '白18K金', '15.0号', '主钻1颗  0.18克拉', '1');
INSERT INTO `list` VALUES ('4', '拥暖Ⅱ', '10680', '4-1,4-1b,4-2,4-2b,4-3,4-3b', '8166', '591', '18K金钻石戒指', '白18K金', '12.0号', '主钻1颗  0.30克拉  辅钻8颗  0.07克拉', '1');
INSERT INTO `list` VALUES ('5', '永恒之约Ⅱ ', '10580', '5-1,5-1b,5-2,5-2b,5-3,5-3b', '12119', '830', '铂900钻石戒指', '铂900钻石', '12.0号', '主钻1颗  0.30克拉', '1');
INSERT INTO `list` VALUES ('6', '北极光 森林女王 ', '31200', '6-1,6-1b,6-2,6-2b,6-3,6-3b', '701', '190', '铂900钻石戒指', '铂900钻石', '11.0号', '主钻1颗  0.54克拉  辅钻16颗  0.05克拉', '1');
INSERT INTO `list` VALUES ('7', '享悦Ⅱ', '10080', '7-1,7-1b,7-2,7-2b,7-3,7-3b', '4687', '511', '18K金钻石戒指', '白18K金', '11.0号', '主钻1颗  0.30克拉  辅钻14颗  0.06克拉', '1');
INSERT INTO `list` VALUES ('8', '炫动', '9530', '8-1,8-1b,8-2,8-2b,8-3,8-3b', '5238', '231', '18K金钻石戒指', '白18K金', '12.0号', '主钻1颗  0.31克拉', '1');
INSERT INTO `list` VALUES ('9', '典爱', '12020', '9-1,9-1b,9-2,9-2b,9-3,9-3b', '5106', '166', '铂900钻石戒指', '铂900', '12.0号', '主钻1颗 0.33克拉', '1');
INSERT INTO `list` VALUES ('10', '花冠(女戒)', '1899', '10-1,10-1b,10-2,10-2b,10-3,10-3b', '4546', '140', '18K金钻石戒指', '白18K金', '11.0号', '主钻11颗  0.10克拉', '1');
INSERT INTO `list` VALUES ('11', '动心Ⅱ', '10960', '11-1,11-1b,11-2,11-2b,11-3,11-3b', '3879', '345', '18K金钻石戒指', '白18K金', '11.0号', '主钻1颗  0.31克拉  辅钻16颗  0.04克拉', '1');
INSERT INTO `list` VALUES ('12', '爱的季节', '9400', '12-1,12-1b,12-2,12-2b,12-3,12-3b', '3826', '141', '18K金钻石戒指', '白18K金', '10.0号', '主钻1颗  0.40克拉', '1');
INSERT INTO `list` VALUES ('13', 'Passion热情', '21100', '13-1,13-1b,13-2,13-2b,13-3,13-3b', '478', '201', '铂900钻石戒指', '铂900', '12.0号', '主钻1颗  0.45克拉  辅钻50颗  0.15克拉', '1');
INSERT INTO `list` VALUES ('14', '爱的皇冠Ⅱ ', '11460', '14-1,14-1b,14-2,14-2b,14-3,14-3b', '922', '114', '18K金钻石戒指', '白18K金', '11.0号', '主钻1颗  0.30克拉  辅钻44颗  0.16克拉', '1');
INSERT INTO `list` VALUES ('15', '北极光 月光女王Ⅱ', '12240', '15-1,15-1b,15-2,15-2b,15-3,15-3b', '2955', '661', '18K金钻石戒指', '白18K金', '14.0号', '主钻1颗  0.31克拉', '1');
INSERT INTO `list` VALUES ('16', '爱河', '4070', '16-1,16-1b,16-2,16-2b', '2959', '107', '18K金钻石戒指', '白18K金', '10.0号', '男戒　主钻0颗  0.00克拉  女戒　主钻9颗  0.03克拉 辅钻8颗  0.02克拉', '2');
INSERT INTO `list` VALUES ('17', '聆听', '6990', '17-1,17-1b,17-2,17-2b', '3670', '213', '18K金钻石戒指', '白18K金', '10.0号', '男戒　主钻1颗  0.00克拉 女戒　主钻3颗  0.06克拉 辅钻5颗  0.05克拉', '2');

-- ----------------------------
-- Table structure for `store`
-- ----------------------------
DROP TABLE IF EXISTS `store`;
CREATE TABLE `store` (
  `id` int(11) NOT NULL auto_increment,
  `store` varchar(255) default NULL,
  `sId` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of store
-- ----------------------------
INSERT INTO `store` VALUES ('1', '上海', '0');
INSERT INTO `store` VALUES ('2', '上海宏伊旗舰', '1');
INSERT INTO `store` VALUES ('3', '上海五角场万达', '1');
INSERT INTO `store` VALUES ('4', '上海江桥万达', '1');
INSERT INTO `store` VALUES ('5', '上海静安大融城', '1');
INSERT INTO `store` VALUES ('6', '上海青浦吾悦', '1');
INSERT INTO `store` VALUES ('7', '上海颛桥万达', '1');
INSERT INTO `store` VALUES ('8', '广东', '0');
INSERT INTO `store` VALUES ('9', '广州', '8');
INSERT INTO `store` VALUES ('10', '浙江', '0');
INSERT INTO `store` VALUES ('11', '杭州', '10');
INSERT INTO `store` VALUES ('12', '宁波', '10');
INSERT INTO `store` VALUES ('13', '海宁', '10');
INSERT INTO `store` VALUES ('14', '嘉兴', '10');
INSERT INTO `store` VALUES ('15', '绍兴', '10');
INSERT INTO `store` VALUES ('16', '义务', '10');
INSERT INTO `store` VALUES ('17', '金华', '10');
INSERT INTO `store` VALUES ('18', '衢州', '10');
INSERT INTO `store` VALUES ('19', '丽水', '10');
INSERT INTO `store` VALUES ('20', '江苏', '0');
INSERT INTO `store` VALUES ('21', '四川', '0');
INSERT INTO `store` VALUES ('22', '陕西', '0');
INSERT INTO `store` VALUES ('23', '重庆', '0');
INSERT INTO `store` VALUES ('24', '天津', '0');
INSERT INTO `store` VALUES ('25', '河南', '0');
INSERT INTO `store` VALUES ('26', '安徽', '0');
INSERT INTO `store` VALUES ('27', '北京', '0');
INSERT INTO `store` VALUES ('28', '湖北', '0');
INSERT INTO `store` VALUES ('29', '山东', '0');
INSERT INTO `store` VALUES ('30', '湖南', '0');
INSERT INTO `store` VALUES ('31', '河北', '0');
INSERT INTO `store` VALUES ('32', '山西', '0');
INSERT INTO `store` VALUES ('33', '甘肃', '0');
INSERT INTO `store` VALUES ('34', '福建', '0');
INSERT INTO `store` VALUES ('35', '南京', '20');
INSERT INTO `store` VALUES ('36', '常州', '20');
INSERT INTO `store` VALUES ('37', '苏州', '20');
INSERT INTO `store` VALUES ('38', '成都', '21');
INSERT INTO `store` VALUES ('39', '西安', '22');
INSERT INTO `store` VALUES ('40', '重庆', '23');
INSERT INTO `store` VALUES ('41', '重庆大坪龙湖天街', '23');
INSERT INTO `store` VALUES ('42', '天津', '24');
INSERT INTO `store` VALUES ('43', '郑州', '25');
INSERT INTO `store` VALUES ('44', '洛阳', '25');
INSERT INTO `store` VALUES ('45', '合肥', '26');
INSERT INTO `store` VALUES ('46', '马鞍山', '26');
INSERT INTO `store` VALUES ('47', '北京新东安', '27');
INSERT INTO `store` VALUES ('48', '北京朝阳合生汇', '27');
INSERT INTO `store` VALUES ('49', '武汉天地', '28');
INSERT INTO `store` VALUES ('50', '烟台', '29');
INSERT INTO `store` VALUES ('51', '济宁', '29');
INSERT INTO `store` VALUES ('52', '长沙万达', '30');
INSERT INTO `store` VALUES ('53', '邯郸', '31');
INSERT INTO `store` VALUES ('54', '运城', '32');
INSERT INTO `store` VALUES ('55', '兰州甘蓝路', '33');
INSERT INTO `store` VALUES ('56', '厦门', '34');

-- ----------------------------
-- Table structure for `storedeta`
-- ----------------------------
DROP TABLE IF EXISTS `storedeta`;
CREATE TABLE `storedeta` (
  `id` int(11) NOT NULL auto_increment,
  `address` varchar(255) default NULL,
  `time` varchar(255) default NULL,
  `phone` varchar(255) default NULL,
  `sId` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of storedeta
-- ----------------------------
INSERT INTO `storedeta` VALUES ('1', '上海黄浦区南京路299号宏伊广场写字楼8楼', '周一至周四10:30-20:00  周五10:30-20:30  周六至周日10:00-20:30 ', '咨询电话  021-33665178', '2');
INSERT INTO `storedeta` VALUES ('2', '上海杨浦区邯郸路600号五角场万达广场B1层珠宝区', '周一至周日  10:00-22:00', '咨询电话  021-65678373', '3');
INSERT INTO `storedeta` VALUES ('3', '上海市嘉定区江桥镇华江路848号步行街1102号商铺', '周日至周四10:00-22:00  周五至周六  10:00-22:30', '咨询电话  021-69510590', '4');
INSERT INTO `storedeta` VALUES ('4', '上海市静安区泸太路1111弄10号1楼L133-2', '周一至周日10:00-20:00', '咨询电话  021-56379171', '5');
INSERT INTO `storedeta` VALUES ('5', '上海市青浦区淀山湖大道218号青浦吾悦广场1F-018-1', '周一至周日10:00-20:00', '咨询电话  400-880-0051', '6');
INSERT INTO `storedeta` VALUES ('6', '上海市闵行区颛兴东路1570号颛桥万达广场1楼1051C号', '周一至周四、周日10:00-22:00  周五至周六10:00-22:30', '咨询电话  400-880-0051', '7');
INSERT INTO `storedeta` VALUES ('7', '天河区天河路230号万菱汇国际中心35层', '周一至周五10:30-20:00  周六至周日10:00-20:30', '咨询电话  020-85236561', '9');
INSERT INTO `storedeta` VALUES ('8', '杭州市环城北路208号坤和中心 1802室', '周一至周五10:30~20:00  周六至周日10:00-20:30', '咨询电话  0571-89936665', '11');
INSERT INTO `storedeta` VALUES ('9', '宁波市江北区大闸南路500号来福士广场办公楼1806室', '周一至周五10:30~20:00 周六至周日10:00~20:30', '咨询电话  0574-83879552', '12');
INSERT INTO `storedeta` VALUES ('10', '浙江省海宁市工人路85号（海宁人民广场）爱琴海购物公园一楼', '周一至周日：9:30--21:30', '咨询电话  0573-87237303', '13');
INSERT INTO `storedeta` VALUES ('11', '浙江省嘉兴市秀洲区昌盛中路26号经开万达广场1F-1051A', '周一至周日 10:00-22:00', '咨询电话  0573-82820062', '14');
INSERT INTO `storedeta` VALUES ('12', '绍兴市越城区胜利东路360号世茂广场1楼', '周一至周日 10:00-22:00', '咨询电话  0575-88629482', '15');
INSERT INTO `storedeta` VALUES ('13', '浙江省义乌市稠江街道新科路9号万达广场1F', '周日至周四 10:00-22:00 周五至周六 10:00-22:30', '咨询电话  0579-85890179', '16');
INSERT INTO `storedeta` VALUES ('14', '浙江省金华市婺城区西市街159号第一百货2F', '周日-周四：10:00-21:30 周五-周六：10:00-22:00', '咨询电话  0579-83358067', '17');
INSERT INTO `storedeta` VALUES ('15', '浙江省衢州市柯城区县西街16号时代生活广场1楼', '周一至周日 10:00-20:00', '咨询电话  0570-8036899', '18');
INSERT INTO `storedeta` VALUES ('16', '浙江省丽水市花园路16号万地广场1楼', '周一至周日 10:00-21:30', '咨询电话  0578-2138607', '19');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL auto_increment,
  `username` varchar(255) default NULL,
  `password` varchar(255) default NULL,
  `phone` varchar(255) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('9', '', '', '');
INSERT INTO `user` VALUES ('10', 'a85371268', '4db12579370d89fd89d6fe1486de9955', '15756252222');
