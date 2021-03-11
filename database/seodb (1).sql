-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 09, 2021 at 10:59 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `seodb`
--

-- --------------------------------------------------------

--
-- Table structure for table `collecteddata`
--

CREATE TABLE `collecteddata` (
  `id` int(255) NOT NULL,
  `domain_id` int(11) NOT NULL,
  `top_level_domain` varchar(10) DEFAULT NULL,
  `domain_url` varchar(100) NOT NULL,
  `domain_ip_address` varchar(45) DEFAULT NULL,
  `domain_language` varchar(40) DEFAULT NULL,
  `domain_region` varchar(40) DEFAULT NULL,
  `domain_is_pbn` tinyint(1) DEFAULT NULL,
  `domain_hold_company` varchar(45) DEFAULT NULL,
  `webmaster_email` varchar(100) DEFAULT NULL,
  `date_of_contact` datetime DEFAULT NULL,
  `contacted_by` varchar(40) DEFAULT NULL,
  `price_currency` varchar(25) DEFAULT NULL,
  `link_price` decimal(7,2) DEFAULT NULL,
  `link_price_incl_content` decimal(7,2) DEFAULT NULL,
  `link_price_comment` varchar(1500) DEFAULT NULL,
  `link_is_do_follow` tinyint(1) DEFAULT NULL,
  `link_is_permanent` tinyint(1) DEFAULT NULL,
  `link_duratrion_months` int(11) DEFAULT NULL,
  `link_mark_sponsored` tinyint(1) DEFAULT NULL,
  `link_disclaimer` varchar(500) DEFAULT NULL,
  `link_discount` varchar(500) DEFAULT NULL,
  `link_guidelines` varchar(3000) DEFAULT NULL,
  `resource_link_accepted` tinyint(1) DEFAULT NULL,
  `allows_links_to_existing_posts` tinyint(1) DEFAULT NULL,
  `price_for_link_existing_post` decimal(7,2) DEFAULT NULL,
  `guest_post_accepted` tinyint(1) DEFAULT NULL,
  `guest_post_guidelines` varchar(2000) DEFAULT NULL,
  `fc_link_accepted` tinyint(1) DEFAULT NULL,
  `fc_link_price` decimal(7,2) DEFAULT NULL,
  `fc_link_price_comment` varchar(200) DEFAULT NULL,
  `fc_link_guidelines` varchar(1000) NOT NULL,
  `majestic_citation_flow` int(20) NOT NULL,
  `majestic_trust_flow` int(5) NOT NULL,
  `ahrefs_url_rating` int(4) NOT NULL,
  `ahrefs_domain_rating` int(20) NOT NULL,
  `ahrefs_domains` int(20) NOT NULL,
  `ahrefs_total_backlinks` int(20) NOT NULL,
  `ahrefs_total_keywords` int(20) NOT NULL,
  `ahrefs_total_traffic` int(20) NOT NULL,
  `ahrefsref_domains_do_follow` int(20) NOT NULL,
  `moz_da` int(4) DEFAULT NULL,
  `niche_1` varchar(40) DEFAULT NULL,
  `niche_2` varchar(50) DEFAULT NULL,
  `niche_3` varchar(40) DEFAULT NULL,
  `niche_tag_1` varchar(100) DEFAULT NULL,
  `niche_tag_2` varchar(40) DEFAULT NULL,
  `niche_tag_3` varchar(40) DEFAULT NULL,
  `niche_tag_4` varchar(40) DEFAULT NULL,
  `niche_tag_5` varchar(40) DEFAULT NULL,
  `niche_tag_6` varchar(40) DEFAULT NULL,
  `niche_tag_7` varchar(40) DEFAULT NULL,
  `niche_tag_8` varchar(40) DEFAULT NULL,
  `niche_tag_9` varchar(40) DEFAULT NULL,
  `niche_tag_10` varchar(40) DEFAULT NULL,
  `niche_tag1` tinyint(1) DEFAULT NULL,
  `example_live_link` varchar(150) DEFAULT NULL,
  `previous_milestone` varchar(45) DEFAULT NULL,
  `casino_link_accepted` tinyint(1) DEFAULT NULL,
  `casino_link_price` varchar(5) DEFAULT NULL,
  `casino_link_price_comment` varchar(200) DEFAULT NULL,
  `casino_link_guidelines` varchar(100) DEFAULT NULL,
  `banner_accepted` tinyint(1) DEFAULT NULL,
  `banner_guidelines` varchar(500) DEFAULT NULL,
  `time_last_update` timestamp NULL DEFAULT NULL,
  `pos_1_regional_traffic` varchar(5) DEFAULT NULL,
  `pos_2_regional_traffic` varchar(5) DEFAULT NULL,
  `pos_3_regional_traffic` varchar(5) DEFAULT NULL,
  `cbd_link_accepted` tinyint(1) DEFAULT NULL,
  `cbd_link_price` decimal(7,2) DEFAULT NULL,
  `cbd_price_comment` varchar(45) DEFAULT NULL,
  `cbd_link_guidelines` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `collecteddata`
--

INSERT INTO `collecteddata` (`id`, `domain_id`, `top_level_domain`, `domain_url`, `domain_ip_address`, `domain_language`, `domain_region`, `domain_is_pbn`, `domain_hold_company`, `webmaster_email`, `date_of_contact`, `contacted_by`, `price_currency`, `link_price`, `link_price_incl_content`, `link_price_comment`, `link_is_do_follow`, `link_is_permanent`, `link_duratrion_months`, `link_mark_sponsored`, `link_disclaimer`, `link_discount`, `link_guidelines`, `resource_link_accepted`, `allows_links_to_existing_posts`, `price_for_link_existing_post`, `guest_post_accepted`, `guest_post_guidelines`, `fc_link_accepted`, `fc_link_price`, `fc_link_price_comment`, `fc_link_guidelines`, `majestic_citation_flow`, `majestic_trust_flow`, `ahrefs_url_rating`, `ahrefs_domain_rating`, `ahrefs_domains`, `ahrefs_total_backlinks`, `ahrefs_total_keywords`, `ahrefs_total_traffic`, `ahrefsref_domains_do_follow`, `moz_da`, `niche_1`, `niche_2`, `niche_3`, `niche_tag_1`, `niche_tag_2`, `niche_tag_3`, `niche_tag_4`, `niche_tag_5`, `niche_tag_6`, `niche_tag_7`, `niche_tag_8`, `niche_tag_9`, `niche_tag_10`, `niche_tag1`, `example_live_link`, `previous_milestone`, `casino_link_accepted`, `casino_link_price`, `casino_link_price_comment`, `casino_link_guidelines`, `banner_accepted`, `banner_guidelines`, `time_last_update`, `pos_1_regional_traffic`, `pos_2_regional_traffic`, `pos_3_regional_traffic`, `cbd_link_accepted`, `cbd_link_price`, `cbd_price_comment`, `cbd_link_guidelines`) VALUES
(1, 211, 'tested@exa', 'test@example.com', '127.0.0.176', 'English', 'SA', 1, 'Testpvt', 'spider@webmaster.com', '2021-03-01 23:43:44', 'Mitchell', 'GBP', '100.00', '175.00', 'none', 1, 1, 99, 1, 'none', 'VAT', 'none', 1, 1, '150.00', 1, 'none', 1, '80.00', 'none', 'none', 25, 55, 25, 25, 25, 25, 70, 15, 10, 6, 'test', 'testing', 'tested', 'test area', 'done', 'done', 'done', 'done', 'done', 'done', 'done', 'done', 'done', 1, 'tested@example2.com', 'platinum', 1, '150.0', 'none', 'none', 1, 'none', '2021-03-01 13:30:44', 'US', 'UK', 'SA', 1, '120.00', 'none', 'none');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `collecteddata`
--
ALTER TABLE `collecteddata`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `collecteddata`
--
ALTER TABLE `collecteddata`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
