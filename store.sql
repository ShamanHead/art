-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: database
-- Время создания: Дек 23 2022 г., 02:43
-- Версия сервера: 10.9.4-MariaDB-1:10.9.4+maria~ubu2204
-- Версия PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `store`
--

-- --------------------------------------------------------

--
-- Структура таблицы `characteristics`
--

CREATE TABLE `characteristics` (
  `id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL DEFAULT 'OC',
  `value` varchar(255) NOT NULL DEFAULT 'Windows 10'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `characteristics`
--

INSERT INTO `characteristics` (`id`, `game_id`, `name`, `value`) VALUES
(1, 1, 'OC', 'Windows 10'),
(2, 2, 'OC', 'Windows 10'),
(3, 3, 'OC', 'Windows 10'),
(4, 4, 'OC', 'Windows 10'),
(5, 5, 'OC', 'Windows 10'),
(6, 6, 'OC', 'Windows 10'),
(7, 7, 'OC', 'Windows 10'),
(8, 8, 'OC', 'Windows 10'),
(9, 9, 'OC', 'Windows 10'),
(10, 10, 'OC', 'Windows 10'),
(11, 11, 'OC', 'Windows 10'),
(12, 12, 'OC', 'Windows 10'),
(13, 1, 'Видеокарта', 'NVIDIA GTX 960'),
(14, 2, 'Видеокарта', 'NVIDIA RTX 2060'),
(15, 3, 'Видеокарта', 'NVIDIA GTX 750'),
(16, 4, 'Видеокарта', 'NVIDIA GTX 970ti'),
(17, 5, 'Видеокарта', 'ATI RADEON 6800HD'),
(18, 6, 'Видеокарта', 'RADEON RX 570'),
(19, 7, 'Видеокарта', 'RADEON RX 580'),
(20, 8, 'Видеокарта', 'RADEON RX 480'),
(21, 9, 'Видеокарта', 'NVIDIA RTX 3060'),
(22, 10, 'Видеокарта', 'NVIDIA RTX 4090'),
(23, 11, 'Видеокарта', 'RADEON RX 5700xt'),
(24, 12, 'Видеокарта', 'RADEON RX 470'),
(25, 1, 'Процессор', 'Intel® Core™ i5-8900'),
(26, 2, 'Процессор', 'Intel® Core™ i3-10110U'),
(27, 3, 'Процессор', 'Intel® Core™ i7-9900k'),
(28, 4, 'Процессор', 'Intel® Core™ i9-12900'),
(29, 5, 'Процессор', 'AMD Ryzen™ 7 2700X'),
(30, 6, 'Процессор', 'AMD Ryzen™ 9 5900X'),
(31, 7, 'Процессор', 'AMD Ryzen™ 5 2600X'),
(32, 8, 'Процессор', 'AMD Ryzen™ 3 1300X'),
(33, 9, 'Процессор', 'Intel® Core™ i9‑12950HX'),
(34, 10, 'Процессор', 'Intel® Core™ i5‑1245UL'),
(35, 11, 'Процессор', 'AMD Ryzen™ 5 3600X'),
(36, 12, 'Процессор', 'AMD Ryzen™ 3 2200g'),
(37, 1, 'Оперативная память', '8 GB'),
(38, 2, 'Оперативная память', '16 GB'),
(39, 3, 'Оперативная память', '24 GB'),
(40, 4, 'Оперативная память', '8 GB'),
(41, 5, 'Оперативная память', '16 GB'),
(42, 6, 'Оперативная память', '24 GB'),
(43, 7, 'Оперативная память', '8 GB'),
(44, 8, 'Оперативная память', '16 GB'),
(45, 9, 'Оперативная память', '24 GB'),
(46, 10, 'Оперативная память', '8 GB'),
(47, 11, 'Оперативная память', '16 GB'),
(48, 12, 'Оперативная память', '24 GB');

-- --------------------------------------------------------

--
-- Структура таблицы `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `name` varchar(36) NOT NULL,
  `img` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` int(4) NOT NULL,
  `platform` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `games`
--

INSERT INTO `games` (`id`, `name`, `img`, `description`, `price`, `platform`) VALUES
(1, 'SUPERHOT VR', 'https://cdn.cloudflare.steamstatic.com/steam/apps/617830/header.jpg?t=1667473729', 'SUPERHOT VR — лауреат множества премий «VR-игра года»; это полностью переработанная версия игры, созданная специально для VR и управления движением. Результат практически трех лет напряженного труда, SUPERHOT VR дает тебе возможность телом и разумом погрузиться в мир невероятного экшена SUPERHOT. А теперь сделать это можно и на VR headset.', 3, 'OS X'),
(2, 'Half-Life: Alyx', 'https://cdn.cloudflare.steamstatic.com/steam/apps/546560/header.jpg?t=1666823432', 'Half-Life: Alyx — это возвращение Valve во вселенную Half-Life в виртуальной реальности. Это история невозможной борьбы с жестокой расой пришельцев, известной как Альянс. События происходят между Half-Life и Half-Life 2. Вы играете за Аликс Вэнс, и вы — единственный шанс человечества на спасение.							', 28, 'Windows'),
(3, 'Detroit: Become Human', 'https://cdn.cloudflare.steamstatic.com/steam/apps/1222140/header.jpg?t=1667468479', 'В Detroit: Become Human в ваших руках окажутся судьбы как человечества, так и андроидов. Каждый сделанный вами выбор повлияет на исход игры, в которой реализован одним из самых замысловатых и разветвленных сюжетов из когда-либо созданных в игровой индустрии.', 10, 'Linux'),
(4, 'God of War', 'https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg?t=1650554420', 'Отомстив богам Олимпа, Кратос живет в царстве скандинавских божеств и чудовищ. В этом суровом беспощадном мире он должен не только самостоятельно бороться за выживание... но и научить этому сына.', 24, 'Free BSD'),
(5, 'Days Gone', 'https://cdn.cloudflare.steamstatic.com/steam/apps/1259420/header.jpg?t=1635476187', 'Сражайтесь и гоняйте по смертельно опасным дорогам постапокалиптической Америки. Играйте за Дикона Сент-Джона, номада и охотника за наградами, кочующего по разбитым дорогам в поисках смысла жизни в этом приключенческом боевике с открытым миром.', 13, 'Android'),
(6, 'Wartales', 'https://cdn.cloudflare.steamstatic.com/steam/apps/1527950/header_alt_assets_1_russian.jpg?t=1671202352', 'Wartales — ролевая игра с открытым миром, в которой вам предстоит вести отряд наемников к богатству в огромной средневековой вселенной. Исследуйте мир, нанимайте спутников, получайте награды и раскрывайте тайны гробниц древних!', 19, 'IOS'),
(7, 'Little Nightmares II', 'https://cdn.cloudflare.steamstatic.com/steam/apps/860510/header.jpg?t=1661866261', 'Little Nightmares II — приключенческая игра с нагнетанием саспенса. Вы играете за мальчика Моно, попавшего в мир, деформированный злой Передачей. С новой подругой Шестой он пытается найти ее источник.', 7, 'OS X'),
(8, 'Cities: Skylines', 'https://cdn.cloudflare.steamstatic.com/steam/apps/255710/header.jpg?t=1670837127', 'Cities: Skylines&nbsp;предлагает по-новому взглянуть на классический жанр градостроительного симулятора. Эта игра как нельзя лучше передает возникающие перед градоначальником трудности и позволяет создать настоящий мегаполис, одновременно привнося в игру приятные новшества.', 7, 'Windows'),
(9, 'Deep Rock Galactic', 'https://cdn.cloudflare.steamstatic.com/steam/apps/548430/header_alt_assets_19_russian.jpg?t=1671128615', 'Deep Rock Galactic — первый научно-фантастический шутер с видом от первого лица для совместной игры, в котором вас ждут крутые космические гномы, полностью разрушаемое окружение, процедурно генерируемые системы пещер и бесконечные волны инопланетных чудовищ.', 5, 'Linux'),
(10, 'UNCHARTED™: Наследие воров', 'https://cdn.cloudflare.steamstatic.com/steam/apps/1659420/header_russian.jpg?t=1671505592', 'Играйте за Натана Дрейка и Хлою Фрейзер в их собственных приключениях, в которых герои сражаются со своим прошлым и обретают собственное наследие. Издание включает в себя сюжетные кампании из игр \"UNCHARTED 4: Путь вора\" и \"UNCHARTED: Утраченное наследие\".', 28, 'Free BSD'),
(11, 'Phasmophobia', 'https://cdn.cloudflare.steamstatic.com/steam/apps/739630/header.jpg?t=1667574170', 'Phasmophobia — психологический хоррор для четырех игроков. Паранормальная активность растет, и вы и ваша команда должны использовать все имеющееся в вашем распоряжении оборудование для охоты на призраков, чтобы собрать как можно больше улик.', 8, 'Android'),
(12, 'Choo-Choo Charles', 'https://cdn.cloudflare.steamstatic.com/steam/apps/1766740/header.jpg?t=1670596632', 'Путешествуйте по острову в старом поезде, периодически улучшайте его и используйте для борьбы со злым пауком по имени Чарльз.', 10, 'IOS');

-- --------------------------------------------------------

--
-- Структура таблицы `games_genre`
--

CREATE TABLE `games_genre` (
  `id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `games_genre`
--

INSERT INTO `games_genre` (`id`, `game_id`, `genre_id`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 5),
(5, 5, 6),
(6, 6, 1),
(7, 7, 2),
(8, 8, 3),
(9, 9, 5),
(10, 10, 6),
(11, 11, 1),
(12, 12, 3);

-- --------------------------------------------------------

--
-- Структура таблицы `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT 'Жанр'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `genres`
--

INSERT INTO `genres` (`id`, `name`) VALUES
(1, 'Приключение'),
(2, 'Хоррор'),
(3, 'Шутер'),
(5, 'Roguelike'),
(6, 'Roguelite');

-- --------------------------------------------------------

--
-- Структура таблицы `sales`
--

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL,
  `sale_price` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `sales`
--

INSERT INTO `sales` (`id`, `game_id`, `sale_price`) VALUES
(1, 2, 14),
(2, 4, 19),
(3, 10, 20),
(4, 11, 3);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `user_login`
--

CREATE TABLE `user_login` (
  `user_id` int(11) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `user_session_id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Дамп данных таблицы `user_login`
--

INSERT INTO `user_login` (`user_id`, `user_email`, `user_password`, `user_session_id`) VALUES
(1, 'johnsmith@gmail.com', 'password', ''),
(2, 'peterparker@gmail.com', 'password', '');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `characteristics`
--
ALTER TABLE `characteristics`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `games_genre`
--
ALTER TABLE `games_genre`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user_login`
--
ALTER TABLE `user_login`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `characteristics`
--
ALTER TABLE `characteristics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT для таблицы `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `games_genre`
--
ALTER TABLE `games_genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `user_login`
--
ALTER TABLE `user_login`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
