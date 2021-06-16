CREATE DATABASE  IF NOT EXISTS `compet` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `compet`;
-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: compet
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actions`
--

DROP TABLE IF EXISTS `actions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `projectId` int(11) NOT NULL,
  `areaId` int(11) NOT NULL,
  `source` varchar(100) DEFAULT NULL,
  `requesterId` int(11) NOT NULL,
  `date_request` datetime NOT NULL,
  `action` text NOT NULL,
  `responsibleId` int(11) NOT NULL,
  `date_plan` datetime NOT NULL,
  `date_replan` datetime DEFAULT NULL,
  `date_real` datetime DEFAULT NULL,
  `priority` int(11) DEFAULT NULL,
  `situation` int(11) DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `edit` int(11) DEFAULT NULL,
  `editId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idactions_UNIQUE` (`id`),
  KEY `fk_areas_actions_idx` (`areaId`),
  KEY `fk_requester_actions_idx` (`requesterId`),
  KEY `fk_responsible_actions_idx` (`responsibleId`),
  KEY `fk_project_actions_idx` (`projectId`),
  CONSTRAINT `fk_areas_actions` FOREIGN KEY (`areaId`) REFERENCES `areas` (`id`),
  CONSTRAINT `fk_project_actions` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`),
  CONSTRAINT `fk_requester_actions` FOREIGN KEY (`requesterId`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_responsible_actions` FOREIGN KEY (`responsibleId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `areas`
--

DROP TABLE IF EXISTS `areas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `areas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `status` int(1) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `status` int(1) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `coins`
--

DROP TABLE IF EXISTS `coins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(150) NOT NULL,
  `status` int(1) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `status` int(1) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `img_logo` varchar(100) DEFAULT NULL,
  `corporateName` varchar(45) DEFAULT NULL,
  `fantasyName` varchar(45) DEFAULT NULL,
  `cnpj` varchar(45) DEFAULT NULL,
  `nameContact` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `qtd_key` int(11) DEFAULT NULL,
  `qtd_key_using` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `company_employees`
--

DROP TABLE IF EXISTS `company_employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company_employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phone` varchar(150) NOT NULL,
  `companyId` int(11) NOT NULL,
  `status` int(1) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_company_employee` (`companyId`),
  CONSTRAINT `fk_company_employee` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `itens`
--

DROP TABLE IF EXISTS `itens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `itens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` float NOT NULL,
  `subject` varchar(200) NOT NULL,
  `areaId` int(11) NOT NULL,
  `responsibleId` int(11) NOT NULL,
  `reunionId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_areaId_idx` (`areaId`),
  KEY `fk_responsibleId_idx` (`responsibleId`),
  KEY `fk_reunionId_idx` (`reunionId`),
  CONSTRAINT `fk_areaId` FOREIGN KEY (`areaId`) REFERENCES `areas` (`id`),
  CONSTRAINT `fk_responsibleId` FOREIGN KEY (`responsibleId`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_reunionId` FOREIGN KEY (`reunionId`) REFERENCES `reunions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `modules`
--

DROP TABLE IF EXISTS `modules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `actionId` int(11) NOT NULL,
  `note` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_note_actionId_idx` (`actionId`),
  KEY `fk_note_userId_idx` (`userId`),
  CONSTRAINT `fk_note_actionId` FOREIGN KEY (`actionId`) REFERENCES `actions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `participants`
--

DROP TABLE IF EXISTS `participants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `participants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `companyId` int(11) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(150) NOT NULL,
  `status` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `fk_companyId_participants_idx` (`companyId`),
  CONSTRAINT `fk_companyId_participants` FOREIGN KEY (`companyId`) REFERENCES `companies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `userId` int(11) NOT NULL,
  `coinId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `situation` int(11) NOT NULL,
  `status` int(1) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_coin_project` (`coinId`),
  KEY `fk_category_project` (`categoryId`),
  KEY `fk_user_project_idx` (`userId`),
  CONSTRAINT `fk_category_project` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  CONSTRAINT `fk_coin_project` FOREIGN KEY (`coinId`) REFERENCES `coins` (`id`),
  CONSTRAINT `fk_user_project` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `reunion_actions`
--

DROP TABLE IF EXISTS `reunion_actions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reunion_actions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` float NOT NULL,
  `idreunion` int(11) NOT NULL,
  `idactions` int(11) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_idreunion_idx` (`idreunion`),
  KEY `fk_idactions_idx` (`idactions`),
  CONSTRAINT `fk_idactions` FOREIGN KEY (`idactions`) REFERENCES `actions` (`id`),
  CONSTRAINT `fk_idreunion` FOREIGN KEY (`idreunion`) REFERENCES `reunions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `reunion_participants`
--

DROP TABLE IF EXISTS `reunion_participants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reunion_participants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idreunion` int(11) NOT NULL,
  `idparticpants` int(11) NOT NULL,
  `partic` int(11) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_reunion` (`idparticpants`),
  KEY `fk_idparticpants_idx` (`idreunion`) /*!80000 INVISIBLE */,
  CONSTRAINT `fk_idparticpants` FOREIGN KEY (`idparticpants`) REFERENCES `participants` (`id`),
  CONSTRAINT `fk_reunion` FOREIGN KEY (`idreunion`) REFERENCES `reunions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `reunions`
--

DROP TABLE IF EXISTS `reunions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reunions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `projectId` int(11) DEFAULT NULL,
  `prepared` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `local` varchar(45) DEFAULT NULL,
  `subject` varchar(45) DEFAULT NULL,
  `agenda` varchar(45) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `titles`
--

DROP TABLE IF EXISTS `titles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `titles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` float NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `reunionId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_reunion_idx` (`reunionId`),
  CONSTRAINT `fk_reunion_idx` FOREIGN KEY (`reunionId`) REFERENCES `reunions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) NOT NULL,
  `name` varchar(150) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `email` varchar(200) NOT NULL,
  `permission` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `password` varchar(150) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `companyId` int(11) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `smtp_port_up` int(11) DEFAULT NULL,
  `smtp_port_down` int(11) DEFAULT NULL,
  `host` varchar(100) DEFAULT NULL,
  `email_suport` int(1) DEFAULT '0',
  `password_email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-19 14:55:56
