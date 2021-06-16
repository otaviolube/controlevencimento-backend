-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: compet_action
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `companies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `qtd_key` int(11) NOT NULL,
  `qtd_key_using` int(11) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `img_logo` varchar(200) DEFAULT NULL,
  `country` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `corporateName` varchar(100) NOT NULL,
  `fantasyName` varchar(100) NOT NULL,
  `cnpj` varchar(100) NOT NULL,
  `nameContact` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (61,'Compet',0,0,'2019-08-26 19:26:03','2019-09-19 16:05:15','logoBlue.png','Brazil','Espírito Santo','Vila Velha','Compet Engenharia','Compet Engenharia','04509536000198','Leonardo','(27) 99792-5926','leonardo.gomes@competengenharia.com.br','Top model'),(62,'Suzano',0,0,'2019-08-27 20:00:52','2019-09-19 16:04:33','Suzano.bmp','Brazil','Espírito Santo','Vitória','Suzano','Suzano','23132131','Novo','2799999999','suzano@suzano.com.br','Rua teste'),(63,'Garoto',0,0,'2019-08-29 18:11:03','2019-09-19 16:05:26','Logo-Garoto.bmp','Brazil','Espírito Santo','Vila Velha','Garoto','Garoto','13132131','21313','1321','321','213'),(65,'Vale',0,0,'2019-09-18 16:36:23','2019-09-18 16:36:23','Logo-Vale.bmp','3469034','3665361','6319294','Vale','Vale','04509536000198','novo','2799999999','novo@teste.com.br','Rua vale');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `companyId` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `description` varchar(300) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_company_files` (`companyId`),
  CONSTRAINT `fk_company_files` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (5,62,'1567021269261-Certificado.pdf','2019-08-28 19:41:09','2019-08-28 19:41:09','Novo'),(9,61,'1567025056975-CCF13062019.pdf','2019-08-28 20:44:17','2019-08-28 20:44:17','Teste'),(10,61,'1567025057154-CCF13062019_0001.pdf','2019-08-28 20:44:17','2019-08-28 20:44:17','Teste'),(11,61,'1567025057253-Certificado.pdf','2019-08-28 20:44:17','2019-08-28 20:44:17','dfdfd'),(12,61,'1567025057274-Lista de Presença.pdf','2019-08-28 20:44:17','2019-08-28 20:44:17','dfdg'),(19,63,'1567440679179-CCF19022019.pdf','2019-09-02 16:11:19','2019-09-02 16:11:19','Novo anexo');
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `licenses`
--

DROP TABLE IF EXISTS `licenses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `licenses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `companyId` int(11) NOT NULL,
  `name_manager` varchar(100) DEFAULT NULL,
  `email_manager` varchar(150) DEFAULT NULL,
  `contact` varchar(100) DEFAULT NULL,
  `licenseAll` int(11) NOT NULL,
  `startDate` datetime NOT NULL,
  `finishDate` datetime NOT NULL,
  `situation` int(11) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `license_used` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `companyId` (`companyId`),
  CONSTRAINT `fk_company_license` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `licenses`
--

LOCK TABLES `licenses` WRITE;
/*!40000 ALTER TABLE `licenses` DISABLE KEYS */;
INSERT INTO `licenses` VALUES (3,61,'Talles','talles9@gmail.com','+55 (27) 99629-1050',500,'2019-08-27 00:00:00','2020-08-27 00:00:00',1,'2019-08-27 19:45:00','2019-08-27 19:49:43',5),(20,62,'www','talles9@gmil.com','343',2323,'2019-08-01 00:00:00','2019-08-31 00:00:00',1,'2019-08-28 19:41:09','2019-09-06 18:19:15',2);
/*!40000 ALTER TABLE `licenses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modules`
--

DROP TABLE IF EXISTS `modules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `modules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `companyId` int(11) NOT NULL,
  `module` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `companyId` (`companyId`,`module`),
  CONSTRAINT `fk_company_modules` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modules`
--

LOCK TABLES `modules` WRITE;
/*!40000 ALTER TABLE `modules` DISABLE KEYS */;
INSERT INTO `modules` VALUES (1,63,1,'Reunião','2019-08-29 18:29:09','2019-08-29 18:29:09'),(4,63,2,'Integração','2019-08-29 18:39:13','2019-08-29 18:39:13'),(5,63,3,'Escopo e tempo','2019-08-29 18:39:13','2019-08-29 18:39:13'),(6,63,4,'Custo','2019-08-29 18:39:14','2019-08-29 18:39:14'),(7,63,5,'Riscos','2019-08-29 18:39:14','2019-08-29 18:39:14'),(8,63,6,'Ações','2019-08-29 18:39:14','2019-08-29 18:39:14'),(9,63,7,'Partes interessadas','2019-08-29 18:39:14','2019-08-29 18:39:14'),(10,63,8,'Painel de bordo','2019-08-29 18:39:14','2019-08-29 18:39:14'),(12,61,2,'Integração','2019-08-29 18:53:27','2019-08-29 18:53:27'),(13,61,3,'Escopo e tempo','2019-08-29 18:53:27','2019-08-29 18:53:27'),(14,61,4,'Custo','2019-08-29 18:53:27','2019-08-29 18:53:27'),(15,61,5,'Riscos','2019-08-29 18:53:27','2019-08-29 18:53:27'),(16,61,6,'Ações','2019-08-29 18:53:27','2019-08-29 18:53:27'),(17,61,7,'Partes interessadas','2019-08-29 18:53:27','2019-08-29 18:53:27'),(18,61,8,'Painel de bordo','2019-08-29 18:53:27','2019-08-29 18:53:27'),(19,62,2,'Integração','2019-08-29 18:53:36','2019-08-29 18:53:36'),(20,62,3,'Escopo e tempo','2019-08-29 18:53:36','2019-08-29 18:53:36'),(24,61,1,'Reunião','2019-09-02 19:38:18','2019-09-02 19:38:18');
/*!40000 ALTER TABLE `modules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_companies`
--

DROP TABLE IF EXISTS `user_companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user_companies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `companyId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userId` (`userId`,`companyId`),
  KEY `fk_company_id` (`companyId`),
  CONSTRAINT `fk_company_id` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`),
  CONSTRAINT `fk_user_company` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_companies`
--

LOCK TABLES `user_companies` WRITE;
/*!40000 ALTER TABLE `user_companies` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `status` int(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `permission` int(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user` (`user`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (20,'talles','3ea5ff297f4d04392c7913bbec89440f','Talles Rampinelli Siqueira','talles.siqueira@competengenharia.com.br','27996291050',1,'2019-07-22 19:12:40','2019-07-30 18:02:18',1),(35,'talles.siqueira','3ea5ff297f4d04392c7913bbec89440f','Talles Rampinelli Siqueira','talles9@gmail.com','2799999999',1,'2019-07-24 16:11:27','2019-07-24 16:12:26',2),(37,'zezinho','3ea5ff297f4d04392c7913bbec89440f','Zé','talles9@gmail.com','27996291050',1,'2019-07-25 12:46:29','2019-07-25 12:46:29',3);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-24 15:25:35
