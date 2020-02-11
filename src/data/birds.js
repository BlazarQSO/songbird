const birdsData = [
    [
      {
        id: 1,
        name: 'Лебеди',
        species: 'Cygnus',
        description: 'Род птиц из отряда гусеобразных семейства утиных. Оперение лебедей по своей окраске бывает либо чисто белого, либо серого или чёрного цвета. Самок и самцов внешне весьма трудно различить. Лебеди являются самыми крупными водными птицами.',
        image: 'https://live.staticflickr.com/3408/3659084803_b80900b7be_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489258-190724_08.07h_knobbelzwaan_biesbosch_%20gat%20van%20de%20turfzakken_alarm_1ad%20en%201%20juv_gezien_%20%282%29.mp3'
      },
      {
        id: 2,
        name: 'Страус',
        species: 'Struthio camelus',
        description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
        image: 'https://live.staticflickr.com/7380/27950634632_9ebbf16eb3_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/XKXDFWNSPA/XC208209-Common%20Ostrich%202.mp3'
      },
      {
        id: 3,
        name: 'Пингвин',
        species: 'Pygoscelis papua',
        description: 'После императорских и королевских пингвинов, субантарктический — самый крупный пингвин. Самцы достигают веса 9 кг, а самки — 7,5 кг, рост взрослых особей — 75—90 см. Под водой папуанские пингвины достигают скорости 36 км/ч, что делает их быстрейшими из всех пингвинов.',
        image: 'https://live.staticflickr.com/4894/46818804732_4c8d9a3cc3_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/CDTGHVBGZP/Gentoo%20Penguin2011-11-2-1.mp3'
      },
      {
        id: 4,
        name: 'Казуары',
        species: 'Casuarius',
        description: 'Eдинственный современный род крупных нелетающих птиц семейства казуаровых отряда казуарообразных, обитающих в тропических лесах Новой Гвинеи и северо-востока Австралии. Название птицы заимствовано из индонезийского языка (индон. kasuari) и происходит от папуасского kasu weri, что в переводе означает «рогатая голова».',
        image: 'https://live.staticflickr.com/5799/20875104070_059d1ba5bd_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/GNEWSLMDAM/XC126083-Cassowary%20juv.%20alarm%20call%20CH%2019_3_13_PG.MP3'
      },
      {
        id: 5,
        name: 'Индейка',
        species: 'Meleagris gallopavo',
        description: 'Крупная куриная птица Нового Света из рода индеек, семейства фазановых. Считается родоначальником домашней индейки. Дикие индейки имеют крупные размеры, весят до 8 кг (самец). Длина самца 100—110 см, самки 85 см. Ноги длинные, крепкие. Птицы способны к перелёту на небольшие расстояния.',
        image: 'https://live.staticflickr.com/4852/45636086802_5340e6599b_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/BVEAKEMWVN/XC508128-Wild%20Turkey2%2011_16_19%20%28online-audio-converter.com%29.mp3'
      },
      {
        id: 6,
        name: 'Фламинго',
        species: 'Phoenicopterus roseus',
        description: 'Отряд и семейство Фламинго. Места обитания - Азия, Африка, Европа. Размах крыльев 2,4 м. Вес 5,6 кг. Розовых фламинго иначе называют обыкновенными, хотя птицы эти совершенно уникальные. Встречаются не только в Африке, но и в Иране, Азербайджане. Их можно увидеть на юге Испании и Франции. ',
        image: 'https://live.staticflickr.com/2040/32670428010_54d555ec9c_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC510306-LS_55005%20Greater%20Flamingo%20calls%20A%20Little%20Grebe%20C.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Чёрный аист',
        species: 'Ciconia nigra',
        description: 'Образ жизни чёрного аиста изучен слабо. Эта скрытная птица, в отличие от белого аиста, не любит соседства с человеком и предпочитает селиться в глухих, старых лесах на равнинах и предгорьях возле водоёмов — лесных озёр, рек, болот.',
        image: 'https://live.staticflickr.com/2871/33455717742_ba33c2dd27_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/BPIWLPSNFW/XC336616-Ciconia%20nigra%20juv%20Luxembourg%2006-2015%20Patric%20Lorg%C3%A9.mp3'
      },
      {
        id: 2,
        name: 'Белый Ибис',
        species: 'Eudocimus albus',
        description: 'Белый ибис . Среда обитания - Америка Размах крыльев 91 см Вес 1 кг  Красный ибис (Eudocimus rubber) - Америка. Размах крыльев 1 м Вес 1,2 кг',
        image: 'https://live.staticflickr.com/65535/48306864671_2d85be8884_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/YKKDTZHLUU/XC257341-17.004.01.White_Ibis.mp3'
      },
      {
        id: 3,
        name: 'Большая Выпь',
        species: 'Botaurus stellaris',
        description: 'Большая выпь . Места обитания - Азия, Африка, Европа. Размах крыльев 90 см. Вес 1 кг. Внешне большая выпь напоминает коротконогую сутулую цаплю. Клюв у нее довольно короткий. Голова без перемычки переходит в шею. Крылья короткие и широкие. Грудь и спина в коричневых пестринах.',
        image: 'https://live.staticflickr.com/4842/45736232915_d84236a77f_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/FCZINMYQPY/XC463330-f%20%281%29.MP3'
      },
      {
        id: 4,
        name: 'Аист разиня',
        species: 'Anastomus oscitans',
        description: 'Азиатский аист-разиня / Среда обитания - Азия. Размах крыльев 1,5 м вес 3 кг Один из самых маленьких видов аиста, распространен в Африке и в Юго-Восточной Азии от Индии до Таиланда. ',
        image: 'http://live.staticflickr.com/7850/46302504405_35c3844fc0_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZXGYSIOPJJ/XC194954-asian%20open%20bill%20stork%20.mp3'
      },
      {
        id: 5,
        name: 'Аист клювач',
        species: 'Mycteria leucocephala',
        description: 'Расписной аист-клювач . Среда обитания - Азия Размах крыльев 1,3 м Вес 1,4 кг Аист-клювач - обитатель заболоченных местностей тропиков Африки и Азии. Это крупная ярко окрашенная птица с мощным, немного загнутым книзу, желтым клювом.',
        image: 'https://live.staticflickr.com/65535/49342722063_c07cb40dfc_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC460222-LS101115%20Painted%20Stork%20call%20A.mp3'
      },
      {
        id: 6,
        name: 'Белый Аист',
        species: 'Ciconia ciconia',
        description: 'Белый аист . Среда обитания - Азия, Африка, Европа Размах крыльев 1,5 м Вес 4 кг Размах крыльев у белого аиста немного превышает 1,5 м. Самцы немного крупнее самок, но по внешним признакам отличить их почти невозможно.',
        image: 'https://live.staticflickr.com/4907/45757762395_d169afeee8_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/OUALYKRAJY/XC470421-cicognabianca.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Вдовушка',
        species: 'Vidua macroura',
        description: 'Доминиканская вдовушка. Место обитания - Африка. Длина 30 см Вес 20 г Вдовушки - очень красивые птицы с необычным поведением. Достаточно сказать, что они подбрасывают свои яйца в гнезда других птиц, как и кукушки.',
        image: 'https://live.staticflickr.com/7592/16913055727_cba754d18c_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/KHGERYPVPK/XC459428-20181211_180038_pintailed_wydah.mp3'
      },
      {
        id: 2,
        name: 'Варакушка',
        species: 'Luscinia svecica',
        description: 'Варакушка . Место обитания - Евразия. Размах крыльев 22 см Вес 20 г Размером чуть меньше домового воробья. Длина тела — около 15 см. Масса самцов — 15—23 г, самок 13—21 г. Спинка бурая или серовато-бурая, надхвостье рыжее. Горло и зоб у самца синие с рыжим пятном посередине; пятно может быть белым, или только окружено белым, может отсутствовать.',
        image: 'https://live.staticflickr.com/2894/33128133366_cd3422e834_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/JCPKCBKKAQ/XC497803-LUSSVE_190501_4941_RNN76_AireBaieSeine.mp3'
      },
      {
        id: 3,
        name: 'Ванга',
        species: 'Schetba rufa',
        description: 'Рыжая ванга . Среда обитания - Мадагаскар Длина 15-20 см Предки ванги перебрались с Африканского континента на остров Мадагаскар. Один вид - Голубая ванга - облюбовал Коморские острова.',
        image: 'https://live.staticflickr.com/7020/6541364353_e052f7481f_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/VROUALCTKG/XC155290-Rufous%20Vanga%20%28song%2C%20Madagascar%2C%20Ankarafantsika%2C%20oct2012%2C%201%29.MP3'
      },
      {
        id: 4,
        name: 'Буйволова птица',
        species: 'Dinemellia dinemelli',
        description: 'Белоголовая буйволова птица . Место обитания - Африка. Длина 25 см Вес 50 г Буйволова птица названа так из-за пристрастия навещать стада крупного рогатого скота и скопления диких буйволов - на спинах животных она находит многочисленных насекомых.',
        image: 'https://live.staticflickr.com/888/41446428912_10c4f2e717_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC510139-LS_58443%20White-headed%20Buffalo%20Weaver%20call%20A.mp3'
      },
      {
        id: 5,
        name: 'Белоглазка',
        species: 'Zosterops erythropleurus',
        description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
        image: 'https://live.staticflickr.com/8563/27856702294_8c3dd7a61f_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/VLLMNTIBZB/20100925_HappyIsland_Chestnut-flankedWhite-eyes_calls.mp3'
      },
      {
        id: 6,
        name: 'Белобровник',
        species: 'Turdus iliacus',
        description: 'Воробьиных птиц много. Больше половины из всех видов пернатых, только воробьев, если считать по клювам, больше миллиарда особей. С другой стороны, среди воробьиных есть птицы редчайшие.',
        image: 'https://live.staticflickr.com/65535/48831772376_bdbdf43f67_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/RVVFWWDBAJ/XC520021-R%C3%B6dvingetrast-s%C3%A5ng-Valleomr%C3%A5det%20Vg-1966-05-00.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Подорлик',
        species: 'Aquila pomarina',
        description: 'Малый подорлик  Азия, Африка, Европа Размах крыльев 1,3 м Вес 1,7 кг Подорлик (приставка «под» в данном случае обозначает «небольшой», о чем говорит и слово «орлик») обитает в Азии, Европе и Северной Африке. Птицы умеренных и северных широт перелетны.',
        image: 'https://live.staticflickr.com/2811/34186238026_97fdce66fe_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/EHAHTZIMID/XC316695-VOC_160515-1261_AQP.mp3'
      },
      {
        id: 2,
        name: 'Гарпия',
        species: 'Harpia harpyja',
        description: 'Юноамериканская гарпия . Место обитания - Америка. Размах крыльев 2 м. Вес 9 кг Древние греки называли гарпиями жутких мифических существ. Наполовину они были женщинами, а наполовину - хищными птицами с огромными когтями. Удивительно, но гарпии существуют не только в мифах.',
        image: 'https://live.staticflickr.com/4799/40658775992_97558d7cf2_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/KRQYNRSSDF/XC316474-Harpia%20harpyja%20%28Paramana%20140516%29%20OC_20160514%20161051.mp3'
      },
      {
        id: 3,
        name: 'Балобан',
        species: 'Falco cherrug',
        description: 'Балобан . Места обитания -  Азия, Европа. Размах крыльев 1,3 м. Вес 1,2 кг Крупный сокол, населяющий открытые пространства и предгорья Европы и Азии. В южных регионах это кочующая или даже оседлая птица, в северных - перелетная.',
        image: 'https://live.staticflickr.com/65535/48776505451_13724f8842_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC412094-Falco_cherrug_%28%29-FL%20flight%20Boga%20Bogt%2026May17%208.16pm%20LS111756a.mp3'
      },
      {
        id: 4,
        name: 'База',
        species: 'Aviceda subcristata',
        description: 'Хохлатая база . Места обитания - Австралия, Новая Гвинея. Длина 45 см. Вес 700 г На опушках тропических лесов Новой Гвинеи и Австралии можно увидеть пестро окрашенных птиц. Англичане и американцы называют этих птиц «кукушко-соколами».',
        image: 'https://live.staticflickr.com/8172/8074109536_997aa7ae0f_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
      },
      {
        id: 5,
        name: 'Алет',
        species: 'Falco eleonorae',
        description: 'Место обитания - Средиземноморье. Размах крыльев 1,05 м. Вес 500 г Второе название этой интереснейшей птицы - сокол Элеоноры. Названа она так в честь княгини Элеоноры д`Арбореа, властительницы острова Сардиния.',
        image: 'https://live.staticflickr.com/1835/42104258525_1ff77030e1_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/JPBSNBUUEF/XC368785-Eleonora%27s%20Falcon%2C%2009.05.%2C%20flight%20call.mp3'
      },
      {
        id: 6,
        name: 'Агуйя',
        species: 'Geranoaetus melanoleucus',
        description: 'Место обитания - Южная Америка. Размах крыльев 1,7 м. Вес 2,5 кг Агуйя или чилийский сарыч (канюк) населяет равнинные и горные местности Южной Америки, особо многочисленная популяция обитает в Чили, отчего хищная птица и получила свое второе название.',
        image: 'https://live.staticflickr.com/1784/42107659024_9bed3a8ac7_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/YWWWUBVAJF/XC427408-Geranoaetus%20melanoleucus%20-Caio%20Brito-%28Lapinha%20da%20Serra-MG%29-BRITO1956.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Тоди',
        species: 'Todus multicolor',
        description: 'Кубинский тоди . Место обитания - Большие Антильские острова. Длина 11 см Вес 6,5 г Тоди - эндемики Вест-Индии, обитают только на Больших Антильских островах. Орнитологи насчитывают 5 видов этих птиц, все они имеют слегка приплюснутые сверху острые клювы (потому представителей этого семейства называют еще плоскоклювыми) и красное пятно на горле.',
        image: 'https://live.staticflickr.com/7907/47504963311_86443b1f12_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/FHQVLXJQKW/XC379742-Cuban%20Tody.mp3'
      },
      {
        id: 2,
        name: 'Сизоворонка',
        species: 'Coracias benghalensis',
        description: 'Бенгальская сизоворонка . Место обитания - Азия. Длина 35 см Вес 180 г Сизоворонки обитают в Австралии, Африке, Европе, Южной Азии. Населяют самые разнообразные ландшафты: леса, поля, степи, полупустыни, сельскохозяйственные угодья.',
        image: 'https://live.staticflickr.com/7085/7135955419_6e44156f56_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC188147-Coracias_garrulus_Poland_Jarek_Matusiak_2014-0720_43.mp3'
      },
      {
        id: 3,
        name: 'Момот',
        species: 'Eumomota superciliosa',
        description: 'Синебровый момот . Место обитания - Центральная Америка. Длина 34 см. Вес 65 г Древнее семейство ярко-окрашенных птиц, обитающих в тропических лесах от Мексики до Аргентины. Отличительная особенность - длинный хвост, заканчивающийся двумя еще более длинными рулевыми перьями. Птицы держатся поодиночке или парами.',
        image: 'https://live.staticflickr.com/4261/35271332170_7344d34e09_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ILUHRFXDNU/XC423206-Eumomota%20superciliosa%20song%20seen%20toh%20june%2025%201828.mp3'
      },
      {
        id: 4,
        name: 'Курол',
        species: 'Leptosomus discolor',
        description: 'Место обитания - Мадагаскар. Длина 43 см Вес 200 г Английское название этой птицы «Cuckoo Roller можно перевести как «перекликающаяся кукушка». Куролы действительно очень крикливы и шумны, это птицы общественные, живут небольшими стаями.',
        image: 'https://live.staticflickr.com/5252/5430716819_451a6abacd_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/FNIOJOZADD/XC403505-AnjouanCuckooRoller_Anjouan_101517_song4.mp3'
      },
      {
        id: 5,
        name: 'Кукабарра',
        species: 'Dacelo leachii',
        description: 'Голубокрылая кукабарра . Места обитания - Австралия, Новая Гвинея. Длина 42 см. Вес 130 г Кукабарра, или как ее еще именуют, смеющийся зимородок, обитает только в Новом Свете. Местные жители называют этих небольших, но сильных и отважных птиц, охотниками на змей. ',
        image: 'https://live.staticflickr.com/65535/48062669752_1db845cdf5_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/JTZTRQUTQV/XC478834-NBF08%2C%20Blue-winged%20Kookaburra%2C%2020Apr2018.mp3'
      },
      {
        id: 6,
        name: 'Зимородок',
        species: 'Alcedo atthis',
        description: 'Обыкновенный зимородок . Места обитания - Азия, Африка, Европа, Новая Гвинея. Длина 18 см. Вес 35 г Увидеть зимородка - необыкновенная удача, а наблюдать, как эта птица охотится - огромное удовольствие.',
        image: 'https://live.staticflickr.com/1877/42806877900_a5bb6221ac_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC522821-2019-11-24%20Acheres%20Martin%20pecheur%20divers%20cris%20en%20vol%20%2B.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Фаэтoны',
        species: 'Phaethontidae',
        description: 'Род водных птиц из монотипических семейства фаэтоновых и отряда фаэтонообразных; в более ранних системах семейство включали в отряд пеликанообразных. Их связь с другими современными птицами неясна, и, кажется, они не имеют близких родственников.',
        image: 'https://live.staticflickr.com/8772/18136706532_8965f0ee35_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/UKNISVRBBF/XC503607-RBTr.2019.10.08.HI.Kauai.KokeeStatePark.mp3'
      },
      {
        id: 2,
        name: 'Качурки',
        species: 'Hydrobatidae',
        description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
        image: 'https://live.staticflickr.com/8391/29097811623_580cbf1567_k.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/TYEQKORVXJ/XC428897-Storm%20Petrel%2C%20Inishtrahull%2C%2030%20July%202018.mp3'
      },
      {
        id: 3,
        name: 'Кулик-сорока',
        species: 'Haematopus ostralegus',
        description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
        image: 'https://live.staticflickr.com/65535/49237313213_38b953f8f7_h.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC526485-2019-10-10%20Sein%20Huitrier%20pie%20series%20de%20cris%20rapides.mp3'
      },
      {
        id: 4,
        name: 'Бигуанский баклан',
        species: 'Phalacrocorax brasilianus',
        description: 'акланы - птицы, родственные пеликанам, с длинной шеей и длинным клювом, питаются рыбой. Они прекрасно плавают и ныряют, но их перья, недостаточно смазанные жиром, быстро намокают.',
        image: 'https://live.staticflickr.com/4889/40424604053_8ae63809ec_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/CDTGHVBGZP/Neotropic%20Cormorant2009-11-29-2.mp3'
      },
      {
        id: 5,
        name: 'Водорез',
        species: 'Rynchops',
        description: 'Водорез, или ножеклюв, летает над самой волной и как бы срезает верхний слой воды. Своим удивительным клювом он буквально снимает пищу с поверхности, подобно тому как ложкой снимают сливки с молока. Никакой другой птице это больше не удается, потому что ни у одной другой птицы нет такого клюва.',
        image: 'https://live.staticflickr.com/7878/40322639623_88aebc8059_w.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/DGVLLRYDXS/RYNNIG01.mp3'
      },
      {
        id: 6,
        name: 'Морские чайки',
        species: 'Larus marinus',
        description: 'Морская чайка может достигать длины 75 см и является самым крупным видом чаек. Она весит до 2 кг, а размах её крыльев составляет около 170 см.',
        image: 'https://live.staticflickr.com/4350/37148809896_25652944d2_z.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC478855-2018-08-18%20Gardskagi%20180818%20Goelands%20marins%20cris%20de%20vol%20d%20un%20couple.mp3'
      }
    ]
  ];

  export default birdsData;
